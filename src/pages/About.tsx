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
            About Pest Pro London
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

      {/* Our Mission & Values Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '800',
              color: 'var(--charcoal)',
              marginBottom: '1rem'
            }}>
              Our Mission & Values
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Protecting London homes and businesses with integrity, professionalism, and environmental responsibility
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              background: '#f8fafc',
              padding: '2.5rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid var(--gray-200)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--lime)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>🎯</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--charcoal)',
                marginBottom: '1rem'
              }}>Our Mission</h3>
              <p style={{
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>
                To provide London with the most effective, safe, and environmentally conscious pest control solutions while building lasting relationships based on trust and exceptional service.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              padding: '2.5rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid var(--gray-200)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--lime)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>🌱</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--charcoal)',
                marginBottom: '1rem'
              }}>Environmental Care</h3>
              <p style={{
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>
                We prioritize eco-friendly methods and biodegradable products to protect London's environment while effectively eliminating pests from your property.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              padding: '2.5rem',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid var(--gray-200)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--lime)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>🤝</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--charcoal)',
                marginBottom: '1rem'
              }}>Customer First</h3>
              <p style={{
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>
                Every decision we make puts our customers first. From transparent pricing to 30-day guarantees, we're committed to your complete satisfaction and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pest Pro London Section */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '800',
              color: 'var(--charcoal)',
              marginBottom: '1rem'
            }}>
              Why Choose Pest Pro London?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              What sets us apart from other pest control companies in London
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                icon: '⚡',
                title: 'Rapid Response',
                description: 'Same-day service available across all 32 London boroughs. Average response time: 45 minutes for emergencies.'
              },
              {
                icon: '🎓',
                title: 'BPCA Certified',
                description: 'All technicians are British Pest Control Association certified with ongoing training in the latest pest control methods.'
              },
              {
                icon: '🛡️',
                title: 'Fully Insured',
                description: '£2M public liability insurance and comprehensive coverage for your complete peace of mind.'
              },
              {
                icon: '🌍',
                title: 'Local Expertise',
                description: 'Deep knowledge of London-specific pest challenges, from Victorian drainage to urban wildlife management.'
              },
              {
                icon: '🔬',
                title: 'Advanced Methods',
                description: 'Cutting-edge technology including thermal imaging, GPS tracking, and targeted biological controls.'
              },
              {
                icon: '💯',
                title: 'Satisfaction Guarantee',
                description: '30-day guarantee after last sighting. If pests return, we return at no extra charge.'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid var(--gray-200)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: 'var(--charcoal)',
                  marginBottom: '1rem'
                }}>{feature.title}</h3>
                <p style={{
                  color: 'var(--gray-600)',
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process & Certifications Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--charcoal)',
                marginBottom: '1.5rem'
              }}>
                Our Professional Process
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--gray-600)',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Every pest control treatment follows our proven 5-step process, ensuring effective results and your safety.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { step: '1', title: 'Free Inspection', desc: 'Comprehensive property assessment and pest identification' },
                  { step: '2', title: 'Custom Treatment Plan', desc: 'Tailored solution based on your specific pest problem' },
                  { step: '3', title: 'Safe Application', desc: 'Professional treatment using approved, eco-friendly methods' },
                  { step: '4', title: 'Monitoring & Follow-up', desc: 'Regular check-ins to ensure complete elimination' },
                  { step: '5', title: 'Prevention Advice', desc: 'Expert guidance to prevent future infestations' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--lime)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>{item.step}</div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: 'var(--charcoal)',
                        marginBottom: '0.5rem'
                      }}>{item.title}</h4>
                      <p style={{
                        color: 'var(--gray-600)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                background: 'var(--gray-50)',
                padding: '3rem',
                borderRadius: '20px',
                border: '1px solid var(--gray-200)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--charcoal)',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>Our Certifications</h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem'
                }}>
                  {[
                    { icon: '🏛️', title: 'BPCA Certified', desc: 'British Pest Control Association member' },
                    { icon: '✅', title: 'SafeContractor', desc: 'Health & safety compliance approved' },
                    { icon: '🎯', title: 'RSPH Qualified', desc: 'Royal Society for Public Health trained' },
                    { icon: '🌿', title: 'IPM Certified', desc: 'Integrated Pest Management specialist' }
                  ].map((cert, index) => (
                    <div key={index} style={{
                      textAlign: 'center',
                      padding: '1rem'
                    }}>
                      <div style={{
                        fontSize: '2.5rem',
                        marginBottom: '0.5rem'
                      }}>{cert.icon}</div>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        color: 'var(--charcoal)',
                        marginBottom: '0.25rem'
                      }}>{cert.title}</h4>
                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--gray-600)',
                        margin: 0,
                        lineHeight: 1.4
                      }}>{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '800',
              color: 'var(--charcoal)',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Common questions about our pest control services in London
            </p>
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: 'Is pest control safe for newborn babies and pets?',
                answer: 'Yes, our treatments are safe when applied correctly. We use products formulated at low concentrations and applied in specific areas. For homes with newborns or sensitive pets, we recommend remaining out of treated areas for 2-4 hours after application. All our products are approved for domestic use and we provide detailed safety guidelines.'
              },
              {
                question: 'How much do your pest control services cost?',
                answer: 'Our pricing depends on the type of pest, severity of infestation, property size, and treatment method required. We provide free, no-obligation quotes after our initial inspection. Most residential treatments range from £120-£300, with ongoing prevention plans starting from £80 per visit. Contact us for a personalized quote.'
              },
              {
                question: 'What is your service guarantee?',
                answer: 'We offer a 30-day guarantee after the last sighting. If pests return within this period, we will return at no extra charge to retreat your property. Your satisfaction is our goal - if you aren\'t completely satisfied, we will work with you until you are, including additional treatments if necessary.'
              },
              {
                question: 'How quickly can you respond to pest emergencies?',
                answer: 'We offer same-day service across all London boroughs with an average response time of 45 minutes for emergency calls. For wasp nests, severe rodent infestations, or commercial emergencies, we prioritize immediate response. Standard appointments are usually available within 24-48 hours.'
              },
              {
                question: 'What pest control methods do you use?',
                answer: 'We use integrated pest management (IPM) combining targeted treatments, exclusion methods, and environmental modifications. Our approach includes biodegradable pesticides, humane trapping, thermal treatments, and biological controls. All methods are chosen based on the specific pest and your property\'s needs.'
              },
              {
                question: 'Do you provide ongoing pest prevention services?',
                answer: 'Yes, we offer quarterly and bi-annual prevention programs to keep your property pest-free year-round. Ongoing pest control is cost-effective compared to emergency treatments and reduces the stress of dealing with surprise infestations. Our maintenance plans include regular inspections and proactive treatments.'
              },
              {
                question: 'Which areas of London do you serve?',
                answer: 'We provide pest control services across all 32 London boroughs including Central, North, South, East, and West London. From Camden to Croydon, Westminster to Waltham Forest - our certified technicians know the unique pest challenges in each area and respond quickly throughout Greater London.'
              },
              {
                question: 'What should I do to prepare for pest control treatment?',
                answer: 'Preparation varies by pest type, but generally: remove food items from treatment areas, ensure access to affected areas, remove pets during application, and follow our specific pre-treatment checklist provided after booking. We provide detailed preparation instructions tailored to your treatment type.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                marginBottom: '1rem',
                borderRadius: '12px',
                border: '1px solid var(--gray-200)',
                overflow: 'hidden'
              }}>
                <details style={{ margin: 0 }}>
                  <summary style={{
                    padding: '1.5rem 2rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--charcoal)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    borderBottom: '1px solid var(--gray-200)',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--gray-50)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                    {faq.question}
                    <span style={{
                      float: 'right',
                      fontSize: '1.2rem',
                      color: 'var(--lime)'
                    }}>+</span>
                  </summary>
                  <div style={{
                    padding: '1.5rem 2rem',
                    color: 'var(--gray-600)',
                    lineHeight: 1.6
                  }}>
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--gray-600)',
              marginBottom: '1.5rem'
            }}>
              Still have questions? We're here to help!
            </p>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
              }}
            >
              📞
              <span>Call Us: 077 2704 9304</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 