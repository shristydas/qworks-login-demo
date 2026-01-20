export const setToken = (token) => {
  localStorage.setItem('axisToken', token);
};

export const getToken = () => {
  return localStorage.getItem('axisToken');
};

export const removeToken = () => {
  localStorage.removeItem('axisToken');
};

export const setUser = (user) => {
  localStorage.setItem('axisUser', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('axisUser');
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem('axisUser');
};
