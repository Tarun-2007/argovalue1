import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get('action') || 'login';
  const isRegister = action === 'register';

  return (
    <div className="role-selection-page">
      <div className="role-container">
        <h1>Welcome to ArgoValue</h1>
        <p>{isRegister ? 'Choose your account type to register' : 'Please select how you want to continue'}</p>
        
        <div className="role-cards">
          <div className="role-card" onClick={() => navigate(isRegister ? '/admin-register' : '/admin-login')}>
            <div className="role-icon">👑</div>
            <h2>{isRegister ? 'Register' : 'Login'} as Admin</h2>
            <p>Manage users, view all data, and control the platform</p>
            <button className="role-btn admin-btn">{isRegister ? 'Register' : 'Continue'} as Admin</button>
          </div>

          <div className="role-card" onClick={() => navigate(isRegister ? '/user-register' : '/user-login')}>
            <div className="role-icon">👤</div>
            <h2>{isRegister ? 'Register' : 'Login'} as User</h2>
            <p>Manage your products, access training, and join community</p>
            <button className="role-btn user-btn">{isRegister ? 'Register' : 'Continue'} as User</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
