import React, { useState, useEffect } from 'react';
import '../styles/ServiceAreaPage.scss';
import ServiceAreaLinks from '../components/ServiceAreaLinks';

const KensingtonChelseaBoroughPage: React.FC = () => {
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
  useEffect(() => {
    document.title = 'Kensington & Chelsea Pest Control Services | Trusted Exterminators in Kensington & Chelsea, London';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = 'Expert pest control in Kensington & Chelsea for luxury homes, apartments, hotels, and restaurants. Discreet, fast solutions for mice, moths, bed bugs, cockroaches, pigeons & more. Call for a free quote!';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionContent;
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
      "name": "Pest Pro London - Kensington & Chelsea",
      "description": "Premium pest control services for homes, apartments, hotels, and restaurants in Kensington & Chelsea. BPCA certified technicians for rats, mice, moths, bed bugs, cockroaches, and pigeons.",
      "telephone": "+447727049304",
      "email": "info@pestpro.london",
      "url": "https://www.pestpro.london/service-areas/kensington-and-chelsea",
      "areaServed": {
        "@type": "Place",
        "name": "Kensington & Chelsea, London",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kensington and Chelsea",
          "addressRegion": "London",
          "postalCode": "W8",
          "addressCountry": "GB"
        }
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 51.4993,
          "longitude": -0.1932
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
              "description": "Discreet, premium pest control for apartments, mansion blocks, and family homes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Pest Control",
              "description": "Professional pest management for hotels, restaurants, retail, and museums"
            }
          }
        ]
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "£££",
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
            "name": "L. Bennett"
          },
          "reviewBody": "Superb service in South Kensington. The team handled a moth problem in our wardrobe areas with care and were extremely discreet.",
          "datePublished": "2024-08-12"
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
            "name": "J. Williams"
          },
          "reviewBody": "Fast response for a rat issue near Kensington High Street. Clear communication, tidy work, and excellent follow-up.",
          "datePublished": "2024-07-28"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "78",
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
            <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>About Kensington &amp; Chelsea</a></li>
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
              <h1>Your Local Pest Control Experts in Kensington &amp; Chelsea</h1>
              <p className="subtitle">
                Discreet, fast, and premium pest solutions for homes, apartments, hotels, and businesses across Kensington &amp; Chelsea.
              </p>

              <div className="cta-buttons">
                <a href="tel:07727049304" className="primary-cta">
                  Call Us Now: 077 2704 9304
                </a>
                <a href="/contact" className="secondary-cta">
                  Get a Free Quote for Kensington &amp; Chelsea
                </a>
              </div>

              <div className="trust-indicators">
                <div className="indicator">Discreet service available</div>
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
              <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>About Kensington &amp; Chelsea</a></li>
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
              <h2>Professional Pest Control Services in Kensington &amp; Chelsea</h2>
              <p className="subtitle">Local expertise for the Royal Borough's high standards and unique pest pressures</p>
            </div>

            <div className="intro-grid">
              <div className="intro-text">
                <p>
                  The <a href="https://en.wikipedia.org/wiki/Royal_Borough_of_Kensington_and_Chelsea" target="_blank" rel="noopener noreferrer" className="text-link"><strong>Royal Borough of Kensington and Chelsea</strong></a> blends world-famous attractions with beautiful residential streets. From <strong>Knightsbridge</strong> and <strong>South Kensington</strong> to <strong>Notting Hill</strong> and <strong>Chelsea</strong>, properties range from mansion blocks and stucco terraces to mews houses and basement apartments. This mix of heritage architecture, concierge-managed blocks, and high-value interiors creates distinct pest challenges that demand careful, tailored solutions.
                </p>

                <p>
                  High footfall around <strong>Harrods</strong>, the <strong>V&amp;A</strong>, the <strong>Natural History Museum</strong>, and <strong>Exhibition Road</strong> increases opportunities for rodents, cockroaches, and fly activity. Seasonal spikes around <strong>Notting Hill Carnival</strong> and busy hospitality corridors such as <strong>King's Road</strong> and <strong>Sloane Square</strong> can also elevate pest pressure. Meanwhile, warm, centrally heated properties near <strong>Kensington Palace</strong> and <strong>Kensington Gardens</strong> can encourage year-round issues such as textile moths and bed bugs. Our local technicians deliver discreet treatments, rapid response, and long-term prevention across the borough. We also support nearby areas like <a href="/service-areas/hammersmith-fulham" className="text-link">Hammersmith &amp; Fulham</a> and <a href="/service-areas/westminster" className="text-link">Westminster</a>.
                </p>
              </div>

              <div className="guarantee-card">
                <h3>Kensington &amp; Chelsea Service Guarantee</h3>
                <ul className="guarantee-list">
                  {[
                    'Discreet, unmarked visits on request',
                    'Response within 24 hours guaranteed',
                    'BPCA certified technicians only',
                    'Heritage-safe treatment options',
                    '30-day guarantee after last sighting',
                    'Trusted by residents and businesses alike'
                  ].map((item, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}>
              {[
                {
                  src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
                  alt: 'Elegant residential terraces in Kensington and Chelsea',
                  title: 'Kensington & Chelsea residential terraces'
                },
                {
                  src: 'https://images.unsplash.com/photo-1473959383410-a595b6628b62?auto=format&fit=crop&w=800&q=80',
                  alt: 'South Kensington cultural district near major museums',
                  title: 'South Kensington museums district'
                },
                {
                  src: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
                  alt: 'Notting Hill street with colorful homes and market activity',
                  title: 'Notting Hill and Portobello Road area'
                }
              ].map((image, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--gray-200)'
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{ padding: '0.75rem 1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gray-700)', fontWeight: 600 }}>
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Pests Section */}
        <section id="pests" className="section alt-bg">
          <div className="container">
            <div className="section-header">
              <h2>Common Pest Problems in Kensington &amp; Chelsea &amp; How We Solve Them</h2>
              <p className="subtitle">Premium properties, heritage buildings, and high-traffic retail corridors demand targeted, discreet pest control.</p>
            </div>

            <div className="pest-grid">
              {[
                {
                  name: 'Mice & Rats',
                  icon: '🐀',
                  description: 'Rodent activity around restaurants, retail, and basement flats requires swift proofing and monitoring.',
                  solution: 'Entry point sealing, baiting, and drain surveys with ongoing monitoring'
                },
                {
                  name: 'Textile Moths',
                  icon: '🧥',
                  description: 'Luxury wardrobes and natural fibres attract clothes moths, particularly in warm, centrally heated homes.',
                  solution: 'Targeted treatment, pheromone monitoring, and wardrobe protection plans'
                },
                {
                  name: 'Bed Bugs',
                  icon: '🛏️',
                  description: 'Hotels, short-lets, and high guest turnover create risk of bed bug introductions across the borough.',
                  solution: 'Heat treatments, discreet inspections, and follow-up reassurance visits'
                },
                {
                  name: 'Cockroaches',
                  icon: '🪳',
                  description: 'Busy kitchens and service corridors can harbour cockroach infestations if not rapidly contained.',
                  solution: 'Gel baiting, targeted sprays, and sanitation guidance'
                },
                {
                  name: 'Pigeons & Birds',
                  icon: '🐦',
                  description: 'Mansion blocks and ornate ledges provide roosting space that leads to damage and hygiene issues.',
                  solution: 'Humane netting, spikes, and balcony-proofing systems'
                },
                {
                  name: 'Silverfish & Moisture Pests',
                  icon: '💧',
                  description: 'Basement flats and older plumbing can create damp conditions that attract silverfish and other moisture-loving pests.',
                  solution: 'Targeted treatments, moisture source identification, and sealing advice'
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
              <h2>Tailored Pest Control for Kensington &amp; Chelsea Homes &amp; Businesses</h2>
              <p className="subtitle">Premium residential and commercial solutions aligned with the borough's expectations.</p>
            </div>

            <div className="services-grid">
              {/* Residential Services */}
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>Residential Services</h3>
                <ul className="service-list">
                  {[
                    'Discreet treatments for luxury apartments and mansion blocks',
                    'Preventative monitoring for long-term protection',
                    'Proofing solutions for mews houses and basements',
                    'Textile moth protection for wardrobes and storage rooms',
                    'Garden and courtyard pest management',
                    'Emergency next-day service when needed'
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
                    'Hotels and serviced apartment pest prevention',
                    'Luxury retail and flagship store compliance programs',
                    'Restaurant and cafe pest control with food safety focus',
                    'Museums, galleries, and heritage property support',
                    'Property management and concierge reporting',
                    'Flexible out-of-hours service availability'
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
                Specialized Treatments for Kensington &amp; Chelsea Clients
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  'Textile moth treatment and wardrobe protection plans',
                  'Bird deterrents for balconies and ornate ledges',
                  'Discreet pest inspections for VIP residences',
                  'Drain surveys and proofing for basement flats',
                  'Integrated Pest Management (IPM) reporting',
                  'Heritage-safe treatments for listed buildings'
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
              <h2>Why Kensington &amp; Chelsea Chooses Pest Pro</h2>
              <p className="subtitle">A premium, discreet service trusted by residents and businesses across the Royal Borough.</p>
            </div>

            <div className="benefits-grid">
              {[
                {
                  icon: '🎯',
                  title: 'Local Borough Specialists',
                  description: 'We understand the unique mix of heritage buildings, luxury homes, and retail districts in Kensington & Chelsea.'
                },
                {
                  icon: '🤫',
                  title: 'Discreet & Respectful',
                  description: 'Optional unmarked visits and careful on-site conduct to protect privacy and brand reputation.'
                },
                {
                  icon: '⚡',
                  title: 'Rapid Response',
                  description: 'Priority scheduling with same-day options available for urgent pest issues.'
                },
                {
                  icon: '🛡️',
                  title: 'Guaranteed Results',
                  description: '30-day guarantee after last sighting and clear follow-up guidance.'
                },
                {
                  icon: '🏛️',
                  title: 'Heritage-Friendly Methods',
                  description: 'Treatments that respect listed properties, museums, and sensitive interiors.'
                },
                {
                  icon: '📈',
                  title: 'Proactive Prevention',
                  description: 'Scheduled monitoring and reporting to prevent re-infestation year-round.'
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
              <h2>What Our Kensington &amp; Chelsea Customers Say</h2>
            </div>

            <div className="testimonials-grid">
              {[
                {
                  quote: 'We needed discreet pest control for a Chelsea townhouse. The team were punctual, professional, and solved the issue without disruption.',
                  author: 'A. Moore',
                  location: 'Chelsea',
                  date: 'August 2024'
                },
                {
                  quote: 'Excellent service for our boutique hotel near South Kensington. Thorough inspections, clear reporting, and reliable follow-up.',
                  author: 'P. Shah',
                  location: 'South Kensington',
                  date: 'July 2024'
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
              <h2>Ready to Get Rid of Pests in Kensington &amp; Chelsea?</h2>

              <p className="cta-subtitle">
                Keep your property protected with discreet, premium pest control. Contact our friendly team today for a free quote and rapid response in Kensington &amp; Chelsea.
              </p>

              <div className="cta-buttons">
                <a href="tel:07727049304" className="primary-cta">
                  📞 077 2704 9304
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
              <h3>Comprehensive Kensington &amp; Chelsea Coverage</h3>
              <p>
                We cover every neighbourhood in the Royal Borough, including Knightsbridge, Chelsea, South Kensington, Notting Hill, Earl's Court, Kensington High Street, and Holland Park.
              </p>

              <div className="postcodes">
                {['SW3', 'SW5', 'SW7', 'SW10', 'W8', 'W10', 'W11'].map(postcode => (
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

export default KensingtonChelseaBoroughPage;
