import { useEffect, useState } from 'react';
import { authService } from '../services/authService';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h1>{user?.name || 'User'}</h1>
          <p>{user?.email || 'user@example.com'}</p>
        </div>

        <div className="profile-sections">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>{user?.name || 'N/A'}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user?.email || 'N/A'}</p>
              </div>
              <div className="info-item">
                <label>Member Since</label>
                <p>January 2024</p>
              </div>
              <div className="info-item">
                <label>Location</label>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Account Statistics</h2>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-label">Products Listed</span>
                <span className="stat-value">12</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Trainings Completed</span>
                <span className="stat-value">5</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Community Posts</span>
                <span className="stat-value">8</span>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="action-btn primary">Edit Profile</button>
            <button className="action-btn secondary">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
