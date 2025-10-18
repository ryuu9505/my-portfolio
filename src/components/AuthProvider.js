import { fetchMe, fetchUserById, login, logout } from '@apis/Login';
import React, { createContext, useContext, useEffect, useState } from 'react';

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
    try {
      await login(username, password);
      const me = await fetchMe();
      if (me && me.id) {
        const userDetail = await fetchUserById(me.id);
        setUser(userDetail);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
      throw error; // 컴포넌트에서 에러 메시지를 표시할 수 있도록 throw
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      // 로그아웃 실패시에도 클라이언트 상태는 초기화
      setUser(null);
      console.error('로그아웃 중 오류 발생:', error);
    }
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
