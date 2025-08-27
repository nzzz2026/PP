import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RestaurantServices.css';

const RestaurantServices: React.FC = () => {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
          <path d="M7 2v20"/>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
        </svg>
      ),
      title: 'Kitchen Deep Cleaning & Treatment',
      description: 'Comprehensive kitchen pest control focusing on food preparation areas and storage zones.',
      features: ['Food-safe treatments', 'Equipment protection', 'Grease trap maintenance', 'Deep cleaning protocols']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'Rodent Control Systems',
      description: 'Advanced monitoring and baiting systems designed specifically for restaurant environments.',
      features: ['Tamper-resistant stations', 'Digital monitoring', '24/7 tracking', 'Immediate alerts']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      ),
      title: 'HACCP Compliance Management',
      description: 'Complete documentation and compliance support for health inspections and audits.',
      features: ['Digital reporting', 'Audit preparation', 'Staff training docs', 'Compliance certificates']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6"/>
          <path d="M12 17v6"/>
          <path d="M4.22 4.22l4.24 4.24"/>
          <path d="M15.54 15.54l4.24 4.24"/>
          <path d="M1 12h6"/>
          <path d="M17 12h6"/>
        </svg>
      ),
      title: 'Flying Insect Control',
      description: 'Professional fly and moth elimination with UV traps and targeted treatments.',
      features: ['UV light traps', 'Drain treatments', 'Window screens', 'Monthly monitoring']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: 'Emergency Response Service',
      description: '24/7 emergency pest control to protect your reputation during critical situations.',
      features: ['1-hour response', 'Weekend service', 'Discrete arrival', 'Immediate treatment']
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
      title: 'Staff Training Programs',
      description: 'Educate your team on pest prevention and early detection protocols.',
      features: ['On-site training', 'Certification programs', 'Best practices guide', 'Regular updates']
    }
  ];

  const haccpSteps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      title: 'Hazard Analysis',
      description: 'Identify potential pest hazards in your establishment'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11H3"/>
          <path d="M21 11h-6"/>
          <circle cx="12" cy="11" r="3"/>
        </svg>
      ),
      title: 'Control Points',
      description: 'Establish critical control points for pest management'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Monitoring',
      description: 'Regular inspections and monitoring procedures'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      ),
      title: 'Documentation',
      description: 'Complete records for health inspections'
    }
  ];

  const industries = [
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
          <path d="M7 2v20"/>
        </svg>
      ),
      title: 'Fine Dining',
      description: 'Discrete premium service'
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M6 8H5a4 4 0 0 0 0 8h1"/>
          <path d="M8 8v8"/>
          <path d="M12 8v8"/>
          <path d="M16 8v8"/>
        </svg>
      ),
      title: 'Fast Food',
      description: 'Quick response protocols'
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: 'Cafes & Bakeries',
      description: 'Specialized treatments'
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        </svg>
      ),
      title: 'Pubs & Bars',
      description: 'Cellar & bar protection'
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Hotels',
      description: 'Kitchen & dining areas'
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
        </svg>
      ),
      title: 'Catering',
      description: 'Mobile unit protection'
    }
  ];

  const testimonials = [
    {
      text: "Pest Pro saved our restaurant during a critical inspection. Their HACCP documentation and swift response were exceptional.",
      author: "Marco Bellini",
      role: "Owner, Bellini's Italian",
      rating: 5
    },
    {
      text: "We've been pest-free for 2 years thanks to their preventive program. The monthly reports give us complete peace of mind.",
      author: "Sarah Williams",
      role: "Manager, The Garden Café",
      rating: 5
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="restaurant-hero">
          <div className="container">
            <h1>Restaurant Pest Control Services</h1>
            <p>HACCP-compliant pest management for London's food service industry</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-hero-primary">Get HACCP Quote</Link>
              <a href="tel:07727049304" className="btn-hero-secondary">Emergency: 077 2704 9304</a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="restaurant-services">
          <div className="container">
            <div className="services-header">
              <h2>Specialized Restaurant Services</h2>
              <div className="section-divider"></div>
              <p>Complete pest management solutions designed for food service establishments</p>
            </div>
            
            <div className="restaurant-services-grid">
              {services.map((service, index) => (
                <div key={index} className="restaurant-service-card">
                  <div className="service-icon-wrap">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HACCP Section */}
        <section className="haccp-section">
          <div className="container">
            <div className="haccp-header">
              <h2>HACCP Compliance Support</h2>
              <p>We help you maintain the highest food safety standards</p>
            </div>
            
            <div className="haccp-grid">
              {haccpSteps.map((step, index) => (
                <div key={index} className="haccp-card">
                  <div className="haccp-icon">
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries-section">
          <div className="container">
            <div className="industries-header">
              <h2>Food Service Sectors We Protect</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="industries-grid">
              {industries.map((industry, index) => (
                <div key={index} className="industry-item">
                  <div className="industry-icon-wrapper">
                    {industry.icon}
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonial-section">
          <div className="container">
            <div className="testimonial-header">
              <h2>Trusted by London's Best Restaurants</h2>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Protect Your Restaurant's Reputation</h2>
            <p>Get a free HACCP-compliant pest assessment today</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Schedule Assessment</Link>
              <a href="tel:07727049304" className="btn-cta-secondary">Call Expert Now</a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default RestaurantServices;