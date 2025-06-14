import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Hero.css';

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      
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
        <section style={{ 
          padding: '80px 0', 
          background: '#F9FAFB',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                background: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#22C55E',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>16+</div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1A242F',
                  marginBottom: '0.25rem'
                }}>Years Experience</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6B7280'
                }}>Since 2008</div>
              </div>

              <div style={{
                background: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#22C55E',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>12,500+</div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1A242F',
                  marginBottom: '0.25rem'
                }}>Happy Customers</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6B7280'
                }}>Satisfied Clients</div>
              </div>

              <div style={{
                background: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#22C55E',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>32</div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1A242F',
                  marginBottom: '0.25rem'
                }}>London Boroughs</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6B7280'
                }}>Complete Coverage</div>
              </div>

              <div style={{
                background: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#22C55E',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>98%</div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1A242F',
                  marginBottom: '0.25rem'
                }}>Success Rate</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6B7280'
                }}>Guaranteed Results</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ 
          padding: '120px 0', 
          background: 'white',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '5rem', 
              maxWidth: '800px', 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }}>
              <h2 style={{ 
                color: '#004225', 
                marginBottom: '1.5rem',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700'
              }}>Professional Pest Control Services</h2>
              <div style={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #22C55E 0%, #2563EB 100%)',
                margin: '0 auto 2rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1.25rem',
                color: '#6B7280',
                lineHeight: 1.6
              }}>Comprehensive solutions tailored to your needs, delivered by certified professionals with cutting-edge technology and eco-friendly methods</p>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link 
                to="/services" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '20px 40px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
                }}
              >
                <span>🔍</span>
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Common Pests Preview */}
        <section style={{ 
          padding: '120px 0', 
          background: '#F9FAFB',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '5rem', 
              maxWidth: '800px', 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }}>
              <h2 style={{ 
                color: '#004225', 
                marginBottom: '1.5rem',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700'
              }}>London's Most Common Pests</h2>
              <div style={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #22C55E 0%, #2563EB 100%)',
                margin: '0 auto 2rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1.25rem',
                color: '#6B7280',
                lineHeight: 1.6
              }}>Expert identification and treatment for all urban pests with detailed information about risks, prevention, and professional solutions</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/pest-library" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '20px 40px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
                }}
              >
                <span>📚</span>
                <span>View Complete Pest Library</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas Preview */}
        <section style={{ 
          padding: '120px 0', 
          background: 'white',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '5rem', 
              maxWidth: '800px', 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }}>
              <h2 style={{ 
                color: '#004225', 
                marginBottom: '1.5rem',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700'
              }}>Serving All of Greater London</h2>
              <div style={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #22C55E 0%, #2563EB 100%)',
                margin: '0 auto 2rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1.25rem',
                color: '#6B7280',
                lineHeight: 1.6
              }}>Comprehensive coverage across all 32 London boroughs with rapid response times and local expertise in each area</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/service-areas" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '20px 40px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
                }}
              >
                <span>📍</span>
                <span>Check Your Area</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{
          padding: '120px 0',
          background: 'linear-gradient(135deg, #004225 0%, #1E40AF 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><defs><pattern id=\\"dots\\" width=\\"20\\" height=\\"20\\" patternUnits=\\"userSpaceOnUse\\"><circle cx=\\"10\\" cy=\\"10\\" r=\\"1\\" fill=\\"rgba(255,255,255,0.1)\\"/></pattern></defs><rect width=\\"100\\" height=\\"100\\" fill=\\"url(%23dots)\\"/></svg>")',
            opacity: 0.5
          }}></div>
          
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                color: 'white'
              }}>Ready to Solve Your Pest Problem?</h2>
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '2rem',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Don't let pests disrupt your life any longer. Get professional, guaranteed results from London's most trusted pest control experts.
              </p>
              
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '800',
                margin: '2rem 0',
                background: 'linear-gradient(135deg, #22C55E 0%, #2563EB 50%, #1E40AF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '2px 2px 20px rgba(0, 0, 0, 0.3)'
              }}>020 7123 4567</div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                margin: '3rem 0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>⚡</span>
                  <span>Same-Day Service</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>💰</span>
                  <span>Free Quotes & Inspections</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🎯</span>
                  <span>Guaranteed Results</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🌿</span>
                  <span>Eco-Friendly Methods</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'center',
                marginTop: '3rem'
              }}>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '20px 40px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  <span>📅</span>
                  <span>Book Online Now</span>
                </Link>
                <a 
                  href="tel:02071234567"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '20px 40px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span>💬</span>
                  <span>Get Instant Quote</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home; 