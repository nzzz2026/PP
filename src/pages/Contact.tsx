import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pestType: '',
    urgency: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
            Get Professional Pest Control
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Contact our experts today for fast, effective pest control solutions across London
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Left Side - Support Information */}
            <div>
              <h2 style={{
                color: 'var(--forest)',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Expert Support When You Need It
              </h2>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Our certified pest control specialists are standing by to help you reclaim your space. With over 16 years of experience serving London, we provide fast, effective, and environmentally responsible solutions.
              </p>

              {/* Contact Methods */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  marginBottom: '1rem',
                  border: '1px solid var(--gray-200)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--lime)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}>24</div>
                    <div>
                      <h3 style={{ color: 'var(--forest)', marginBottom: '0.25rem', fontSize: '1.2rem' }}>24/7 Emergency Line</h3>
                      <p style={{ color: 'var(--gray-600)', fontSize: '1.1rem', fontWeight: '700' }}>0800-772-3999</p>
                      <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Always available for urgent pest issues</p>
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
                      background: 'var(--primary)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem'
                    }}>@</div>
                    <div>
                      <h3 style={{ color: 'var(--forest)', marginBottom: '0.25rem', fontSize: '1.2rem' }}>Email Support</h3>
                      <p style={{ color: 'var(--gray-600)', fontSize: '1rem' }}>info@pestprolondon.co.uk</p>
                      <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Response within 2 hours during business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Elements */}
              <div style={{
                background: 'linear-gradient(135deg, var(--ivory) 0%, var(--white) 100%)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid var(--gray-200)'
              }}>
                <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontSize: '1.2rem' }}>Why Choose Us?</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'BPCA Certified professionals',
                    'Fully insured (£2M public liability)',
                    'Same-day emergency service',
                    'Eco-friendly treatment options',
                    '6-month service guarantee',
                    'Free follow-up inspections'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0',
                      color: 'var(--gray-700)',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{
                        color: 'var(--lime)',
                        fontWeight: 'bold',
                        width: '20px',
                        height: '20px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--gray-200)'
              }}>
                <h3 style={{
                  color: 'var(--forest)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  Get Your Free Quote
                </h3>
                <p style={{
                  color: 'var(--gray-600)',
                  textAlign: 'center',
                  marginBottom: '2rem'
                }}>
                  Tell us about your pest problem and we'll provide a customized solution
                </p>

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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
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
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="Street address, London postcode"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--gray-700)',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        Pest Type
                      </label>
                      <select
                        name="pestType"
                        value={formData.pestType}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select pest type</option>
                        <option value="rats">Rats</option>
                        <option value="mice">Mice</option>
                        <option value="cockroaches">Cockroaches</option>
                        <option value="ants">Ants</option>
                        <option value="wasps">Wasps/Hornets</option>
                        <option value="bedbugs">Bed Bugs</option>
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
                        Urgency
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select urgency</option>
                        <option value="emergency">Emergency (Today)</option>
                        <option value="urgent">Urgent (24-48 hours)</option>
                        <option value="standard">Standard (This week)</option>
                        <option value="planned">Planned (Flexible)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Describe Your Pest Problem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                      placeholder="Tell us about the pest problem, where you've seen them, how long it's been happening, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--lime)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    Get Free Quote & Schedule Service
                  </button>
                </form>

                <p style={{
                  textAlign: 'center',
                  color: 'var(--gray-500)',
                  fontSize: '0.85rem',
                  marginTop: '1rem'
                }}>
                  We'll respond within 30 minutes during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 