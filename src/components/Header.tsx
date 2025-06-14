import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <div className="logo-icon animate-pulse">🛡️</div>
            <Link to="/" className="logo-text">Pest Defenders</Link>
          </div>
          
          {/* Navigation */}
          <nav>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pest-library">Pest Library</Link></li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          {/* CTA */}
          <div className="header-cta">
            <a href="tel:08007723999" className="phone-number">
              <span className="animate-pulse">📞</span>
              <span>0800-772-3999</span>
            </a>
            <Link to="/emergency" className="emergency-btn">Emergency Call</Link>
          </div>
          
          {/* Mobile Menu */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 