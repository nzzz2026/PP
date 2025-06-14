import React from 'react';
import { Link } from 'react-router-dom';
import { serviceAreas, londonRegions } from '../data/serviceAreas';

const ServiceAreas: React.FC = () => {
  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>London Service Areas</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Professional pest control services across all 32 London boroughs with rapid response times and local expertise.
            </p>
          </div>
          
          {londonRegions.map((region) => (
            <div key={region.id} style={{marginBottom: '4rem'}}>
              <h2 style={{color: region.color, marginBottom: '2rem'}}>{region.name}</h2>
              <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem'
              }}>
                {serviceAreas
                  .filter(area => area.region === region.id)
                  .map((area) => (
                    <Link 
                      key={area.id}
                      to={`/service-areas/${area.id}`}
                      style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '2rem',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        color: 'inherit',
                        border: `2px solid ${region.color}20`
                      }}
                    >
                      <h3 style={{color: 'var(--forest)', marginBottom: '1rem'}}>{area.name}</h3>
                      <p style={{color: 'var(--gray-600)', marginBottom: '1rem', fontSize: '0.875rem'}}>
                        {area.postcode}
                      </p>
                      <p style={{color: 'var(--gray-600)', marginBottom: '1.5rem'}}>
                        {area.description.substring(0, 120)}...
                      </p>
                      <div style={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'
                      }}>
                        <span style={{
                          color: region.color,
                          fontWeight: 600,
                          fontSize: '0.875rem'
                        }}>
                          Response: {area.responseTime}
                        </span>
                        <span style={{color: 'var(--primary)', fontWeight: 600}}>Learn More →</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas; 