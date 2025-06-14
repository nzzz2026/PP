import React from 'react';
import { Link } from 'react-router-dom';
import { serviceAreas, londonRegions } from '../data/serviceAreas';

const ServiceAreas: React.FC = () => {
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
            London Service Areas
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Professional pest control services across all 32 London boroughs with rapid response times and local expertise
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          {londonRegions.map((region) => (
            <div key={region.id} style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
              <h2 style={{
                color: region.color,
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                {region.name}
              </h2>
              <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: 'clamp(1rem, 2.5vw, 1.5rem)',
                maxWidth: '1400px',
                margin: '0 auto'
              }}>
                {serviceAreas
                  .filter(area => area.region === region.id)
                  .map((area) => (
                    <Link 
                      key={area.id}
                      to={`/service-areas/${area.id}`}
                      style={{
                        background: 'white',
                        borderRadius: '16px',
                        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        color: 'inherit',
                        border: `2px solid ${region.color}20`,
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{
                        marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)'
                      }}>
                        <h3 style={{
                          color: 'var(--forest)',
                          margin: '0 0 0.5rem 0',
                          fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)',
                          fontWeight: '700',
                          lineHeight: 1.2
                        }}>
                          {area.name}
                        </h3>
                        <span style={{
                          background: `${region.color}15`,
                          color: region.color,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          display: 'inline-block',
                          wordBreak: 'break-word',
                          maxWidth: '100%'
                        }}>
                          {area.postcode}
                        </span>
                      </div>
                      
                      <p style={{
                        color: 'var(--gray-600)',
                        marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                        lineHeight: 1.5,
                        flex: 1
                      }}>
                        {area.description.length > 100 
                          ? `${area.description.substring(0, 100)}...` 
                          : area.description
                        }
                      </p>
                      
                      <div style={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingTop: 'clamp(0.75rem, 1.5vw, 1rem)',
                        borderTop: '1px solid var(--gray-200)'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{
                            width: '8px',
                            height: '8px',
                            background: region.color,
                            borderRadius: '50%'
                          }}></span>
                          <span style={{
                            color: 'var(--gray-700)',
                            fontWeight: 600,
                            fontSize: '0.8rem'
                          }}>
                            Response: {area.responseTime}
                          </span>
                        </div>
                        <span style={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          View Area →
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas; 