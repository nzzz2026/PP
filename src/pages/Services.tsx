import React from 'react';

const Services: React.FC = () => {
  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Our Services</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Professional pest control services for residential and commercial properties across London.
            </p>
          </div>
          
          <div className="text-center">
            <p>Services page content coming soon...</p>
            <a href="tel:08007723999" className="btn btn-primary btn-lg" style={{marginTop: '2rem'}}>
              <span>📞</span>
              <span>Call Now: 0800-772-3999</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 