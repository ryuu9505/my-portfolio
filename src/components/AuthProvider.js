import React, { createContext, useContext, useEffect, useState } from 'react';

import { fetchMe, login, logout, fetchUserById } from '../api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        if (me && me.id) {
          const userDetail = await fetchUserById(me.id);
          setUser(userDetail);
        } else {
          setUser(null);
        }
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleLogin = async (username, password) => {
    await login(username, password);
    const me = await fetchMe();
    if (me && me.id) {
      const userDetail = await fetchUserById(me.id);
      setUser(userDetail);
    } else {
      setUser(null);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
