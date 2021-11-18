import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState();

  const login = () => {
    if (!user)
      setUser({
        name: "Monochrome",
        email: "mono.workplace@gmail.com",
        roles: "ADMIN",
      });

    return user;
  };
  const logout = () => {
    setUser(null);
  };

  return {
    login: login,
    logout: logout,
    user: user,
  };
};
