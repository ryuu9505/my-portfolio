import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export async function login(username, password) {
  try {
    await api.post(
      '/sessions',
      { username, password },
      { withCredentials: true }
    );
  } catch (err) {
    const msg = err.response?.data || 'Login failed';
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
  }
}

export async function logout() {
  await api.delete('/sessions', { withCredentials: true });
}

export async function fetchMe() {
  try {
    const res = await api.get('/me', { withCredentials: true });
    return res.data;
  } catch (err) {
    return null;
  }
}
