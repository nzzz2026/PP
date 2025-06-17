import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FiPhone } from 'react-icons/fi';
import '../styles/Header.css';
import PPLLogoWhite from '../PPL White.svg';

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
            <Link to="/" className="logo-link">
              <img src={PPLLogoWhite} alt="Pest Pro London" className="logo-image" />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li className="pest-library-dropdown">
                <Link to="/pest-library">Pest Library</Link>
                <div className="pest-dropdown">
                  <div className="pest-dropdown-content">
                    <div className="pest-dropdown-section">
                      <h4>Common London Pests</h4>
                      <div className="pest-list">
                        <Link to="/pest-library/bed-bugs" className="pest-item">
                          <span>Bed Bugs</span>
                        </Link>
                        <Link to="/pest-library/house-spiders" className="pest-item">
                          <span>Spiders</span>
                        </Link>
                        <Link to="/pest-library/cockroaches" className="pest-item">
                          <span>Cockroaches</span>
                        </Link>
                        <Link to="/pest-library/rats" className="pest-item">
                          <span>Rodents</span>
                        </Link>
                        <Link to="/pest-library/ants" className="pest-item">
                          <span>Ants</span>
                        </Link>
                        <Link to="/pest-library/wasps" className="pest-item">
                          <span>Wasps</span>
                        </Link>
                      </div>
                      <Link to="/pest-library" className="view-all-pests">View All Pests →</Link>
                    </div>
                    <div className="pest-dropdown-guarantee">
                      <h4>Our Service Promise</h4>
                      <div className="guarantee-content">
                        <div className="guarantee-text">
                          <strong>100% Satisfaction Guarantee</strong>
                          <p>Expert local technicians with proven results across London</p>
                        </div>
                      </div>
                      <div className="dropdown-cta-buttons">
                        <Link to="/contact" className="dropdown-btn estimate-btn">Get Free Quote</Link>
                        <a href="tel:07727049304" className="dropdown-btn call-btn">077 2704 9304</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          {/* CTA */}
          <div className="header-cta">
            <a href="tel:07727049304" className="phone-number">
              <span className="phone-text">077 2704 9304</span>
            </a>
            <Link to="/emergency" className="emergency-btn">Emergency</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-menu">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
              <li><Link to="/pest-library" onClick={() => setIsMobileMenuOpen(false)}>Pest Library</Link></li>
              <li><Link to="/service-areas" onClick={() => setIsMobileMenuOpen(false)}>Service Areas</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
            <div className="mobile-cta">
              <a href="tel:07727049304" className="mobile-phone">
                <span>077 2704 9304</span>
              </a>
              <Link to="/emergency" className="mobile-emergency" onClick={() => setIsMobileMenuOpen(false)}>
                Emergency Call
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 