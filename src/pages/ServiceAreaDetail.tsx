import React from 'react';
import { useParams } from 'react-router-dom';
import { getServiceAreaById } from '../data/serviceAreas';

const ServiceAreaDetail: React.FC = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const area = areaId ? getServiceAreaById(areaId) : null;

  if (!area) {
    return <div>Service area not found</div>;
  }

  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Pest Control in {area.name}</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">{area.description}</p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginTop: '4rem'}}>
            <div>
              <h3>Local Challenges</h3>
              <ul>
                {area.localChallenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
              
              <h3>Service Highlights</h3>
              <ul>
                {area.serviceHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              
              <h3>Common Pests in {area.name}</h3>
              <ul>
                {area.commonPests.map((pest, index) => (
                  <li key={index}>{pest}</li>
                ))}
              </ul>
            </div>
            
            <div style={{background: 'var(--gray-50)', padding: '2rem', borderRadius: '20px'}}>
              <h3>Service Information</h3>
              <p><strong>Response Time:</strong> {area.responseTime}</p>
              <p><strong>Success Rate:</strong> {area.successRate}</p>
              <p><strong>Population:</strong> {area.population.toLocaleString()}</p>
              <p><strong>Postcode:</strong> {area.postcode}</p>
              
              <h4>Pricing</h4>
              <p><strong>Residential:</strong> {area.pricing.residential}</p>
              <p><strong>Commercial:</strong> {area.pricing.commercial}</p>
              <p><strong>Emergency:</strong> {area.pricing.emergency}</p>
              
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

export default ServiceAreaDetail; 