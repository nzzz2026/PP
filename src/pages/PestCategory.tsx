import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPestsByCategory, pestCategories } from '../data/pests';

const PestCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = pestCategories.find(cat => cat.id === category);
  const pests = category ? getPestsByCategory(category) : [];

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>{categoryData.icon} {categoryData.name}</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">{categoryData.description}</p>
          </div>
          
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem'
          }}>
            {pests.map((pest) => (
              <Link 
                key={pest.id}
                to={`/pest-library/${category}/${pest.id}`}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{pest.icon}</div>
                <h3 style={{color: 'var(--forest)', marginBottom: '1rem'}}>{pest.name}</h3>
                <p style={{color: 'var(--gray-600)', marginBottom: '1rem'}}>{pest.description}</p>
                <div style={{
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: pest.riskLevel === 'high' ? '#FEE2E2' : pest.riskLevel === 'medium' ? '#FEF3C7' : '#D1FAE5',
                    color: pest.riskLevel === 'high' ? '#DC2626' : pest.riskLevel === 'medium' ? '#D97706' : '#059669'
                  }}>
                    {pest.riskLevel.toUpperCase()} RISK
                  </span>
                  <span style={{color: 'var(--primary)', fontWeight: 600}}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestCategory; 