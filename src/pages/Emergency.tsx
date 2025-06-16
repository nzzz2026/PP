import React, { useState } from 'react';

const Emergency: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pestType: '',
    urgency: '',
    description: '',
    preferredTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Emergency form submitted:', formData);
    // Handle emergency form submission here
  };

  return (
    <div style={{ backgroundColor: '#FAFBFC', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Emergency Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'emergency-dots\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'><circle cx=\'10\' cy=\'10\' r=\'1\' fill=\'rgba(255,255,255,0.1)\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23emergency-dots)\'/></svg>")',
          opacity: 0.3
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '8px 20px',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(10px)'
          }}>
            
            <span>24/7 Emergency Response</span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Emergency Pest Control
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)'
          }}>
            Immediate response for urgent pest emergencies across London. Same-day service guaranteed.
          </p>
        </div>
      </section>

      {/* Emergency Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start'
          }}>
            {/* Left Side - Emergency Information */}
            <div>
              <h2 style={{
                color: '#DC2626',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Immediate Emergency Response
              </h2>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                When pests pose an immediate threat to your health, safety, or property, our emergency response team is ready to act. We provide rapid deployment across all London boroughs with guaranteed same-day service.
              </p>

              {/* Emergency Contact Methods */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                  padding: '2rem',
                  borderRadius: '16px',
                  color: 'white',
                  marginBottom: '1rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      fontWeight: 'bold'
                    }}>📞</div>
                    <div>
                      <h3 style={{ marginBottom: '0.25rem', fontSize: '1.3rem' }}>Emergency Hotline</h3>
                      <p style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0.5rem 0' }}>077 2704 9304</p>
                      <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>Available 24/7 - Average response time: 2 hours</p>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid var(--gray-200)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#FEF3C7',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F59E0B',
                      fontSize: '1.5rem'
                    }}></div>
                    <div>
                      <h3 style={{ color: 'var(--forest)', marginBottom: '0.25rem', fontSize: '1.2rem' }}>Online Emergency Request</h3>
                      <p style={{ color: 'var(--gray-600)', fontSize: '1rem' }}>Submit form for priority response</p>
                      <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Response within 30 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Situations */}
              <div style={{
                background: 'linear-gradient(135deg, #FEF3C7 0%, #FEF9E7 100%)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #F59E0B20'
              }}>
                <h3 style={{ color: '#F59E0B', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⚠️</span>
                  Emergency Situations Include:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Wasp or bee swarms posing immediate danger',
                    'Rat/mice infestations in food areas',
                    'Cockroach outbreaks in commercial kitchens',
                    'Bed bug infestations in hotels/hostels',
                    'Dangerous spider encounters',
                    'Pest-related health emergencies'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0',
                      color: '#92400E',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{
                        color: '#F59E0B',
                        fontWeight: 'bold',
                        width: '20px',
                        height: '20px',
                        background: 'rgba(245, 158, 11, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem'
                      }}>!</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Emergency Form */}
            <div>
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(220, 38, 38, 0.15)',
                border: '2px solid rgba(220, 38, 38, 0.1)'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem'
                  }}></div>
                  <h3 style={{
                    color: '#DC2626',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    Emergency Response Request
                  </h3>
                  <p style={{
                    color: 'var(--gray-600)',
                    fontSize: '0.95rem'
                  }}>
                    Submit your emergency pest control request for immediate priority response
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--gray-700)',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--gray-700)',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                        placeholder="020 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Emergency Location *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="Full address where emergency is occurring"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--gray-700)',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        Pest Type *
                      </label>
                      <select
                        name="pestType"
                        value={formData.pestType}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select pest type</option>
                        <option value="wasps">Wasps/Hornets</option>
                        <option value="bees">Bees (Swarm)</option>
                        <option value="rats">Rats</option>
                        <option value="mice">Mice</option>
                        <option value="cockroaches">Cockroaches</option>
                        <option value="bedbugs">Bed Bugs</option>
                        <option value="ants">Ants</option>
                        <option value="spiders">Spiders</option>
                        <option value="fleas">Fleas</option>
                        <option value="other">Other/Multiple</option>
                      </select>
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--gray-700)',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        Urgency Level *
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select urgency</option>
                        <option value="high">High - Immediate danger/health risk</option>
                        <option value="medium">Medium - Significant problem</option>
                        <option value="low">Low - Needs attention soon</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Preferred Response Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Any time (fastest response)</option>
                      <option value="immediately">Immediately (within 1 hour)</option>
                      <option value="2hours">Within 2 hours</option>
                      <option value="today">Today (same day)</option>
                      <option value="tomorrow">Tomorrow morning</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Emergency Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                      placeholder="Describe the emergency situation: What pest? Where exactly? Any immediate dangers? How many? When did it start?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '18px',
                      background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 30px rgba(220, 38, 38, 0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Submit Emergency Request
                  </button>
                </form>

                <div style={{
                  textAlign: 'center',
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: '#FEF2F2',
                  borderRadius: '8px',
                  border: '1px solid #FECACA'
                }}>
                  <p style={{
                    color: '#DC2626',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    ⚡ Emergency requests receive priority response within 30 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency; 