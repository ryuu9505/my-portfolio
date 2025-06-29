import api from '@apis/Api';
import { useEffect, useState } from 'react';

export function useAuthUser() {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchUser() {
      try {
        const meRes = await api.get('/me');
        const id = meRes.data.id;
        if (id) {
          const userRes = await api.get(`/users/${id}`);
          if (isMounted) setUser(userRes.data);
        } else {
          if (isMounted) setUser(null);
        }
      } catch {
        if (isMounted) setUser(null);
      } finally {
        if (isMounted) setChecked(true);
      }
    }

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  return { user, checked };
}
