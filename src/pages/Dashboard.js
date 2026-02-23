import { useEffect, useState } from 'react';
import { authService } from '../services/authService';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome back, {user?.name || 'Farmer'}! 🌾</h1>
          <p>Manage your agricultural products and grow your business</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <h3>12</h3>
              <p>Total Products</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <h3>₹45,000</h3>
              <p>Total Revenue</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>28</h3>
              <p>Community Members</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div className="stat-info">
              <h3>5</h3>
              <p>Completed Trainings</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="section-card">
            <h2>Recent Activities</h2>
            <ul className="activity-list">
              <li>✅ Added new product: Organic Honey</li>
              <li>📚 Completed training: Value Addition Techniques</li>
              <li>💬 Received 3 new community messages</li>
              <li>📈 Product views increased by 25%</li>
            </ul>
          </div>
          
          <div className="section-card">
            <h2>Quick Actions</h2>
            <div className="quick-actions">
              <button className="action-btn">Add New Product</button>
              <button className="action-btn">View Analytics</button>
              <button className="action-btn">Join Training</button>
              <button className="action-btn">Contact Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
