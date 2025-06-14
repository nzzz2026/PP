import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <main style={{ paddingTop: '80px' }}>
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
              <a href="tel:02071234567" className="btn btn-primary btn-lg">
                <span>📞</span>
                <span>Call Now: 020 7123 4567</span>
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
              {/* Residential Service */}
              <div className="service-card animate-scale-in">
                <div className="service-header">
                  <div className="service-icon modern-hover">
                    <div style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>🏠</div>
                  </div>
                  <div className="service-info">
                    <h3>Residential Pest Control</h3>
                    <div className="service-price">From £149</div>
                  </div>
                </div>
                <p className="service-description">Complete home protection with family-safe treatments and comprehensive coverage for all common household pests.</p>
                <ul className="service-features">
                  <li>Same-day emergency response available</li>
                  <li>Child & pet safe eco-friendly methods</li>
                  <li>6-month guarantee with free follow-ups</li>
                  <li>Free property inspection & advice</li>
                  <li>Support hotline included</li>
                  <li>Digital treatment reports provided</li>
                </ul>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/services/residential" style={{ color: 'var(--forest)', fontWeight: '600', textDecoration: 'none' }}>Learn More →</Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#FFD700' }}>★★★★★</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>4.9/5</span>
                  </div>
                </div>
              </div>
              
              {/* Commercial Service */}
              <div className="service-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="service-header">
                  <div className="service-icon modern-hover" style={{ background: 'var(--primary)' }}>
                    <div style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>🏢</div>
                  </div>
                  <div className="service-info">
                    <h3>Commercial Solutions</h3>
                    <div className="service-price">Custom Quote</div>
                  </div>
                </div>
                <p className="service-description">Discreet, professional service for businesses with flexible scheduling and comprehensive compliance documentation.</p>
                <ul className="service-features">
                  <li>Flexible out-of-hours service available</li>
                  <li>Full compliance & certification docs</li>
                  <li>Monthly maintenance contracts available</li>
                  <li>Emergency support guaranteed</li>
                  <li>Risk assessment & prevention plans</li>
                  <li>Staff training & awareness programs</li>
                </ul>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/services/commercial" style={{ color: 'var(--forest)', fontWeight: '600', textDecoration: 'none' }}>Learn More →</Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#FFD700' }}>★★★★★</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>5.0/5</span>
                  </div>
                </div>
              </div>
              
              {/* Restaurant Service */}
              <div className="service-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="service-header">
                  <div className="service-icon modern-hover" style={{ background: 'var(--accent)' }}>
                    <div style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>🍽️</div>
                  </div>
                  <div className="service-info">
                    <h3>Restaurant & Food Safety</h3>
                    <div className="service-price">From £199/mo</div>
                  </div>
                </div>
                <p className="service-description">HACCP-compliant pest management specifically designed for food service establishments and hospitality venues.</p>
                <ul className="service-features">
                  <li>HACCP & food safety certified approach</li>
                  <li>Health inspection readiness guarantee</li>
                  <li>Monitoring systems & alerts</li>
                  <li>Digital reporting portal access</li>
                  <li>Staff hygiene training included</li>
                  <li>Emergency call-out within 2 hours</li>
                </ul>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/services/restaurants" style={{ color: 'var(--forest)', fontWeight: '600', textDecoration: 'none' }}>Learn More →</Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#FFD700' }}>★★★★★</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link to="/services" className="btn btn-primary btn-lg">
                <span>View All Services</span>
              </Link>
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
            
            <div style={{ textAlign: 'center' }}>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div className="animate-on-scroll">
                <div style={{
                  background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--forest-dark) 100%)',
                  borderRadius: '24px',
                  padding: '4rem',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.5rem' }}>Complete London Coverage</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                      <div>
                        <div className="area-item">Westminster</div>
                        <div className="area-item">Camden</div>
                        <div className="area-item">Islington</div>
                        <div className="area-item">Tower Hamlets</div>
                        <div className="area-item">Hackney</div>
                        <div className="area-item">Southwark</div>
                        <div className="area-item">Lambeth</div>
                        <div className="area-item">Wandsworth</div>
                      </div>
                      <div>
                        <div className="area-item">Kensington & Chelsea</div>
                        <div className="area-item">Greenwich</div>
                        <div className="area-item">Richmond</div>
                        <div className="area-item">Hammersmith</div>
                        <div className="area-item">Newham</div>
                        <div className="area-item">Lewisham</div>
                        <div className="area-item">Croydon</div>
                        <div className="area-item">+ 17 More Boroughs</div>
                      </div>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '2rem',
                      marginTop: '3rem',
                      paddingTop: '2rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--lime)', marginBottom: '0.5rem' }}>32</div>
                        <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>Boroughs Covered</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--lime)', marginBottom: '0.5rem' }}>2hrs</div>
                        <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>Max Response</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--lime)', marginBottom: '0.5rem' }}>365</div>
                        <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>Days Per Year</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%)',
                  borderRadius: '24px',
                  padding: '4rem',
                  minHeight: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  border: '2px dashed var(--gray-200)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--forest)', fontWeight: '700' }}>🗺️</div>
                    <h3 style={{ color: 'var(--forest)', marginBottom: '1rem' }}>Interactive London Service Map</h3>
                    <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                      Select your borough to see estimated response times, local pest trends, and area-specific services. Our GPS-tracked vehicles ensure the fastest possible response across all London areas.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                      <Link to="/service-areas" className="btn btn-primary">
                        <span>Check Your Area</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section final-cta">
          <div className="container">
            <div className="final-cta-content animate-on-scroll">
              <h2>Ready to Solve Your Pest Problem?</h2>
              <p style={{ fontSize: '1.3rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
                Don't let pests disrupt your life any longer. Get professional, guaranteed results from London's most trusted pest control experts.
              </p>
              
              <div className="phone-large">020 7123 4567</div>
              
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
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>📅</span>
                  <span>Book Online Now</span>
                </Link>
                <a href="tel:02071234567" className="btn btn-secondary btn-lg">
                  <span>💬</span>
                  <span>Get Instant Quote</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-charcoal" style={{ padding: '3rem 0' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--gray-400)', marginBottom: '2rem', fontSize: '1.125rem', fontWeight: '600' }}>
              Accredited and Trusted by Leading Organizations:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>✓ British Pest Control Association</div>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>✓ Which? Trusted Trader</div>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>✓ Safe Contractor Approved</div>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>✓ Environmental Agency Registered</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;