import React from 'react';
import { Link } from 'react-router-dom';
import { pestCategories } from '../data/pests';

const PestLibrary: React.FC = () => {
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
            Complete Pest Library
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Expert identification, treatment options, and prevention strategies for London's most common pests
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {pestCategories.map((category) => (
              <Link 
                key={category.id}
                to={`/pest-library/${category.id}`}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: 'fit-content'
                }}
                className="category-card"
              >
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                  marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                  textAlign: 'center',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  color: 'var(--forest)',
                  marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: '700',
                  lineHeight: 1.2
                }}>
                  {category.name}
                </h3>
                <p style={{
                  color: 'var(--gray-600)',
                  textAlign: 'center',
                  lineHeight: 1.5,
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  marginBottom: 'clamp(1rem, 2vw, 1.25rem)'
                }}>
                  {category.description}
                </p>
                <div style={{
                  textAlign: 'center'
                }}>
                  <span style={{
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    View Pests →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestLibrary; 