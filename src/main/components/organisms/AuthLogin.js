import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const AuthLogin = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    // Only redirect if user is not authenticated
    if (!isAuthenticated) {
      loginWithRedirect({
        // Optional configuration
        appState: { returnTo: window.location.pathname },
        authorizationParams: {
          prompt: 'login', // Forces the login screen to show
          screen_hint: 'signup' // Optional: Shows signup tab by default
        }
      });
    }
  }, [isAuthenticated, loginWithRedirect]);

  // Optional loading state while redirect happens
  return <div>Redirecting to login...</div>;
};

export default AuthLogin;
