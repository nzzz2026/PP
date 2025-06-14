import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiStar, FiArrowRight, FiZap, FiPhone, FiRecycle } from 'react-icons/fi';
import heroImage from '../hero_image.jpeg';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#FAFBFC', minHeight: '100vh' }}>
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          background: `linear-gradient(135deg, rgba(26, 36, 47, 0.85) 0%, rgba(15, 118, 110, 0.75) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          padding: 'clamp(80px, 15vw, 120px) 0',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          minHeight: 'clamp(500px, 70vh, 700px)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}>
              <FiCheck style={{fontSize: '0.8rem'}} />
              <span>London's #1 Rated Pest Control</span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              marginBottom: '1rem',
              color: 'white',
              letterSpacing: '-0.02em',
              textShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)'
            }}>
              Say Goodbye to<br/>
              <span style={{
                color: 'var(--lime)',
                textShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)'
              }}>Unwanted Guests</span>
            </h1>
            
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 2rem',
              textShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)'
            }}>
              Professional pest control that actually works. Same-day service across London.
            </p>
            
            {/* Trust Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: 'var(--lime)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}><FiCheck style={{fontSize: '0.8rem'}} /></div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.8rem', color: 'white' }}>Since 2008</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>16+ Years Experience</div>
                </div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: 'var(--lime)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}><FiCheck style={{fontSize: '0.8rem'}} /></div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.8rem', color: 'white' }}>BPCA Certified</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>Professional Standards</div>
                </div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: 'var(--lime)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}><FiCheck style={{fontSize: '0.8rem'}} /></div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.8rem', color: 'white' }}>Fully Insured</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>£2M Public Liability</div>
                </div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: 'var(--lime)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}><FiCheck style={{fontSize: '0.8rem'}} /></div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.8rem', color: 'white' }}>4.9/5 Rating</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>487+ Reviews</div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="tel:08007723999" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '18px 40px',
                fontSize: '1.2rem',
                fontWeight: '700',
                borderRadius: '12px',
                background: 'var(--lime)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
                textShadow: 'none'
              }}>
                <span>Call Now: 0800-772-3999</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: 'clamp(40px, 6vw, 60px) 0', background: 'white' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, var(--ivory) 0%, var(--white) 100%)',
              borderRadius: 'clamp(12px, 3vw, 20px)',
              padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <div className="stats-grid">
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                    borderRadius: '2px'
                  }}></div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--forest)',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.025em'
                  }}>16+</div>
                  <div style={{ color: 'var(--gray-700)', fontSize: '1rem', fontWeight: '600' }}>Years Experience</div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Since 2008</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                    borderRadius: '2px'
                  }}></div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--forest)',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.025em'
                  }}>12,500+</div>
                  <div style={{ color: 'var(--gray-700)', fontSize: '1rem', fontWeight: '600' }}>Happy Customers</div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Satisfied Clients</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                    borderRadius: '2px'
                  }}></div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--forest)',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.025em'
                  }}>32</div>
                  <div style={{ color: 'var(--gray-700)', fontSize: '1rem', fontWeight: '600' }}>London Boroughs</div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Complete Coverage</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                    borderRadius: '2px'
                  }}></div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--forest)',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.025em'
                  }}>98%</div>
                  <div style={{ color: 'var(--gray-700)', fontSize: '1rem', fontWeight: '600' }}>Success Rate</div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Guaranteed Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: 'clamp(40px, 8vw, 80px) 0', background: '#FAFBFC' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)', maxWidth: '700px', margin: '0 auto clamp(2rem, 5vw, 3rem)' }}>
              <h2 style={{
                color: 'var(--forest)',
                marginBottom: '1rem',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700'
              }}>Professional Pest Control Services</h2>
              <div style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                margin: '0 auto 1.5rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>Comprehensive solutions tailored to your needs, delivered by certified professionals with cutting-edge technology and eco-friendly methods</p>
            </div>
            
            <div className="services-grid">
              {/* Residential Service */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-light) 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    minWidth: '60px'
                  }}>R</div>
                  <div>
                    <h3 style={{
                      color: 'var(--forest)',
                      marginBottom: '0.25rem',
                      fontSize: '1.25rem',
                      fontWeight: '700'
                    }}>Residential Pest Control</h3>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: 'var(--forest)'
                    }}>From £149</div>
                  </div>
                </div>
                <p style={{
                  color: 'var(--gray-600)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                  fontSize: '0.9rem'
                }}>Complete home protection with family-safe treatments and comprehensive coverage for all common household pests.</p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', padding: 0 }}>
                  {[
                    'Same-day emergency response available',
                    'Child & pet safe eco-friendly methods',
                    '6-month guarantee with free follow-ups',
                    'Free property inspection & advice',
                    'Support hotline included',
                    'Digital treatment reports provided'
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--gray-700)',
                      fontSize: '0.8rem',
                      borderBottom: index < 5 ? '1px solid var(--gray-100)' : 'none'
                    }}>
                      <span style={{
                        color: 'var(--lime)',
                        fontWeight: 'bold',
                        width: '16px',
                        height: '16px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        minWidth: '16px'
                      }}><FiCheck style={{fontSize: '0.8rem'}} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/services/residential" style={{
                    color: 'var(--forest)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>Learn More <FiArrowRight style={{fontSize: '0.8rem'}} /></Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ color: '#FFD700', fontSize: '0.8rem' }}><div style={{display: 'flex', gap: '2px'}}>{[...Array(5)].map((_, i) => <FiStar style={{fontSize: '0.8rem'}} />)}</div></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>4.9/5</span>
                  </div>
                </div>
              </div>
              
              {/* Commercial Service */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    minWidth: '60px'
                  }}>C</div>
                  <div>
                    <h3 style={{
                      color: 'var(--forest)',
                      marginBottom: '0.25rem',
                      fontSize: '1.25rem',
                      fontWeight: '700'
                    }}>Commercial Solutions</h3>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: 'var(--forest)'
                    }}>Custom Quote</div>
                  </div>
                </div>
                <p style={{
                  color: 'var(--gray-600)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                  fontSize: '0.9rem'
                }}>Discreet, professional service for businesses with flexible scheduling and comprehensive compliance documentation.</p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', padding: 0 }}>
                  {[
                    'Flexible out-of-hours service available',
                    'Full compliance & certification docs',
                    'Monthly maintenance contracts available',
                    'Emergency support guaranteed',
                    'Risk assessment & prevention plans',
                    'Staff training & awareness programs'
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--gray-700)',
                      fontSize: '0.8rem',
                      borderBottom: index < 5 ? '1px solid var(--gray-100)' : 'none'
                    }}>
                      <span style={{
                        color: 'var(--lime)',
                        fontWeight: 'bold',
                        width: '16px',
                        height: '16px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        minWidth: '16px'
                      }}><FiCheck style={{fontSize: '0.8rem'}} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/services/commercial" style={{
                    color: 'var(--forest)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>Learn More <FiArrowRight style={{fontSize: '0.8rem'}} /></Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ color: '#FFD700', fontSize: '0.8rem' }}><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>5.0/5</span>
                  </div>
                </div>
              </div>
              
              {/* Restaurant Service */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--accent)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    minWidth: '60px'
                  }}>F</div>
                  <div>
                    <h3 style={{
                      color: 'var(--forest)',
                      marginBottom: '0.25rem',
                      fontSize: '1.25rem',
                      fontWeight: '700'
                    }}>Restaurant & Food Safety</h3>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: 'var(--forest)'
                    }}>From £199/mo</div>
                  </div>
                </div>
                <p style={{
                  color: 'var(--gray-600)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                  fontSize: '0.9rem'
                }}>HACCP-compliant pest management specifically designed for food service establishments and hospitality venues.</p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', padding: 0 }}>
                  {[
                    'HACCP & food safety certified approach',
                    'Health inspection readiness guarantee',
                    'Monitoring systems & alerts',
                    'Digital reporting portal access',
                    'Staff hygiene training included',
                    'Emergency call-out within 2 hours'
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--gray-700)',
                      fontSize: '0.8rem',
                      borderBottom: index < 5 ? '1px solid var(--gray-100)' : 'none'
                    }}>
                      <span style={{
                        color: 'var(--lime)',
                        fontWeight: 'bold',
                        width: '16px',
                        height: '16px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        minWidth: '16px'
                      }}><FiCheck style={{fontSize: '0.8rem'}} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/services/restaurants" style={{
                    color: 'var(--forest)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>Learn More <FiArrowRight style={{fontSize: '0.8rem'}} /></Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ color: '#FFD700', fontSize: '0.8rem' }}><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /><FiStar style={{fontSize: '0.8rem'}} /></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link to="/services" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                fontSize: '0.9rem',
                fontWeight: '600',
                borderRadius: '10px',
                background: 'var(--forest)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--gray-800) 50%, var(--charcoal) 100%)',
          color: 'white'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              <h2 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700'
              }}>Why London Trusts Pest Pro</h2>
              <div style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                margin: '0 auto 1.5rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6
              }}>Industry-leading expertise, cutting-edge technology, and unwavering commitment to excellence</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { icon: 'E', title: 'Certified Experts', desc: 'BPCA trained and certified professionals with continuous education and 16+ years of London experience.' },
                { icon: 'E', title: 'Eco-Friendly Methods', desc: 'Environmentally responsible treatments that are safe for your family, pets, and the London ecosystem.' },
                { icon: 'G', title: 'Guaranteed Results', desc: '100% satisfaction guarantee with free re-treatments and comprehensive 6-month warranties.' },
                { icon: 'R', title: 'Rapid Response', desc: 'Emergency service with same-day response across all London boroughs within 2 hours.' }
              ].map((item, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(15, 118, 110, 0.4)';
                  e.currentTarget.style.border = '1px solid rgba(15, 118, 110, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.2) 0%, rgba(8, 145, 178, 0.2) 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    border: '1px solid rgba(15, 118, 110, 0.3)',
                    color: 'var(--forest)',
                    fontWeight: '700',
                    fontSize: '1.2rem'
                  }}>{item.icon}</div>
                  <h3 style={{
                    color: 'white',
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>{item.title}</h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.85rem',
                    lineHeight: 1.5
                  }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Pests */}
        <section style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              <h2 style={{
                color: 'var(--forest)',
                marginBottom: '1rem',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700'
              }}>London's Most Common Pests</h2>
              <div style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                margin: '0 auto 1.5rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1rem',
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>Expert identification and treatment for all urban pests with detailed information about risks, prevention, and professional solutions</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {[
                { 
                  title: 'Rats & Mice', 
                  subtitle: "London's #1 pest problem", 
                  urgency: 'High Risk', 
                  coverage: '42% Properties',
                  response: '2-4hrs',
                  success: '95%',
                  color: '#EF4444',
                  issues: [
                    'Victorian building entry points exploitation',
                    "Health risks: Weil's disease, Salmonella, Hantavirus",
                    'Property damage to wiring, insulation & structures',
                    'Rapid reproduction - one pair can produce 2,000 offspring yearly'
                  ]
                },
                { 
                  title: 'Cockroaches', 
                  subtitle: 'Rising 23% annually in London', 
                  urgency: 'Growing Problem', 
                  coverage: 'Disease Risk',
                  response: 'Same Day',
                  success: '92%',
                  color: '#F97316',
                  issues: [
                    "Thrive in London's warm, damp environments",
                    'Spread 33 different bacteria including E.coli',
                    'Trigger asthma and severe allergic reactions',
                    'Extremely rapid reproduction requiring immediate action'
                  ]
                },
                { 
                  title: 'Bed Bugs', 
                  subtitle: 'Hotels & residential surge', 
                  urgency: 'Increasing', 
                  coverage: 'Heat Treatment',
                  response: '24hrs',
                  success: '98%',
                  color: '#8B5CF6',
                  issues: [
                    'Feed exclusively on human blood during sleep',
                    'Cause itchy welts and severe sleep disruption',
                    'Require professional heat treatment for elimination',
                    'Spread rapidly through apartments and hotels'
                  ]
                }
              ].map((pest, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${pest.color}15 0%, ${pest.color}05 100%)`,
                    padding: '1.5rem',
                    borderBottom: '1px solid var(--gray-200)'
                  }}>
                    <h3 style={{
                      color: 'var(--charcoal)',
                      marginBottom: '0.25rem',
                      fontSize: '1.2rem',
                      fontWeight: '700'
                    }}>{pest.title}</h3>
                    <p style={{
                      color: 'var(--gray-600)',
                      fontSize: '0.85rem'
                    }}>{pest.subtitle}</p>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      marginTop: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        background: `${pest.color}20`,
                        color: pest.color,
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>{pest.urgency}</span>
                      <span style={{
                        background: '#FCD34D20',
                        color: '#F59E0B',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>{pest.coverage}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '1rem'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: 'var(--charcoal)'
                        }}>{pest.response}</div>
                        <div style={{
                          fontSize: '0.7rem',
                          color: 'var(--gray-500)'
                        }}>Response</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: 'var(--charcoal)'
                        }}>{pest.success}</div>
                        <div style={{
                          fontSize: '0.7rem',
                          color: 'var(--gray-500)'
                        }}>Success</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {pest.issues.map((issue, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          marginBottom: '0.75rem',
                          fontSize: '0.8rem',
                          color: 'var(--gray-600)',
                          lineHeight: 1.4
                        }}>
                          <span style={{
                            color: '#EF4444',
                            fontWeight: 'bold',
                            marginTop: '0.1rem',
                            minWidth: '8px'
                          }}>×</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--gray-100)'
                    }}>
                      <Link to="/pest-library" style={{
                        color: 'var(--forest)',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '0.8rem'
                      }}>Learn More <FiArrowRight style={{fontSize: '0.8rem'}} /></Link>
                      <span style={{
                        background: `${pest.color}15`,
                        color: pest.color,
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>Urgent Treatment</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Link to="/pest-library" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                fontSize: '0.9rem',
                fontWeight: '600',
                borderRadius: '10px',
                background: 'var(--forest)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                <span>View Complete Pest Library</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section style={{ padding: '80px 0', background: '#FAFBFC' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              <h2 style={{
                color: 'var(--forest)',
                marginBottom: '1rem',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700'
              }}>Serving All of Greater London</h2>
              <div style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--lime) 0%, var(--primary) 100%)',
                margin: '0 auto 1.5rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1rem',
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>Comprehensive coverage across all 32 London boroughs with rapid response times and local expertise in each area</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--forest-dark) 100%)',
                borderRadius: '20px',
                padding: '3rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    color: 'white',
                    marginBottom: '1.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>Complete London Coverage</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginTop: '1.5rem'
                  }}>
                    <div>
                      {['Westminster', 'Camden', 'Islington', 'Tower Hamlets', 'Hackney', 'Southwark', 'Lambeth', 'Wandsworth'].map((area, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0',
                          fontWeight: '500',
                          color: 'white',
                          fontSize: '0.85rem'
                        }}>
                          <span style={{
                            color: 'var(--lime)',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            width: '16px',
                            height: '16px',
                            background: 'rgba(16, 185, 129, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '16px'
                          }}><FiCheck style={{fontSize: '0.8rem'}} /></span>
                          {area}
                        </div>
                      ))}
                    </div>
                    <div>
                      {['Kensington & Chelsea', 'Greenwich', 'Richmond', 'Hammersmith', 'Newham', 'Lewisham', 'Croydon', '+ 17 More Boroughs'].map((area, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0',
                          fontWeight: '500',
                          color: 'white',
                          fontSize: '0.85rem'
                        }}>
                          <span style={{
                            color: 'var(--lime)',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            width: '16px',
                            height: '16px',
                            background: 'rgba(16, 185, 129, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '16px'
                          }}><FiCheck style={{fontSize: '0.8rem'}} /></span>
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: 'var(--lime)',
                        marginBottom: '0.25rem'
                      }}>32</div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}>Boroughs Covered</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: 'var(--lime)',
                        marginBottom: '0.25rem'
                      }}>2hrs</div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}>Max Response</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: 'var(--lime)',
                        marginBottom: '0.25rem'
                      }}>365</div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}>Days Per Year</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%)',
                borderRadius: '20px',
                padding: '3rem',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '2px dashed var(--gray-200)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    color: 'var(--forest)',
                    fontWeight: '700'
                  }}>MAP</div>
                  <h3 style={{
                    color: 'var(--forest)',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>Interactive London Service Map</h3>
                  <p style={{
                    color: 'var(--gray-600)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    Select your borough to see estimated response times, local pest trends, and area-specific services. Our GPS-tracked vehicles ensure the fastest possible response across all London areas.
                  </p>
                  <Link to="/service-areas" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    background: 'var(--forest)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    <span>Check Your Area</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--forest-dark) 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container">
            <div style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                color: 'white'
              }}>Ready to Solve Your Pest Problem?</h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6
              }}>
                Don't let pests disrupt your life any longer. Get professional, guaranteed results from London's most trusted pest control experts.
              </p>
              
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                margin: '2rem 0',
                background: 'linear-gradient(135deg, #10B981 0%, #0891B2 50%, #1E40AF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>0800-772-3999</div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                margin: '2rem 0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  <FiZap style={{ fontSize: '1.1rem' }} />
                  <span>Same-Day Service</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  <FiPhone style={{ fontSize: '1.1rem' }} />
                  <span>Free Quotes & Inspections</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  <FiCheck style={{ fontSize: '1.1rem' }} />
                  <span>Guaranteed Results</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  <FiRecycle style={{ fontSize: '1.1rem' }} />
                  <span>Eco-Friendly Methods</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                marginTop: '2rem'
              }}>
                <Link to="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '14px 28px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  background: 'var(--forest)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>
                  <span>Book Online Now</span>
                </Link>
                <a href="tel:08007723999" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '14px 28px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span>Get Instant Quote</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section style={{
          padding: '2rem 0',
          background: 'var(--charcoal)'
        }}>
          <div className="container">
            <p style={{
              textAlign: 'center',
              color: 'var(--gray-400)',
              marginBottom: '1.5rem',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              Accredited and Trusted by Leading Organizations:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              {[
                'British Pest Control Association',
                "Which? Trusted Trader",
                'Safe Contractor Approved',
                'Environmental Agency Registered'
              ].map((org, index) => (
                <div key={index} style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}><FiCheck style={{fontSize: '0.8rem'}} /> {org}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;