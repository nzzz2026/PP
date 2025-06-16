import React from 'react';
// import { FiPhone } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#FAFBFC', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--gray-800) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>
            About Pest Defenders
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            London's most trusted pest control experts since 2008
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid var(--gray-200)',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                color: 'var(--forest)',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Professional Pest Control Since 2008
              </h2>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                We've been protecting London homes and businesses from pests for over 15 years. Our team of certified professionals uses the latest techniques and eco-friendly solutions to eliminate pests safely and effectively.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: 'var(--lime)',
                    marginBottom: '0.5rem'
                  }}>15+</div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Years Experience</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: 'var(--lime)',
                    marginBottom: '0.5rem'
                  }}>10,000+</div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Happy Customers</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: 'var(--lime)',
                    marginBottom: '0.5rem'
                  }}>32</div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>London Boroughs</p>
                </div>
              </div>
            </div>
            
            <a 
              href="tel:07727049304" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '16px 32px',
                background: 'var(--lime)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
              }}
            >
              📞
              <span>Call Now: 077 2704 9304</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 