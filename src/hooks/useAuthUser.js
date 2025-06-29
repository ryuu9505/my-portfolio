import { useEffect, useState } from 'react';
import api from '@apis/Api';

export function useAuthUser() {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    api.get('/me')
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        setUser(null);
      })
      .finally(() => setChecked(true));
  }, []);

  return { user, checked };
}