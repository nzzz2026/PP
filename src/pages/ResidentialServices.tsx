import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ResidentialServices.css';

const ResidentialServices: React.FC = () => {
  const services = [
    {
      title: 'Complete Home Pest Inspection',
      description: 'Comprehensive assessment of your property to identify current infestations and potential pest entry points.',
      features: ['Full property survey', 'Detailed pest risk assessment', 'Prevention recommendations', 'Written report'],
      price: 'From £89'
    },
    {
      title: 'Rodent Control & Proofing',
      description: 'Professional rat and mouse control with permanent proofing solutions to prevent future infestations.',
      features: ['Safe baiting systems', 'Entry point sealing', 'Ongoing monitoring', '12-month guarantee'],
      price: 'From £149'
    },
    {
      title: 'Insect Treatment Programs',
      description: 'Targeted treatments for ants, cockroaches, silverfish, and other household insects.',
      features: ['Species-specific treatments', 'Child & pet safe methods', 'Follow-up visits', 'Prevention advice'],
      price: 'From £139'
    },
    {
      title: 'Bed Bug Elimination',
      description: 'Complete bed bug eradication using professional heat treatment and targeted insecticides.',
      features: ['Heat treatment available', 'Mattress & furniture treatment', 'Multiple visit program', '100% elimination guarantee'],
      price: 'From £299'
    },
    {
      title: 'Wasp Nest Removal',
      description: 'Safe removal of wasp and bee nests with emergency next-day service available.',
      features: ['Emergency response', 'Safe removal techniques', 'Protective equipment included', 'Nest prevention advice'],
      price: 'From £159'
    },
    {
      title: 'Flea & Mite Treatment',
      description: 'Comprehensive flea treatment for homes with pets, including carpet and furniture treatment.',
      features: ['Pet-safe treatments', 'Carpet deep treatment', 'Growth regulator application', 'Pet care advice'],
      price: 'From £179'
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      title: 'Family Safe',
      description: 'Child and pet-safe treatments exclusively'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Fast Response',
      description: 'Same-day emergency service available'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Guaranteed Results',
      description: '100% satisfaction with free re-treatment'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
        </svg>
      ),
      title: 'Certified Experts',
      description: 'BPCA trained professionals'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="residential-hero">
          <div className="container">
            <h1>Residential Pest Control Services</h1>
            <p>Protecting London homes with safe, effective pest solutions since 2008</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-hero-primary">Get Free Quote</Link>
              <a href="tel:07727049304" className="btn-hero-secondary">Call Now: 077 2704 9304</a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-container">
          <div className="container">
            <div className="services-header">
              <h2>Our Residential Services</h2>
              <div className="section-divider"></div>
              <p>Comprehensive pest solutions tailored for London homes and families</p>
            </div>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-price">{service.price}</div>
                  <Link to="/contact" className="btn-book">Book Service</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose">
          <div className="container">
            <h2>Why Choose Pest Pro London?</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2>Our Simple Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Contact</h3>
                <p>Call or book online for a free assessment</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Inspect</h3>
                <p>Professional inspection to identify pest issues</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Treat</h3>
                <p>Safe, effective treatment tailored to your needs</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Prevent</h3>
                <p>Proofing and prevention to stop future infestations</p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Guarantee</h3>
                <p>Follow-up service with our satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Protect Your Home?</h2>
            <p>Get a free quote and same-day service for urgent pest problems</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Get Free Quote</Link>
              <a href="tel:07727049304" className="btn-cta-secondary">Emergency Call</a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default ResidentialServices;