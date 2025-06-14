import React from 'react';
import { Link } from 'react-router-dom';
import { pestCategories } from '../data/pests';

const PestLibrary: React.FC = () => {
  return (
    <div style={{paddingTop: '120px'}}>
      {/* Hero Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h1>Complete Pest Library</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive guide to London's most common pests with expert identification, 
              treatment options, and prevention strategies from our certified professionals.
            </p>
          </div>
          
          {/* Categories Grid */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginTop: '4rem'
          }}>
            {pestCategories.map((category) => (
              <Link 
                key={category.id}
                to={`/pest-library/${category.id}`}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                className="category-card"
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  color: 'var(--forest)',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  fontSize: '1.5rem'
                }}>
                  {category.name}
                </h3>
                <p style={{
                  color: 'var(--gray-600)',
                  textAlign: 'center',
                  lineHeight: 1.6
                }}>
                  {category.description}
                </p>
                <div style={{
                  textAlign: 'center',
                  marginTop: '1.5rem'
                }}>
                  <span style={{
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: '0.875rem'
                  }}>
                    Learn More →
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