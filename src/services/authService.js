export const authService = {
  register: async (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === userData.email)) {
      throw { response: { data: { message: 'Email already exists' } } };
    }
    
    const user = { id: Date.now(), ...userData };
    delete user.password;
    users.push({ ...userData, id: user.id });
    localStorage.setItem('users', JSON.stringify(users));
    
    const token = btoa(JSON.stringify({ id: user.id, email: user.email }));
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    return { token, user };
  },

  login: async (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
    
    if (!user) {
      throw { response: { data: { message: 'Invalid email or password' } } };
    }
    
    const token = btoa(JSON.stringify({ id: user.id, email: user.email }));
    const userData = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    
    return { token, user: userData };
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};
