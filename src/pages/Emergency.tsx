import React from 'react';

const Emergency: React.FC = () => {
  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section emergency-banner">
        <div className="container">
          <div className="section-header">
            <h1 style={{color: 'white'}}>🚨 Emergency Pest Control</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
              24/7 emergency response across all London boroughs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="gradient-text phone-large">0800-772-3999</div>
            <p style={{color: 'white', marginTop: '2rem', fontSize: '1.2rem'}}>
              Available 24/7 for pest emergencies
            </p>
            <a href="tel:08007723999" className="btn btn-primary btn-lg" style={{marginTop: '2rem'}}>
              <span>📞</span>
              <span>Call Emergency Line Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency; 