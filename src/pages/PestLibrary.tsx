import React from 'react';
import { Link } from 'react-router-dom';
import { pestCategories } from '../data/pests';

const PestLibrary: React.FC = () => {
  const mostSearchedPests = {
    ants: ['Carpenter Ants', 'Pharaoh Ant', 'Fire Ants', 'Pavement Ant', 'Argentine Ants', 'Field Ants'],
    beetles: ['Carpet Beetles', 'Ground Beetles', 'Grain Beetles', 'Drugstore Beetles', 'Furniture Beetles', 'Cigarette Beetles'],
    cockroaches: ['German Cockroaches', 'American Cockroaches', 'Brown-Banded Cockroaches', 'Oriental Cockroaches', 'Smoky Brown Cockroaches', 'Wood Cockroaches'],
    flying: ['Identifying Gnats', 'Drain flies', 'Mosquitoes', 'Crane flies', 'Wasps', 'Hornets'],
    crawling: ['Ticks', 'Earwigs', 'Weevils', 'Termites', 'Centipedes', 'House dust mites'],
    wildlife: ['Mice', 'Norway rats', 'Squirrels', 'Skunks', 'Raccoons', 'Rabbits']
  };

  return (
    <div style={{ backgroundColor: '#FAFBFC', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{
        background: 'var(--lime)',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '700',
            margin: 0,
            color: 'white'
          }}>
            Pest Library
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0.5rem 0 0 0'
          }}>
            Identify, control, prevent
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section style={{ padding: '16px 0', background: 'white', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            color: 'var(--gray-600)',
            fontSize: '0.9rem'
          }}>
            <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>Pest Library</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '60px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: 'var(--charcoal)'
            }}>
              We Know About Pests, You Can Too
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--gray-700)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              At Pest Pro London, we know pests. We know how to identify them, how best to treat an infestation, and how to stop them coming back. If you're wondering what type of bug you're looking at, we can help.
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-600)',
              lineHeight: 1.6
            }}>
              Explore our pest library to find out how to identify pests, what attracts them to your property, how serious an infestation can be, and how to keep them out. From common house bugs to tiny pests and crawling insects, find all the information you need here.
            </p>
          </div>

          {/* Pest Categories Grid */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {pestCategories.map((category) => (
              <Link 
                key={category.id}
                to={`/pest-library/${category.id}`}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem 1rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--gray-200)',
                  textDecoration: 'none',
                  color: 'inherit',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                className="category-card"
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  color: 'var(--forest)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  margin: 0,
                  lineHeight: 1.2
                }}>
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Searched Pests Section */}
      <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '700',
            marginBottom: '40px',
            color: 'var(--charcoal)',
            textAlign: 'center'
          }}>
            Most Searched Pests
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {Object.entries(mostSearchedPests).map(([category, pests]) => (
              <div key={category} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid var(--gray-200)'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--forest)',
                  textTransform: 'capitalize'
                }}>
                  {category === 'flying' ? 'Other Flying Insects' : 
                   category === 'crawling' ? 'Other Crawling Insects' :
                   category}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {pests.map((pest, index) => (
                    <li key={index} style={{
                      padding: '0.5rem 0',
                      borderBottom: index < pests.length - 1 ? '1px solid var(--gray-100)' : 'none'
                    }}>
                      <Link 
                        to={`/pest-library/${category}/${pest.toLowerCase().replace(/\s+/g, '-')}`}
                        style={{
                          color: 'var(--gray-700)',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {pest}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '60px 0', background: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Residential Services */}
            <div style={{
              background: 'linear-gradient(135deg, var(--lime) 0%, #059669 100%)',
              borderRadius: '16px',
              padding: '2rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem'
              }}>🏠</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Residential Services
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem',
                lineHeight: 1.5
              }}>
                Protect your home from unwanted pests with customized pest control treatment
              </p>
              <Link 
                to="/services/residential"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: 'var(--lime)',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Residential Services
              </Link>
            </div>

            {/* Commercial Services */}
            <div style={{
              background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--gray-800) 100%)',
              borderRadius: '16px',
              padding: '2rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem'
              }}>🏢</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Commercial Services
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem',
                lineHeight: 1.5
              }}>
                Professional pest management solutions for businesses across London
              </p>
              <Link 
                to="/services/commercial"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: 'var(--charcoal)',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Commercial Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Looking for Advice */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '1px solid var(--gray-200)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--forest)'
              }}>
                Looking for advice?
              </h3>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>
                Homeowners face a myriad of pests in the kitchen, in the basement and in the attic. Not to mention all the seasonal pests which can invade your home every year. Pests can cause structural damage to your property, put your employees at risk, and even harm your reputation.
              </p>
            </div>

            {/* Seasonal Advice */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '1px solid var(--gray-200)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--forest)'
              }}>
                Seasonal Advice
              </h3>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--gray-800)'
              }}>
                Wintertime Pest Prevention
              </h4>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                While some pests head south for the winter to escape the cold, others seek shelter in any place that offers warmth, shelter, food and water.
              </p>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--gray-800)'
              }}>
                Spring
              </h4>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}>
                Spring brings pests out of hibernation and into your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '60px 0', background: 'var(--charcoal)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Remove pests from your home, and stop them from coming back
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            We work hard to listen, understand and assess your unique situation. Request a free, no-obligation estimate today for a customized pest program that fits your needs.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/contact"
              style={{
                display: 'inline-block',
                background: 'var(--lime)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Request a Free Home Estimate
            </Link>
            <Link 
              to="/services/commercial"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Request a Free Business Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestLibrary; 