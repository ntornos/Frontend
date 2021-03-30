import axios from 'axios';

export const logout = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/logout`, {
    withCredentials: true,
  });
  if (data.status) window.location.href = '/';
};

export const signInSignUp = async (email, password, userAction) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/account/${userAction}`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  if (data.status) {
    userAction === 'login'
      ? (window.location.href = '/myntornos/user-home')
      : (window.location.href = '/login');
  }
};
