import React from 'react';
import { useParams } from 'react-router-dom';
import { getBoroughServiceAreaById } from '../data/boroughServiceAreas';

const ServiceAreaDetail: React.FC = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const area = areaId ? getBoroughServiceAreaById(areaId) : null;

  // Update document title for SEO
  React.useEffect(() => {
    if (area) {
      document.title = area.seoTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', area.seoDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = area.seoDescription;
        document.head.appendChild(meta);
      }
    }
  }, [area]);

  if (!area) {
    return <div>Service area not found</div>;
  }

  return (
    <div style={{ backgroundColor: '#FAFBFC', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
          url('/hero-images/freepik__the-style-is-candid-image-photography-with-natural__64245.jpeg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Pest Control in {area.displayName}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Professional pest control services with {area.responseTime} response time
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontSize: '0.9rem'
            }}>
              📍 Population: {area.population}
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontSize: '0.9rem'
            }}>
              ⚡ {area.responseTime} Response
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontSize: '0.9rem'
            }}>
              ✅ {area.successRate} Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Left Column - Main Content */}
            <div>
              {/* About the Area */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}>
                <h2 style={{
                  color: 'var(--forest)',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  About {area.displayName}
                </h2>
                <p style={{
                  color: 'var(--gray-600)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {area.demographics}. This diverse borough covers {area.neighborhoods.length} main areas 
                  including {area.neighborhoods.slice(0, 4).join(', ')}{area.neighborhoods.length > 4 ? ' and more' : ''}.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginTop: '1.5rem'
                }}>
                  <div>
                    <h4 style={{ color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Postcodes Covered</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {area.postcodes.map(postcode => (
                        <span key={postcode} style={{
                          background: 'var(--primary)15',
                          color: 'var(--primary)',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          {postcode}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 style={{ color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Transport Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {area.transportLinks.slice(0, 3).map(transport => (
                        <li key={transport} style={{
                          color: 'var(--gray-600)',
                          fontSize: '0.9rem',
                          marginBottom: '0.25rem'
                        }}>
                          🚊 {transport}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Pests */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}>
                <h2 style={{
                  color: 'var(--forest)',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  Common Pests in {area.displayName}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem'
                }}>
                  {area.commonPests.map(pest => (
                    <div key={pest} style={{
                      background: 'var(--gray-50)',
                      padding: '1rem',
                      borderRadius: '12px',
                      textAlign: 'center',
                      border: '1px solid var(--gray-200)'
                    }}>
                      <div style={{
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        {pest === 'Rats' && '🐀'}
                        {pest === 'Mice' && '🐁'}
                        {pest === 'Cockroaches' && '🪳'}
                        {pest === 'Bed bugs' && '🛏️'}
                        {pest === 'Wasps' && '🐝'}
                        {pest === 'Ants' && '🐜'}
                        {pest === 'Foxes' && '🦊'}
                        {pest === 'Squirrels' && '🐿️'}
                        {pest === 'Pigeons' && '🐦'}
                        {pest === 'Moths' && '🦋'}
                        {pest === 'Flies' && '🪰'}
                        {pest === 'Spiders' && '🕷️'}
                        {!['Rats', 'Mice', 'Cockroaches', 'Bed bugs', 'Wasps', 'Ants', 'Foxes', 'Squirrels', 'Pigeons', 'Moths', 'Flies', 'Spiders'].includes(pest) && '🐛'}
                      </div>
                      <h4 style={{
                        color: 'var(--charcoal)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {pest}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Challenges */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}>
                <h2 style={{
                  color: 'var(--forest)',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  Local Pest Control Challenges
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  {area.localChallenges.map((challenge, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'var(--gray-50)',
                      borderRadius: '12px',
                      border: '1px solid var(--gray-200)'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'var(--orange)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }}></div>
                      <p style={{
                        color: 'var(--gray-700)',
                        fontSize: '0.9rem',
                        margin: 0,
                        lineHeight: 1.4
                      }}>
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Highlights */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}>
                <h2 style={{
                  color: 'var(--forest)',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  Our {area.displayName} Service Highlights
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  {area.serviceHighlights.map((highlight, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'var(--primary)05',
                      borderRadius: '12px',
                      border: '1px solid var(--primary)20'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'var(--primary)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }}></div>
                      <p style={{
                        color: 'var(--gray-700)',
                        fontSize: '0.9rem',
                        margin: 0,
                        lineHeight: 1.4
                      }}>
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Contact Card */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                position: 'sticky',
                top: '100px'
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    color: 'var(--forest)',
                    marginBottom: '0.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '700'
                  }}>
                    Get Immediate Help
                  </h3>
                  <p style={{
                    color: 'var(--gray-600)',
                    fontSize: '0.9rem'
                  }}>
                    Emergency pest control services available 24/7
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    color: 'var(--charcoal)',
                    marginBottom: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Service Information
                  </h4>
                  
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>Response Time</span>
                    <p style={{ 
                      color: 'var(--charcoal)', 
                      fontWeight: '600', 
                      margin: '0.25rem 0',
                      fontSize: '0.9rem' 
                    }}>
                      {area.responseTime}
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>Success Rate</span>
                    <p style={{ 
                      color: 'var(--primary)', 
                      fontWeight: '600', 
                      margin: '0.25rem 0',
                      fontSize: '0.9rem' 
                    }}>
                      {area.successRate}
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>Area Population</span>
                    <p style={{ 
                      color: 'var(--charcoal)', 
                      fontWeight: '600', 
                      margin: '0.25rem 0',
                      fontSize: '0.9rem' 
                    }}>
                      {area.population}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{
                    color: 'var(--charcoal)',
                    marginBottom: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Pricing Guide
                  </h4>
                  
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0'
                    }}>
                      <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Residential</span>
                      <span style={{ color: 'var(--charcoal)', fontWeight: '600', fontSize: '0.9rem' }}>
                        {area.pricing.residential}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0'
                    }}>
                      <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Commercial</span>
                      <span style={{ color: 'var(--charcoal)', fontWeight: '600', fontSize: '0.9rem' }}>
                        {area.pricing.commercial}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0'
                    }}>
                      <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Emergency</span>
                      <span style={{ color: 'var(--orange)', fontWeight: '600', fontSize: '0.9rem' }}>
                        {area.pricing.emergency}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <a 
                    href="tel:07727049304" 
                    style={{
                      background: 'linear-gradient(135deg, var(--primary) 0%, var(--forest) 100%)',
                      color: 'white',
                      padding: '1rem 1.5rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      display: 'block'
                    }}
                  >
                    📞 Call Now: 077 2704 9304
                  </a>
                  
                  <a 
                    href="/contact"
                    style={{
                      background: 'transparent',
                      color: 'var(--primary)',
                      padding: '1rem 1.5rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      border: '2px solid var(--primary)',
                      transition: 'all 0.3s ease',
                      display: 'block'
                    }}
                  >
                    Get Free Quote
                  </a>
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: 'var(--gray-50)',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    color: 'var(--primary)',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem'
                  }}>
                    🏆
                  </div>
                  <p style={{
                    color: 'var(--charcoal)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    margin: '0 0 0.25rem 0'
                  }}>
                    100% Satisfaction Guarantee
                  </p>
                  <p style={{
                    color: 'var(--gray-600)',
                    fontSize: '0.75rem',
                    margin: 0
                  }}>
                    Based on {area.testimonialCount} local reviews
                  </p>
                </div>
              </div>

              {/* Local Facts */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 style={{
                  color: 'var(--forest)',
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '700'
                }}>
                  Did You Know?
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  {area.landmarks.slice(0, 3).map((landmark, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: 'var(--primary)' }}>🏛️</span>
                      <span style={{
                        color: 'var(--gray-700)',
                        fontSize: '0.85rem'
                      }}>
                        {landmark}
                      </span>
                    </div>
                  ))}
                </div>
                
                <p style={{
                  color: 'var(--gray-600)',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  Our local knowledge helps us provide targeted pest solutions for {area.displayName}'s unique environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreaDetail; 