import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../molecules/AuthProvider';
import Login from './Login';
import SignUp from './SignUp';
import { Dashboard } from './Dashboard';
import { ProtectedRoute } from '../molecules/ProtectedRoute';
import { Cart } from '../molecules/Cart';
import { Shop } from '../molecules/Shop';
import { About } from '../molecules/About';
import ErrorBoundary from './ErrorBoundary';
import { useAuth0 } from '@auth0/auth0-react';
import Landing from './Landing';

const AppRoutes = () => {
  // const { token } = useAuth();

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>

        {/* Catch all route for 404 */}
        <Route path="*" element={<ErrorBoundary><Login /></ErrorBoundary>} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
