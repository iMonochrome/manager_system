/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { useAuth } from "./auth";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [loading, setLoading] = useState(false);

  const stores = {
    loading: loading,
    setLoading: setLoading,
    useAuth: useAuth(),
  };

  return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
};
