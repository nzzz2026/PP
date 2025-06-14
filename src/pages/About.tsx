import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{paddingTop: '120px'}}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>About Pest Defenders</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              London's most trusted pest control experts since 2008.
            </p>
          </div>
          
          <div className="text-center">
            <p>About page content coming soon...</p>
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

export default About; 