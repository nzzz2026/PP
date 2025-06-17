import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pests } from '../data/pestData';
import '../styles/PestLibrary.css';

const PestLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Pests', icon: '🔍' },
    { id: 'rodents', name: 'Rodents', icon: '🐀' },
    { id: 'insects', name: 'Insects', icon: '🐛' },
    { id: 'birds', name: 'Birds', icon: '🐦' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦊' }
  ];

  const filteredPests = pests.filter(pest => {
    const matchesCategory = selectedCategory === 'all' || pest.category === selectedCategory;
    const matchesSearch = pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pest.commonNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'emergency': return '#dc2626';
      case 'high': return '#f97316';
      case 'medium': return '#10b981';
      case 'low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div className="pest-library">
      <section 
        className="hero"
        style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
            url('/hero-images/freepik__professional-pest-control-services__64243.jpeg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h1>London Pest Identification Guide</h1>
          <p>Identify common pests in London homes and businesses</p>
          
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for a pest..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="alert-banner">
            <span className="alert-icon">🌞</span>
            <div>
              <strong>Summer Alert:</strong> Peak wasp and ant activity in London - nests reach maximum size and aggression levels.
              <Link to="/emergency" className="alert-link">Get Emergency Help →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="library-content">
        <div className="container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="pest-grid">
            {filteredPests.map(pest => (
              <Link to={`/pest-library/${pest.id}`} key={pest.id} className="pest-card">
                <div className="pest-card-header">
                  <h3>{pest.name}</h3>
                  <span 
                    className="urgency-badge"
                    style={{ backgroundColor: getUrgencyColor(pest.urgencyLevel) }}
                  >
                    {pest.urgencyLevel}
                  </span>
                </div>
                
                <div className="pest-card-content">
                  <p className="scientific-name">{pest.scientificName}</p>
                  <p className="description">{pest.description.substring(0, 150)}...</p>
                  
                  <div className="pest-stats">
                    <div className="stat">
                      <span className="stat-label">Size:</span>
                      <span className="stat-value">{pest.identification.size}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Active:</span>
                      <span className="stat-value">{pest.behavior.activityTime}</span>
                    </div>
                  </div>

                  <div className="common-areas">
                    <span className="areas-label">Common in:</span>
                    <span className="areas-list">
                      {pest.londonSpecific.commonBoroughs.slice(0, 3).join(', ')}
                      {pest.londonSpecific.commonBoroughs.length > 3 && '...'}
                    </span>
                  </div>

                  <div className="health-risks">
                    <span className="risk-icon">⚠️</span>
                    <span>{pest.risks.healthRisks[0]}</span>
                  </div>
                </div>

                <div className="pest-card-footer">
                  <span className="learn-more">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredPests.length === 0 && (
            <div className="no-results">
              <p>No pests found matching your search.</p>
              <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="pest-prevention">
        <div className="container">
          <h2>Prevent Pest Problems Before They Start</h2>
          <div className="prevention-grid">
            <div className="prevention-card">
              <h3>🏠 Home Protection</h3>
              <ul>
                <li>Seal cracks and entry points</li>
                <li>Fix leaky pipes and moisture issues</li>
                <li>Store food in sealed containers</li>
                <li>Regular cleaning and decluttering</li>
              </ul>
            </div>
            <div className="prevention-card">
              <h3>🏢 Business Protection</h3>
              <ul>
                <li>Regular professional inspections</li>
                <li>Staff training on pest awareness</li>
                <li>Proper waste management</li>
                <li>Maintenance contracts</li>
              </ul>
            </div>
            <div className="prevention-card">
              <h3>🌳 Garden & Outdoor</h3>
              <ul>
                <li>Remove standing water</li>
                <li>Trim vegetation from buildings</li>
                <li>Secure compost bins</li>
                <li>Clear garden debris</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Found a Pest? Get Expert Help Today</h2>
            <p>Our certified technicians are ready to solve your pest problem</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
              <a href="tel:07727049304" className="btn btn-secondary">
                <span className="phone-icon">📞</span>
                077 2704 9304
              </a>
            </div>
            <p className="response-time">Average response time: 45 minutes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestLibrary;