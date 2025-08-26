import React, { useState, useEffect } from 'react';
import '../styles/ServiceAreaPage.scss';
import ServiceAreaLinks from '../components/ServiceAreaLinks';

const HackneyBoroughPage: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Header height
      const additionalOffset = 20; // Extra padding for better viewing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileNavOpen(false);
    }
  };

  // Update document title, meta description, and schema markup for SEO
  React.useEffect(() => {
    document.title = 'Hackney Pest Control Services | Trusted Exterminators in Hackney, London';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Humane pest control in Hackney for flats and shops. Friendly technicians use safe traps, targeted gels and proofing to tackle mice, rats and insects. Call for a local quote!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Humane pest control in Hackney for flats and shops. Friendly technicians use safe traps, targeted gels and proofing to tackle mice, rats and insects. Call for a local quote!';
      document.head.appendChild(meta);
    }

    // Add Schema.org structured data
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "additionalType": "PestControlService",
      "name": "Pest Pro London - Hackney",
      "description": "Humane pest control for Hackney homes and indie businesses. Local team uses traps, safe baits and proofing to deter rats, mice and insects. Next-day help available.",
      "telephone": "+447727049304",
      "email": "info@pestpro.london",
      "url": "https://www.pestpro.london/service-areas/hackney",
      "areaServed": {
        "@type": "Place",
        "name": "Hackney, London",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hackney",
          "addressRegion": "London",
          "postalCode": "N1",
          "addressCountry": "GB"
        }
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 51.5380,
          "longitude": -0.0990
        },
        "geoRadius": "5000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pest Control Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Pest Control",
              "description": "Comprehensive pest control for homes including rats, mice, bed bugs, wasps, and more"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Pest Control",
              "description": "Professional pest management for businesses, restaurants, and commercial properties"
            }
          }
        ]
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "££",
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "S. Thompson"
          },
          "reviewBody": "Excellent service from start to finish. They came out within 2 hours of my call and completely sorted our rat problem near Mare Street in Hackney Central.",
          "datePublished": "2024-07-15"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating", 
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "M. Patel"
          },
          "reviewBody": "Our restaurant on Kingsland Road has been pest-free since partnering with Pest Pro. Their preventative service keeps us compliant and pest-free.",
          "datePublished": "2024-06-20"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "94",
        "bestRating": "5"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="service-area-page">
      {/* Mobile Navigation Toggle */}
      <button 
        className="mobile-nav-toggle"
        onClick={() => setMobileNavOpen(true)}
        aria-label="Open navigation menu"
      >
        ⋯
      </button>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileNavOpen ? 'open' : ''}`}
        onClick={() => setMobileNavOpen(false)}
      />

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <button 
          className="close-btn"
          onClick={() => setMobileNavOpen(false)}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        <div className="nav-content">
          <h3>Quick Navigation</h3>
          <ul className="nav-links">
            <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>About Hackney</a></li>
            <li><a href="#pests" onClick={(e) => { e.preventDefault(); scrollToSection('pests'); }}>Common Pests</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a></li>
            <li><a href="#why-choose" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>Why Choose Us</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Reviews</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          <div className="contact-card">
            <h4>Need Help Now?</h4>
            <a href="tel:07727049304" className="phone-link">077 2704 9304</a>
            <a href="/contact" className="quote-link">Get Free Quote</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Your Local Pest Control Experts in Hackney, London</h1>
              <p className="subtitle">
                Rapid, effective, and guaranteed pest solutions for homes and businesses across Hackney and surrounding areas.
              </p>
              
              <div className="cta-buttons">
                <a href="tel:07727049304" className="primary-cta">
                  Call Us Now: 077 2704 9304
                </a>
                <a href="/contact" className="secondary-cta">
                  Get a Free Quote for Hackney
                </a>
              </div>

              <div className="trust-indicators">
                <div className="indicator">Available 7 days a week</div>
                <div className="indicator">Call back within 1 hour</div>
                <div className="indicator">Guaranteed results</div>
              </div>
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          <aside className="sidebar-nav">
            <h3>Quick Navigation</h3>
            <ul className="nav-links">
              <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>About Hackney</a></li>
              <li><a href="#pests" onClick={(e) => { e.preventDefault(); scrollToSection('pests'); }}>Common Pests</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a></li>
              <li><a href="#why-choose" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>Why Choose Us</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Reviews</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
            <div className="contact-card">
              <h4>Need Help Now?</h4>
              <a href="tel:07727049304" className="phone-link">077 2704 9304</a>
              <a href="/contact" className="quote-link">Get Free Quote</a>
            </div>
          </aside>

          <div className="content-sections">
        {/* Introduction Section */}
        <section id="intro" className="section intro-section">
          <div className="container">
            <div className="section-header">
              <h2>Professional Pest Control Services in Hackney</h2>
              <p className="subtitle">Local expertise for Hackney's unique pest challenges with guaranteed results</p>
            </div>
            
            <div className="intro-grid">
              <div className="intro-text">
                <p>
                  Dealing with pests in <a href="https://en.wikipedia.org/wiki/London_Borough_of_Hackney" target="_blank" rel="noopener noreferrer" className="text-link">Hackney</a> can be challenging, whether you're a flat owner by <a href="https://en.wikipedia.org/wiki/Broadway_Market" target="_blank" rel="noopener noreferrer" className="text-link"><strong>Broadway Market</strong></a> or running a studio in <a href="https://en.wikipedia.org/wiki/Dalston" target="_blank" rel="noopener noreferrer" className="text-link"><strong>Dalston</strong></a>. At Pest Pro, we understand the borough's mix of historic terraces and new developments and provide tailored, effective solutions to protect your property and peace of mind. We also support neighbouring areas such as <a href="/service-areas/camden" className="text-link">Camden</a> and <a href="/service-areas/islington" className="text-link">Islington</a>.
                </p>

                <p>
                  Our fully qualified, <a href="https://bpca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-link"><strong>BPCA certified technicians</strong></a> are local experts who live and work in London, ensuring a prompt, reliable, and trustworthy local service specifically designed for Hackney residents and businesses. We pride ourselves on quick response times, often attending within 2 hours for urgent issues, and always within 24 hours – if not, we offer a 10% discount! We favour humane, preventative treatments first—like sealing entry points, setting live-capture traps and using gel baits sparingly—so small properties stay safe and compliant.
                </p>
              </div>

              <div className="guarantee-card">
                <h3>Hackney Service Guarantee</h3>
                <ul className="guarantee-list">
                  {[
                    'Response within 24 hours guaranteed',
                    <><a href="https://bpca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-link">BPCA</a> certified technicians only</>,
                    <><a href="https://www.safecontractor.com/" target="_blank" rel="noopener noreferrer" className="text-link">SafeContractor</a> approved company</>,
                    '30-day guarantee after last sighting',
                    'Biodegradable pest control methods',
                    'Serving both domestic and commercial clients'
                  ].map((item, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Pests Section */}
        <section id="pests" className="section alt-bg">
          <div className="container">
            <div className="section-header">
              <h2>Common Pest Problems in Hackney & How We Solve Them</h2>
              <p className="subtitle">Hackney's unique environment presents specific pest challenges. Our local expertise ensures targeted, effective solutions for every situation.</p>
            </div>

            <div className="pest-grid">
              {[
                {
                  name: 'Mice & Rats',
                  icon: '🐀',
                  description: 'Effective rodent control in Hackney, including comprehensive solutions for rat problems originating from sewers, and drain camera surveys to identify and seal entry points.',
                  solution: 'Advanced baiting systems, entry point sealing, and ongoing monitoring'
                },
                {
                  name: 'Bed Bugs & Fleas',
                  icon: '🛏️',
                  description: 'Discreet and thorough bed bug and flea treatments using advanced methods, including steam/heat treatments and specialist tools.',
                  solution: 'Heat treatment, chemical solutions, and comprehensive follow-up inspections'
                },
                {
                  name: 'Cockroaches',
                  icon: '🪳',
                  description: 'Targeted cockroach extermination for rapid results in residential and commercial settings across Hackney.',
                  solution: 'Gel baiting, spray treatments, and source elimination strategies'
                },
                {
                  name: 'Wasps & Hornets',
                  icon: '🐝',
                  description: 'Safe and efficient wasp nest removal and hornet control to reclaim your outdoor spaces.',
                  solution: 'Professional nest removal, protective treatments, and prevention advice'
                },
                {
                  name: 'Pigeons & Birds',
                  icon: '🐦',
                  description: 'Humane bird proofing solutions, including solar panel bird proofing, to protect properties in Hackney.',
                  solution: 'Netting, spikes, deterrent systems, and solar panel protection'
                },
                {
                  name: 'Other Common Pests',
                  icon: '🐜',
                  description: 'Comprehensive solutions for ants, squirrels, moths, spiders, cluster flies, and more, ensuring your environment is safe and hygienic.',
                  solution: 'Tailored treatments based on pest type and infestation severity'
                }
              ].map((pest, index) => (
                <div key={index} className="pest-card">
                  <span className="pest-icon">{pest.icon}</span>
                  <h3>{pest.name}</h3>
                  <p className="description">{pest.description}</p>
                  <div className="solution-box">
                    <h4>Our Solution:</h4>
                    <p>{pest.solution}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a 
                href="/pest-library"
                style={{
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderBottom: '2px solid var(--primary-color)'
                }}
              >
                For a complete list of pests we treat, please visit our main services page →
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section gradient-bg">
          <div className="container">
            <div className="section-header">
              <h2>Tailored Pest Control for Hackney Homes & Businesses</h2>
              <p className="subtitle">Whether you're protecting your family home or ensuring your business stays pest-free, we provide comprehensive solutions tailored to Hackney's unique needs.</p>
            </div>

            <div className="services-grid">
              {/* Residential Services */}
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>Residential Services</h3>
                <ul className="service-list">
                  {[
                    'Humane rodent removal using snap and live traps',
                    'Insect treatments with targeted gels and dusts',
                    'Proofing and sealing of entry points',
                    'Advice on sanitation and long-term prevention',
                    'Emergency call-outs for urgent infestations'
                  ].map((service, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Services */}
              <div className="service-card">
                <div className="service-icon">🏢</div>
                <h3>Commercial Services</h3>
                <ul className="service-list">
                  {[
                    'Routine inspections and monitoring stations',
                    'Discreet treatments outside trading hours',
                    'Safe use of gels, powders and low-toxicity baits',
                    'Proofing to keep pests out of stock rooms and kitchens',
                    'Documentation to satisfy council and audit requirements'
                  ].map((service, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specialized Treatments */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-color)08 0%, var(--forest-color)08 100%)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid var(--primary-color)20',
              marginTop: '3rem'
            }}>
              <h3 style={{
                color: 'var(--forest-color)',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Specialized Treatments for Hackney Clients
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  'Disinfectant treatments after infestations',
                  'Drain camera surveys to identify hidden entry points',
                  'Loft insulation removal & replacement after rodent damage',
                  'Integrated pest management (IPM) strategies',
                  'Solar panel and roof space bird proofing'
                ].map((treatment, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--primary-color)15',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      color: 'var(--gray-700)',
                      fontSize: '0.95rem',
                      margin: 0,
                      fontWeight: '500'
                    }}>
                      {treatment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose" className="section alt-bg">
          <div className="container">
            <div className="section-header">
              <h2>Why Hackney Chooses Pest Pro for Pest Control</h2>
              <p className="subtitle">We're more than just exterminators – we're your local pest control partners, committed to protecting Hackney homes and businesses with unmatched expertise and service.</p>
            </div>

            <div className="benefits-grid">
              {[
                {
                  icon: '🎯',
                  title: 'Local Experts for Hackney',
                  description: 'Our technicians are experts in London pests, living and working in the areas we serve, ensuring a deep understanding of local pest behaviours and effective solutions.'
                },
                {
                  icon: '⚡',
                  title: 'Rapid & Reliable Response',
                  description: 'We aim to provide a rapid response, often attending within 2 hours, and guaranteeing attendance within 24 hours. Get a call back within 1 hour!'
                },
                {
                  icon: '🛡️',
                  title: 'Guaranteed Results',
                  description: 'We are committed to resolving your pest problems with trust, professionalism and fast response. 30-day guarantee after last sighting for your peace of mind.'
                },
                {
                  icon: '🎓',
                  title: 'Highly Qualified & Certified',
                  description: 'All our technicians are BPCA certified, and we maintain SafeContractor approval, ensuring the highest standards of health & safety.'
                },
                {
                  icon: '🌱',
                  title: 'Safe & Environmentally Conscious',
                  description: 'We prioritise humane techniques, using live traps, targeted gels and entry-point proofing before considering low-toxicity baits.'
                },
                {
                  icon: '📅',
                  title: 'Available 7 Days a Week',
                  description: 'Our technicians work 7 days a week to ensure we are there when you need us most, including emergency weekend service.'
                },
                {
                  icon: '💯',
                  title: 'Transparent & Fair Pricing',
                  description: 'We are by far the best value and provide transparent, honest service from initial inquiry to completion with no hidden costs.'
                },
                {
                  icon: '🏆',
                  title: 'Proven Track Record',
                  description: 'With hundreds of successful treatments in Hackney and across London, our reputation speaks for itself through satisfied customers.'
                }
              ].map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section gradient-bg">
          <div className="container">
            <div className="section-header">
              <h2>What Our Hackney Customers Say</h2>
            </div>

            <div className="testimonials-grid">
              {[
                {
                  quote: (
                    <>
                      Excellent service from start to finish. They came out within 2 hours of my call and completely sorted our rat problem near <a href="https://en.wikipedia.org/wiki/Mare_Street" target="_blank" rel="noopener noreferrer" className="text-link">Mare Street</a> in <a href="https://en.wikipedia.org/wiki/Hackney_Central" target="_blank" rel="noopener noreferrer" className="text-link">Hackney Central</a>. The technician was professional, knowledgeable about local pest issues, and the follow-up service was outstanding.
                    </>
                  ),
                  author: 'S. Thompson',
                  location: <a href="https://en.wikipedia.org/wiki/Hackney_Central" target="_blank" rel="noopener noreferrer" className="text-link">Hackney Central</a>,
                  date: 'July 2024'
                },
                {
                  quote: (
                    <>
                      Our deli by <a href="https://en.wikipedia.org/wiki/Kingsland_Road" target="_blank" rel="noopener noreferrer" className="text-link">Kingsland Road</a> has been pest-free since we started using Pest Pro. Their preventative service keeps us compliant and pest-free, which is crucial for our business. Highly recommend their commercial services.
                    </>
                  ),
                  author: 'M. Patel',
                  location: <a href="https://en.wikipedia.org/wiki/Kingsland_Road" target="_blank" rel="noopener noreferrer" className="text-link">Kingsland Road</a>,
                  date: 'June 2024'
                }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p className="quote-text">{testimonial.quote}</p>
                  <div className="author-info">
                    <p className="author-name">{testimonial.author}</p>
                    <p className="author-details">{testimonial.location}, {testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a 
                href="/reviews"
                style={{
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderBottom: '2px solid var(--primary-color)'
                }}
              >
                Read more customer reviews across London here →
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Get Rid of Pests in Hackney?</h2>
              
              <p className="cta-subtitle">
                Don't let pests disrupt your home or business in Hackney. Contact our friendly, knowledgeable team today for a free, personalized quote. We're here to provide the effective, safe, and reliable pest control solutions you need.
              </p>

              <div className="cta-buttons">
                <a href="tel:07727049304" className="primary-cta">
                  077 2704 9304
                </a>
                <a href="/contact" className="secondary-cta">
                  Request a Call Back within 1 Hour!
                </a>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <h4>Phone:</h4>
                  <p>077 2704 9304</p>
                </div>
                
                <div className="contact-item">
                  <h4>Email:</h4>
                  <p>info@pestpro.london</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Confirmation */}
        <section className="service-area">
          <div className="container">
            <div className="area-content">
              <h3>Comprehensive Hackney Coverage</h3>
              <p>
                We proudly serve all <a href="/service-areas" className="text-link">London boroughs</a>, including <a href="https://en.wikipedia.org/wiki/London_Borough_of_Hackney" target="_blank" rel="noopener noreferrer" className="text-link">Hackney</a>, ensuring local expertise and rapid response wherever you are in the city. Our Hackney service covers all areas including <a href="https://en.wikipedia.org/wiki/Shoreditch" target="_blank" rel="noopener noreferrer" className="text-link">Shoreditch</a>, <a href="https://en.wikipedia.org/wiki/Dalston" target="_blank" rel="noopener noreferrer" className="text-link">Dalston</a>, <a href="https://en.wikipedia.org/wiki/Stoke_Newington" target="_blank" rel="noopener noreferrer" className="text-link">Stoke Newington</a>, <a href="https://en.wikipedia.org/wiki/Homerton" target="_blank" rel="noopener noreferrer" className="text-link">Homerton</a>, <a href="https://en.wikipedia.org/wiki/Clapton,_London" target="_blank" rel="noopener noreferrer" className="text-link">Clapton</a> and <a href="https://en.wikipedia.org/wiki/Hackney_Central" target="_blank" rel="noopener noreferrer" className="text-link">Hackney Central</a>.
              </p>
              
              <div className="postcodes">
                {['E2', 'E5', 'E8', 'E9', 'N1', 'N16'].map(postcode => (
                  <span key={postcode} className="postcode">
                    {postcode}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaLinks />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HackneyBoroughPage;