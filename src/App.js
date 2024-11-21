import './App.css';
import Login from './main/components/organisms/Login';
import SignUp from './main/components/organisms/SignUp';
import AuthProvider from './main/components/molecules/AuthProvider';
import AppRoutes from './main/components/organisms/Routes';
import ErrorBoundary from './main/components/organisms/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App;
