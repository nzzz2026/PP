import React from 'react';
import { Link } from 'react-router-dom';
import PPLLogoGreen from '../PPL Logo Green.svg';

const Footer: React.FC = () => {
  return (
    <footer style={{background: 'rgba(26, 36, 47, 0.98)', color: 'white', padding: '6rem 0 3rem', position: 'relative'}}>
      <div className="container">
        <div className="footer-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)'}}>
          {/* Company Info */}
          <div>
            <div className="footer-logo" style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
              <img 
                src={PPLLogoGreen} 
                alt="Pest Pro London" 
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <p className="footer-description" style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '2rem'}}>
              London's most trusted pest control experts since 2008. Professional, reliable, and guaranteed results with eco-friendly methods. BPCA certified and fully insured for your peace of mind.
            </p>
            <div className="social-links" style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
              <a href="#" className="social-link" style={{
                width: '50px', 
                height: '50px', 
                background: 'rgba(255, 255, 255, 0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.3s ease', 
                fontSize: '1.25rem'
              }}>f</a>
              <a href="#" className="social-link" style={{
                width: '50px', 
                height: '50px', 
                background: 'rgba(255, 255, 255, 0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.3s ease', 
                fontSize: '1.25rem'
              }}>𝕏</a>
              <a href="#" className="social-link" style={{
                width: '50px', 
                height: '50px', 
                background: 'rgba(255, 255, 255, 0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.3s ease', 
                fontSize: '1.25rem'
              }}>in</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4 style={{color: 'white', marginBottom: '2rem', fontSize: '1.25rem'}}>Quick Links</h4>
            <ul style={{listStyle: 'none'}}>
              <li style={{padding: '0.75rem 0'}}><Link to="/about" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ About Us</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/services" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Our Services</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/pest-library" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Pest Library</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/service-areas" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Service Areas</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/emergency" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Emergency Service</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="footer-section">
            <h4 style={{color: 'white', marginBottom: '2rem', fontSize: '1.25rem'}}>Our Services</h4>
            <ul style={{listStyle: 'none'}}>
              <li style={{padding: '0.75rem 0'}}><Link to="/services" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Residential Pest Control</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/services" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Commercial Solutions</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/services" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Restaurant & Food Safety</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/emergency" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Emergency Services</Link></li>
              <li style={{padding: '0.75rem 0'}}><Link to="/services" style={{color: 'rgba(255, 255, 255, 0.7)', transition: 'all 0.3s ease'}}>→ Prevention Programs</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4 style={{color: 'white', marginBottom: '2rem', fontSize: '1.25rem'}}>Contact Information</h4>
            <div className="contact-item" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem'}}>
              <div className="contact-icon" style={{
                width: '40px', 
                height: '40px', 
                background: 'rgba(143, 229, 72, 0.2)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--lime)', 
                fontSize: '1.25rem', 
                minWidth: '40px'
              }}>📞</div>
              <div className="contact-info">
                <h5 style={{color: 'white', fontWeight: 700, marginBottom: '0.25rem'}}>24/7 Emergency Hotline</h5>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem'}}>077 2704 9304</p>
                <p style={{fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)'}}>Always available for emergencies</p>
              </div>
            </div>
            <div className="contact-item" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem'}}>
              <div className="contact-icon" style={{
                width: '40px', 
                height: '40px', 
                background: 'rgba(143, 229, 72, 0.2)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--lime)', 
                fontSize: '1.25rem', 
                minWidth: '40px'
              }}>📧</div>
              <div className="contact-info">
                <h5 style={{color: 'white', fontWeight: 700, marginBottom: '0.25rem'}}>Email Support</h5>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem'}}>info@pestprolondon.co.uk</p>
                <p style={{fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)'}}>Response within 2 hours</p>
              </div>
            </div>
            <div className="contact-item" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem'}}>
              <div className="contact-icon" style={{
                width: '40px', 
                height: '40px', 
                background: 'rgba(143, 229, 72, 0.2)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--lime)', 
                fontSize: '1.25rem', 
                minWidth: '40px'
              }}>📍</div>
              <div className="contact-info">
                <h5 style={{color: 'white', fontWeight: 700, marginBottom: '0.25rem'}}>Office Address</h5>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem'}}>Chapter South Bank Unit B1201</p>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem'}}>17 Great Suffolk Street</p>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem'}}>London SE1 0NS</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
          paddingTop: 'clamp(2rem, 4vw, 3rem)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 'clamp(1rem, 3vw, 2rem)',
          textAlign: 'center'
        }}>
          <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem'}}>
            © 2024 Pest Pro London. All rights reserved. | BPCA Member | Fully Insured | Environmental Agency Registered
          </p>
          <div className="footer-links" style={{display: 'flex', gap: '3rem', flexWrap: 'wrap'}}>
            <a href="#" style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', transition: 'color 0.3s ease'}}>Privacy Policy</a>
            <a href="#" style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', transition: 'color 0.3s ease'}}>Terms of Service</a>
            <a href="#" style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', transition: 'color 0.3s ease'}}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 