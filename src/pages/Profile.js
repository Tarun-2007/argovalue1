import { useEffect, useState } from 'react';
import { authService } from '../services/authService';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setFormData(currentUser || {});
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const updated = await authService.updateProfile(user.id, formData);
      setUser(updated);
      setIsEditing(false);
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update profile');
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h1>{user?.name || 'User'}</h1>
          <p>{user?.email || 'user@example.com'}</p>
          {user?.role && <span className="role-badge">{user.role}</span>}
        </div>

        {message && <div className="message">{message}</div>}

        <div className="profile-sections">
          <div className="profile-section">
            <div className="section-header">
              <h2>Personal Information</h2>
              <button onClick={() => setIsEditing(!isEditing)} className="edit-toggle-btn">
                {isEditing ? '✕ Cancel' : '✏️ Edit'}
              </button>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                {isEditing ? (
                  <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
                ) : (
                  <p>{user?.name || 'N/A'}</p>
                )}
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user?.email || 'N/A'}</p>
              </div>
              <div className="info-item">
                <label>Phone</label>
                {isEditing ? (
                  <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} />
                ) : (
                  <p>{user?.phone || 'N/A'}</p>
                )}
              </div>
              <div className="info-item">
                <label>Location</label>
                {isEditing ? (
                  <input type="text" name="location" value={formData.location || ''} onChange={handleChange} />
                ) : (
                  <p>{user?.location || 'N/A'}</p>
                )}
              </div>
            </div>
            {isEditing && (
              <button onClick={handleSave} className="save-btn">Save Changes</button>
            )}
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
