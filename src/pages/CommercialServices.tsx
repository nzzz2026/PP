import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CommercialServices.css';

const CommercialServices: React.FC = () => {
  const industries = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"/>
          <path d="M3 10h18"/>
          <path d="M5 6l7-3 7 3"/>
          <path d="M4 10v11"/>
          <path d="M20 10v11"/>
          <path d="M8 14v3"/>
          <path d="M12 14v3"/>
          <path d="M16 14v3"/>
        </svg>
      ),
      title: 'Office Buildings',
      description: 'Discrete pest management for professional environments',
      features: ['After-hours service', 'Unmarked vehicles', 'Silent treatments', 'Monthly contracts']
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      title: 'Retail Stores',
      description: 'Protect your inventory and customer experience',
      features: ['Night treatments', 'Stock protection', 'Customer-safe methods', 'Quick response']
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
          <path d="M7 2v20"/>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
        </svg>
      ),
      title: 'Restaurants & Cafes',
      description: 'Food safety compliant pest control solutions',
      features: ['HACCP compliance', 'Kitchen treatments', 'Drain management', 'Health certificates']
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <path d="M9 22V12h6v10"/>
        </svg>
      ),
      title: 'Warehouses',
      description: 'Large-scale pest management for storage facilities',
      features: ['Rodent control', 'Bird management', 'Loading bay protection', 'Inventory safety']
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Healthcare',
      description: 'Ultra-hygienic pest control for medical facilities',
      features: ['Sterile methods', 'Patient safety', 'Regulatory compliance', '24/7 emergency']
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      title: 'Schools',
      description: 'Safe pest solutions for educational environments',
      features: ['Child-safe only', 'Holiday treatments', 'Playground safety', 'Cafeteria protection']
    }
  ];

  const compliance = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      title: 'Full Documentation',
      description: 'Complete records for audits and inspections'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'HACCP Compliant',
      description: 'Food safety standard compliance guaranteed'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      title: 'Fully Insured',
      description: '£2M public liability insurance coverage'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
        </svg>
      ),
      title: 'BPCA Certified',
      description: 'British Pest Control Association member'
    }
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Flexible Scheduling',
      description: 'Out-of-hours service to minimize business disruption. Weekend and evening appointments available.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: 'Emergency Response',
      description: '1-hour emergency response for critical pest situations that threaten business operations.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11H3"/>
          <path d="M21 11h-6"/>
          <path d="M12 2v6"/>
          <path d="M12 14v8"/>
        </svg>
      ),
      title: 'Customized Plans',
      description: 'Tailored pest management programs designed for your specific industry and business needs.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
      title: 'Regular Monitoring',
      description: 'Scheduled inspections and monitoring to prevent infestations before they become problems.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      title: 'Detailed Reporting',
      description: 'Comprehensive service reports and recommendations for maintaining pest-free premises.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Staff Training',
      description: 'Employee education programs to help your team identify and prevent pest issues early.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="commercial-hero">
          <div className="container">
            <h1>Commercial Pest Control Services</h1>
            <p>Professional pest management solutions for London businesses</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-hero-primary">Get Business Quote</Link>
              <a href="tel:07727049304" className="btn-hero-secondary">24/7 Emergency: 077 2704 9304</a>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries-section">
          <div className="container">
            <div className="industries-header">
              <h2>Industries We Serve</h2>
              <div className="section-divider"></div>
              <p>Specialized pest control solutions for every business sector</p>
            </div>
            
            <div className="industries-grid">
              {industries.map((industry, index) => (
                <div key={index} className="industry-card">
                  <div className="industry-icon">
                    {industry.icon}
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <ul className="industry-features">
                    {industry.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="compliance-section">
          <div className="container">
            <div className="compliance-header">
              <h2>Compliance & Certifications</h2>
              <p>Meeting and exceeding industry standards for commercial pest control</p>
            </div>
            
            <div className="compliance-grid">
              {compliance.map((item, index) => (
                <div key={index} className="compliance-card">
                  <div className="compliance-icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="service-features-section">
          <div className="container">
            <div className="service-features-header">
              <h2>Why Businesses Choose Pest Pro</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <div className="container">
            <div className="pricing-header">
              <h2>Commercial Service Plans</h2>
              <p>Flexible contracts tailored to your business needs</p>
            </div>
            
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3 className="pricing-title">Essential</h3>
                <div className="pricing-price">From £199</div>
                <p>Per month</p>
                <ul className="pricing-features">
                  <li>Monthly inspections</li>
                  <li>Basic pest treatments</li>
                  <li>Compliance documentation</li>
                  <li>Business hours support</li>
                </ul>
                <Link to="/contact" className="btn-pricing">Get Started</Link>
              </div>
              
              <div className="pricing-card featured">
                <h3 className="pricing-title">Professional</h3>
                <div className="pricing-price">From £399</div>
                <p>Per month</p>
                <ul className="pricing-features">
                  <li>Bi-weekly inspections</li>
                  <li>Comprehensive treatments</li>
                  <li>Full HACCP compliance</li>
                  <li>24/7 emergency support</li>
                  <li>Staff training included</li>
                </ul>
                <Link to="/contact" className="btn-pricing">Most Popular</Link>
              </div>
              
              <div className="pricing-card">
                <h3 className="pricing-title">Enterprise</h3>
                <div className="pricing-price">Custom</div>
                <p>Tailored solutions</p>
                <ul className="pricing-features">
                  <li>Weekly inspections</li>
                  <li>Multi-site management</li>
                  <li>Dedicated account manager</li>
                  <li>Priority response</li>
                </ul>
                <Link to="/contact" className="btn-pricing">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Protect Your Business Reputation</h2>
            <p>Get a free commercial pest assessment and customized quote</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Schedule Assessment</Link>
              <a href="tel:07727049304" className="btn-cta-secondary">Speak to Expert</a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default CommercialServices;