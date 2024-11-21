import axios from "axios";
import { createContext, useContext, useMemo, useReducer } from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {useImmer} from "use-immer";

// Create the authentication context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token,updateToken] = useImmer({
    token:null,
  })
  
  const setToken = (token) => {
    updateToken((draft) => {
      draft.token = token;
    });
  };

  const clearToken = () => {
    updateToken((draft) => {
      draft.token = null;
    });
  };

  const contextValue = useMemo(() => ({token, setToken, clearToken}),[token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to easily access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;