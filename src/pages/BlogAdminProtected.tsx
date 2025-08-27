import React, { useState, useEffect } from 'react';
import BlogAdmin from './BlogAdmin';
import '../styles/BlogAdminProtected.scss';

const BlogAdminProtected: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // The password - in production, this should be environment variable or proper auth system
  const ADMIN_PASSWORD = 'pestpro2024admin';

  useEffect(() => {
    // Check if already authenticated in session
    const authStatus = sessionStorage.getItem('blogAdminAuth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      // Store auth status in session storage (cleared when browser closes)
      sessionStorage.setItem('blogAdminAuth', 'authenticated');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('blogAdminAuth');
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="blog-admin-login">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h1>Blog Admin Access</h1>
              <p>Please enter the admin password to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="password">Admin Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>
              
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <button type="submit" className="login-button">
                Access Admin Panel
              </button>
            </form>
            
            <div className="login-footer">
              <p className="security-note">
                This area is restricted to authorized personnel only. 
                All access attempts are monitored.
              </p>
              <div className="contact-info">
                <p>Need access? Contact your administrator</p>
                <a href="mailto:admin@pestpro.london">admin@pestpro.london</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="authenticated-admin">
      <div className="admin-toolbar">
        <div className="toolbar-content">
          <span className="auth-status">Logged in as Admin</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      <BlogAdmin />
    </div>
  );
};

export default BlogAdminProtected;