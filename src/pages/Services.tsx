import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  // Add keyframe animations for hero section
  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const serviceCategories = [
    {
      title: 'Residential Services',
      subtitle: 'Home & Family Protection',
      description: 'Comprehensive pest elimination for London homes using family-safe methods that protect what matters most.',
      detailedDescription: 'Our residential pest control services are specifically designed for London homes, ensuring your family\'s safety while effectively eliminating unwanted pests. We understand that your home is your sanctuary.',
      icon: null,
      primaryBenefit: 'Family-Safe Guaranteed',
      keyFeatures: [
        'Child & pet-safe treatments only',
        'Next-day emergency response',
        '12-month service guarantee',
        'Free follow-up inspections',
        'Preventative maintenance plans',
        'No-mess, discrete service'
      ],
      commonIssues: [
        'Rodent infestations in kitchens and lofts',
        'Ant colonies in food storage areas',
        'Spider webs in corners and basements',
        'Flying insects around windows',
        'Clothes moths in wardrobes'
      ],
      badHabits: [
        'Leaving pet food out overnight',
        'Poor kitchen hygiene practices',
        'Unsealed food containers',
        'Clutter providing hiding spaces',
        'Ignoring minor pest signs'
      ],
      prevention: [
        'Seal cracks and entry points',
        'Maintain clean, dry environments',
        'Store food in airtight containers',
        'Regular deep cleaning routines',
        'Professional quarterly inspections'
      ],
      link: '/services/residential',
      color: 'green',
      startingPrice: 'From £149',
      responseTime: '2-4 hours'
    },
    {
      title: 'Commercial Services',
      subtitle: 'Business Continuity Protection',
      description: 'Professional pest management that protects your business reputation with minimal disruption and full compliance documentation.',
      detailedDescription: 'Protecting London businesses from pest-related disruptions since 2010. Our commercial services ensure your operations continue smoothly while maintaining the highest standards of pest control.',
      icon: null,
      primaryBenefit: 'Zero Business Disruption',
      keyFeatures: [
        'Discrete, unmarked service vehicles',
        'Out-of-hours treatment scheduling',
        'Comprehensive compliance reporting',
        'Service level agreements available',
        'Emergency 24/7 response',
        'Industry-specific solutions'
      ],
      commonIssues: [
        'Rodents in office kitchen areas',
        'Flying insects near reception',
        'Cockroaches in server rooms',
        'Ants in break room areas',
        'Birds nesting in building exteriors'
      ],
      badHabits: [
        'Inadequate waste management',
        'Poor cleaning schedules',
        'Ignoring building maintenance',
        'Delayed pest issue reporting',
        'Inconsistent food storage policies'
      ],
      prevention: [
        'Implement strict waste protocols',
        'Regular building maintenance',
        'Staff pest awareness training',
        'Monthly professional inspections',
        'Integrated pest management systems'
      ],
      link: '/services/commercial',
      color: 'blue',
      startingPrice: 'From £199',
      responseTime: '1-2 hours'
    },
    {
      title: 'Restaurant Services',
      subtitle: 'Food Safety Excellence',
      description: 'Specialized food service pest control ensuring HACCP compliance and maintaining your establishment\'s reputation for cleanliness.',
      detailedDescription: 'London\'s restaurant industry trusts us to maintain the highest food safety standards. Our specialized treatments protect your reputation, ensure compliance, and keep your kitchen pest-free.',
      icon: null,
      primaryBenefit: 'HACCP Compliance Guaranteed',
      keyFeatures: [
        'Food-safe treatments exclusively',
        'Pre-opening service scheduling',
        'HACCP documentation support',
        'Emergency next-day response',
        'Kitchen-specific protocols',
        'Health inspection preparation'
      ],
      commonIssues: [
        'Cockroaches near cooking equipment',
        'Rodents in food storage areas',
        'Flies around prep stations',
        'Ants in dining areas',
        'Drain flies in kitchen sinks'
      ],
      badHabits: [
        'Improper food waste disposal',
        'Inadequate cleaning protocols',
        'Poor storage container hygiene',
        'Ignoring minor infestations',
        'Inconsistent staff training'
      ],
      prevention: [
        'Strict sanitation schedules',
        'Proper waste management systems',
        'Regular deep cleaning protocols',
        'Staff hygiene training programs',
        'Weekly professional monitoring'
      ],
      link: '/services/restaurants',
      color: 'red',
      startingPrice: 'From £249',
      responseTime: 'Emergency: 1 hour'
    }
  ];

  const trustBadges = [
    { name: 'FSA Approved', description: 'Food Standards Agency certified treatments' },
    { name: 'BPCA Member', description: 'British Pest Control Association member' },
    { name: 'Insured & Bonded', description: '£2M public liability insurance' },
    { name: 'HACCP Compliant', description: 'Full HACCP compliance documentation' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      
      
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
            url('/hero-images/freepik__professional-pest-control-services__64243.jpeg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div className="container">
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'white',
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Professional Pest Control Services
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              animation: 'fadeInUp 1.2s ease-out 0.4s both'
            }}>
              Expert pest elimination for residential, commercial, and restaurant properties across London
            </p>
          </div>
        </section>

        {/* Service Categories - Enhanced */}
        <section className="services-section">
          <div className="container">

            <div>
              {serviceCategories.map((category, index) => (
                <div key={index} className={`service-category ${category.color}`}>
                  <div className="service-grid">
                    {/* Content Side */}
                    <div className="service-content">
                      <div className={`service-badge ${category.color}`}>
                        <span className="service-badge-icon" style={{display: 'flex', alignItems: 'center'}}>{category.icon}</span>
                        <span>{category.primaryBenefit}</span>
                      </div>
                      
                      <h3 className="service-title">{category.title}</h3>
                      <p className={`service-subtitle ${category.color}`}>{category.subtitle}</p>
                      <p className="service-description">{category.detailedDescription}</p>
                      
                      <div className="service-stats">
                        <div className="service-stat">
                          <div className={`service-stat-value ${category.color}`}>{category.startingPrice}</div>
                          <div className="service-stat-label">Starting Price</div>
                        </div>
                        <div className="service-stat">
                          <div className={`service-stat-value ${category.color}`}>{category.responseTime}</div>
                          <div className="service-stat-label">Response Time</div>
                        </div>
                      </div>

                      <Link to={category.link} className="btn btn-primary">
                        Explore {category.title} →
                      </Link>
                    </div>

                    {/* Details Side */}
                    <div className={`service-details ${category.color}`}>
                      <div>
                        {/* Key Features */}
                        <div>
                          <h4>Service Features</h4>
                          <ul className="feature-list">
                            {category.keyFeatures.map((feature, featureIndex) => (
                              <li key={featureIndex} className="feature-item">
                                <span className={`feature-icon ${category.color}`} style={{display: 'flex'}}></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Common Issues */}
                        <div>
                          <h4>Common Pest Issues</h4>
                          <ul className="feature-list">
                            {category.commonIssues.map((issue, issueIndex) => (
                              <li key={issueIndex} className="feature-item">
                                <span className="issue-icon" style={{display: 'flex'}}></span>
                                <span>{issue}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention & Education Section */}
        <section className="prevention-section">
          <div className="container">
            <div className="section-header">
              <h2>Prevention is Better Than Treatment</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Understanding pest attraction factors and implementing preventative measures can save you thousands in pest control costs.
              </p>
            </div>

            <div className="prevention-grid">
              {serviceCategories.map((category, index) => (
                <div key={index} className="prevention-card">
                  <div className={`prevention-header ${category.color}`}>
                    <span className="prevention-icon">{category.icon}</span>
                    <h3 className="prevention-title">{category.title}</h3>
                  </div>
                  
                  <div className="prevention-content">
                    {/* Bad Habits */}
                    <div className="prevention-subsection">
                      <h4 className="subsection-title bad">
                        <span className="subsection-icon">❌</span>
                        Habits That Attract Pests
                      </h4>
                      <ul className="habit-list">
                        {category.badHabits.map((habit, habitIndex) => (
                          <li key={habitIndex} className="habit-item">
                            <span className="habit-bullet bad">•</span>
                            {habit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prevention */}
                    <div className="prevention-subsection">
                      <h4 className="subsection-title good">
                        <span className="subsection-icon">✅</span>
                        Prevention Best Practices
                      </h4>
                      <ul className="habit-list">
                        {category.prevention.map((tip, tipIndex) => (
                          <li key={tipIndex} className="habit-item">
                            <span className="habit-bullet good">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="stats-section">
          <div className="container">
            <div className="section-header">
              <h2 className="text-white">Why London Trusts PestPro</h2>
              <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                15+ years of proven results with thousands of satisfied customers across London's residential and commercial sectors.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon-wrapper green">
                  
                </div>
                <h3 className="stat-title">98% Success Rate</h3>
                <p className="stat-description">Industry-leading elimination success rate with guaranteed follow-up service.</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon-wrapper blue">
                  
                </div>
                <h3 className="stat-title">Emergency Response</h3>
                <p className="stat-description">Next-day emergency service with 1-4 hour response times across London.</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon-wrapper red">
                  
                </div>
                <h3 className="stat-title">Safety Certified</h3>
                <p className="stat-description">Only FSA-approved, family-safe treatments with full insurance coverage.</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon-wrapper purple">
                </div>
                <h3 className="stat-title">Full Compliance</h3>
                <p className="stat-description">Complete documentation for health inspections and regulatory compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Ready to Eliminate Your Pest Problem?</h2>
            <p className="cta-description">
              Get a free, comprehensive assessment and customized treatment plan within 24 hours.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">
                Schedule Free Assessment
              </Link>
              <Link to="/pest-library" className="btn-cta-secondary">
                Identify Your Pest Problem
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Services; 