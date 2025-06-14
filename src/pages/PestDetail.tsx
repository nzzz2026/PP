import React from 'react';
import { useParams } from 'react-router-dom';
import { getPestById } from '../data/pests';

const PestDetail: React.FC = () => {
  const { pestId } = useParams<{ pestId: string }>();
  const pest = pestId ? getPestById(pestId) : null;

  if (!pest) {
    return <div>Pest not found</div>;
  }

  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>{pest.icon} {pest.name}</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">{pest.description}</p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginTop: '4rem'}}>
            <div>
              <h3>Health Risks</h3>
              <ul>
                {pest.healthRisks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
              
              <h3>Signs of Infestation</h3>
              <ul>
                {pest.signs.map((sign, index) => (
                  <li key={index}>{sign}</li>
                ))}
              </ul>
            </div>
            
            <div style={{background: 'var(--gray-50)', padding: '2rem', borderRadius: '20px'}}>
              <h3>Quick Facts</h3>
              <p><strong>Response Time:</strong> {pest.responseTime}</p>
              <p><strong>Success Rate:</strong> {pest.successRate}</p>
              <p><strong>Price:</strong> {pest.price}</p>
              <p><strong>Risk Level:</strong> {pest.riskLevel}</p>
              
              <a href="tel:08007723999" className="btn btn-primary" style={{marginTop: '2rem', width: '100%'}}>
                Call Now: 0800-772-3999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestDetail; 