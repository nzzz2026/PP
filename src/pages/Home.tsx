import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* Floating Elements */}
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
        
        {/* Hero Content */}
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span>🏆</span>
            <span>London's #1 Rated Pest Control</span>
          </div>
          
          <h1>Say Goodbye to<br/><span className="gradient-text">Unwanted Guests</span></h1>
          <p className="hero-subtitle">Professional pest control that actually works. Same-day service across London.</p>
          
          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge glass-effect">
              <span className="trust-badge-icon">🏆</span>
              <div>
                <div style={{fontWeight: 700}}>BPCA Certified</div>
                <div style={{fontSize: '0.75rem', opacity: 0.8}}>Professional Standards</div>
              </div>
            </div>
            <div className="trust-badge glass-effect">
              <span className="trust-badge-icon">⭐</span>
              <div>
                <div style={{fontWeight: 700}}>4.9/5 Rating</div>
                <div style={{fontSize: '0.75rem', opacity: 0.8}}>487+ Reviews</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="cta-group">
            <a href="tel:08007723999" className="btn btn-primary btn-lg">
              <span>📞</span>
              <span>Call Now: 0800-772-3999</span>
            </a>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              <span>📅</span>
              <span>Free Inspection</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="stats-container animate-on-scroll">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">16+</div>
                <div className="stat-label">Years Experience</div>
                <div className="stat-description">Since 2008</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12,500+</div>
                <div className="stat-label">Happy Customers</div>
                <div className="stat-description">Satisfied Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">32</div>
                <div className="stat-label">London Boroughs</div>
                <div className="stat-description">Complete Coverage</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
                <div className="stat-description">Guaranteed Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Professional Pest Control Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Comprehensive solutions tailored to your needs, delivered by certified professionals with cutting-edge technology and eco-friendly methods</p>
          </div>
          
          <div className="services-grid">
            {/* Service cards would go here - simplified for now */}
            <div className="text-center">
              <Link to="/services" className="btn btn-primary btn-lg">
                <span>🔍</span>
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>London's Most Common Pests</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Expert identification and treatment for all urban pests with detailed information about risks, prevention, and professional solutions</p>
          </div>
          
          <div className="text-center">
            <Link to="/pest-library" className="btn btn-primary btn-lg">
              <span>📚</span>
              <span>View Complete Pest Library</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Serving All of Greater London</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Comprehensive coverage across all 32 London boroughs with rapid response times and local expertise in each area</p>
          </div>
          
          <div className="text-center">
            <Link to="/service-areas" className="btn btn-primary btn-lg">
              <span>📍</span>
              <span>Check Your Area</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container">
          <div className="final-cta-content animate-on-scroll">
            <h2>Ready to Solve Your Pest Problem?</h2>
            <p style={{fontSize: '1.3rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
              Don't let pests disrupt your life any longer. Get professional, guaranteed results from London's most trusted pest control experts.
            </p>
            
            <div className="gradient-text phone-large">0800-772-3999</div>
            
            <div className="cta-features">
              <div className="cta-feature">
                <span className="cta-feature-icon">⚡</span>
                <span>Same-Day Service</span>
              </div>
              <div className="cta-feature">
                <span className="cta-feature-icon">💰</span>
                <span>Free Quotes & Inspections</span>
              </div>
              <div className="cta-feature">
                <span className="cta-feature-icon">🎯</span>
                <span>Guaranteed Results</span>
              </div>
              <div className="cta-feature">
                <span className="cta-feature-icon">🌿</span>
                <span>Eco-Friendly Methods</span>
              </div>
            </div>
            
            <div className="cta-group" style={{marginTop: '3rem'}}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>📅</span>
                <span>Book Online Now</span>
              </Link>
              <a href="tel:08007723999" className="btn btn-secondary btn-lg">
                <span>💬</span>
                <span>Get Instant Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 