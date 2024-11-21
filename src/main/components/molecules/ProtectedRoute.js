import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthLogin from '../organisms/AuthLogin';

// Basic loading component - you can replace this with your custom loader
const LoadingComponent = () => <div>Loading...</div>;

// Create a protected wrapper component using withAuthenticationRequired
const ProtectedComponent = withAuthenticationRequired(Outlet, {
  onRedirecting: () => <LoadingComponent />,
  returnTo: () => window.location.pathname
});

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Handle initial loading state
  if (isLoading) {
    return <LoadingComponent />;
  }

  // Handle unauthenticated users
  if (!isAuthenticated) {
    return <AuthLogin />;
  }

  // Render the protected component
  return <Outlet />;
};
