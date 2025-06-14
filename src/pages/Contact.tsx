import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Contact Us</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Get in touch for a free consultation and quote.
            </p>
          </div>
          
          <div className="text-center">
            <p>Contact page content coming soon...</p>
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

export default Contact; 