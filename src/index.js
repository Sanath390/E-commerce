import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './main/components/organisms/ErrorBoundary';
import { Provider } from 'react-redux'
import store from './main/reduxStore/store';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
if (!process.env.REACT_APP_AUTH0_DOMAIN || !process.env.REACT_APP_CLIENT_ID) {
  throw new Error('Missing required Auth0 environment variables');
}
const { REACT_APP_AUTH0_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
root.render(
  <React.StrictMode>
    <Auth0Provider
  domain={REACT_APP_AUTH0_DOMAIN}
  clientId={REACT_APP_CLIENT_ID}
  authorizationParams={{
   redirect_uri: `${window.location.origin}/dashboard`,
   audience: 'http://f&v.example.com'
  }}>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
