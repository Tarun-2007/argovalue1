import { Link } from 'react-router-dom';
import { authService } from '../services/authService';
import './Home.css';

const Home = () => {
  const isAuthenticated = authService.isAuthenticated();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Farm Products into Success
            </h1>
            <p className="hero-subtitle">
              Empowering rural entrepreneurs to create value-added agricultural products. 
              Join our platform to learn, grow, and connect with a thriving farming community.
            </p>
            <div className="hero-buttons">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="btn btn-primary">
                    Go to Dashboard
                  </Link>
                  <Link to="/products" className="btn btn-secondary">
                    View Products
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/role-selection" className="btn btn-primary">
                    Get Started
                  </Link>
                  <Link to="/role-selection" className="btn btn-secondary">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop" 
              alt="Farmers working together in field"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Product Management</h3>
            <p>List and manage your value-added agricultural products efficiently</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Training Programs</h3>
            <p>Access expert training to enhance your farming and business skills</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Community Support</h3>
            <p>Connect with fellow farmers and share knowledge and experiences</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
