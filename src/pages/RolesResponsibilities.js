import React from 'react';
import { authService } from '../services/authService';
import './RolesResponsibilities.css';

const RolesResponsibilities = () => {
  const user = authService.getCurrentUser();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="roles-page">
      <div className="roles-container">
        <h1>Roles & Responsibilities</h1>
        <p className="subtitle">Understanding your duties and capabilities on the platform</p>

        {isAdmin && (
          <div className="role-section admin-section">
            <div className="role-header">
              <span className="role-icon">👑</span>
              <h2>Admin Roles & Responsibilities</h2>
            </div>
            <ul className="responsibilities-list">
              <li>✓ Manage user registrations and approvals</li>
              <li>✓ Monitor product quality and standards</li>
              <li>✓ Approve and manage product listings</li>
              <li>✓ Organize training & skill development programs</li>
              <li>✓ Manage funding, subsidies, and government schemes</li>
              <li>✓ Track sales, performance, and analytics</li>
              <li>✓ Handle feedback and resolve complaints</li>
            </ul>
          </div>
        )}

        <div className="role-section user-section">
          <div className="role-header">
            <span className="role-icon">👤</span>
            <h2>User (Farmer / Rural Entrepreneur) Roles & Responsibilities</h2>
          </div>
          <ul className="responsibilities-list">
            <li>✓ Register and maintain accurate profiles</li>
            <li>✓ Produce value-added agricultural products</li>
            <li>✓ List products with pricing and stock details</li>
            <li>✓ Maintain quality, hygiene, and packaging standards</li>
            <li>✓ Process and fulfill customer orders</li>
            <li>✓ Participate in training programs</li>
            <li>✓ Track income and business growth</li>
            <li>✓ Improve products using customer feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RolesResponsibilities;
