import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { pests } from '../data/pestData';
import '../styles/PestDetail.css';

const PestDetail: React.FC = () => {
  const { pestId } = useParams<{ pestId: string }>();
  const pest = pests.find(p => p.id === pestId);

  if (!pest) {
    return (
      <div className="pest-detail-error">
        <div className="container">
          <h1>Pest not found</h1>
          <p>The pest you're looking for doesn't exist in our database.</p>
          <Link to="/pest-library" className="btn btn-primary">Back to Pest Library</Link>
        </div>
      </div>
    );
  }

  const getCurrentSeasonActivity = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return pest.londonSpecific.seasonalActivity.spring;
    if (month >= 5 && month <= 7) return pest.londonSpecific.seasonalActivity.summer;
    if (month >= 8 && month <= 10) return pest.londonSpecific.seasonalActivity.autumn;
    return pest.londonSpecific.seasonalActivity.winter;
  };

  // Map pest IDs to photo filenames
  const getPestPhoto = (pestId: string): string | null => {
    const photoMap: { [key: string]: string } = {
      'rats': 'freepik__rat__64233.jpeg',
      'mice': 'freepik__mouse__64234.jpeg',
      'cockroaches': 'freepik__cockroaches__64235.jpeg',
      'bed-bugs': 'freepik__bed-bugs__64236.jpeg',
      'wasps': 'freepik__wasp__64232.jpeg',
      'ants': 'freepik__ants__64237.jpeg',
      'spiders': 'freepik__spiders__64238.jpeg',
      'fleas': 'freepik__fleas__64239.jpeg',
      'foxes': 'freepik__fox__64240.jpeg',
      'squirrels': 'freepik__squirrel__64241.jpeg',
      'pigeons': 'freepik__pigeon__64242.jpeg'
    };
    
    return photoMap[pestId] || null;
  };

  const pestPhoto = getPestPhoto(pest.id);

  return (
    <div className="pest-detail">
      <section className="breadcrumb-section">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/pest-library">Pest Library</Link>
            <span>/</span>
            <span>{pest.name}</span>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{pest.name}</h1>
              <p className="scientific-name">{pest.scientificName}</p>
              <p className="description">{pest.description}</p>
              
              <div className="quick-actions">
                <Link to="/contact" className="btn btn-primary">Get Treatment Quote</Link>
                <a href="tel:07727049304" className="btn btn-secondary">
                  <span>📞</span> Emergency: 077 2704 9304
                </a>
              </div>
              
              <div className="urgency-alert" style={{ 
                backgroundColor: pest.urgencyLevel === 'emergency' ? '#fef2f2' : 
                               pest.urgencyLevel === 'high' ? '#fff7ed' :
                               pest.urgencyLevel === 'medium' ? '#f0fdf4' : '#f3f4f6'
              }}>
                <strong>Urgency Level:</strong> {pest.urgencyLevel.toUpperCase()}
                <p>{pest.urgencyLevel === 'emergency' && 'Immediate professional treatment required'}
                   {pest.urgencyLevel === 'high' && 'Professional treatment recommended within 48 hours'}
                   {pest.urgencyLevel === 'medium' && 'Schedule treatment within a week'}
                   {pest.urgencyLevel === 'low' && 'Monitor situation, treatment if worsens'}</p>
              </div>
            </div>
            
            <div className="sidebar-content">
              {pestPhoto && (
                <div className="pest-photo-box">
                  <img 
                    src={`/pest-photos/${pestPhoto}`} 
                    alt={`${pest.name} for identification`}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--gray-600)',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '0 0 1.5rem 0'
                  }}>
                    {pest.name} identification photo
                  </p>
                </div>
              )}
              
              <div className="quick-facts">
                <h3>Quick Facts</h3>
                <div className="fact">
                  <span className="fact-label">Size:</span>
                  <span className="fact-value">{pest.identification.size}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Color:</span>
                  <span className="fact-value">{pest.identification.color}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Activity:</span>
                  <span className="fact-value">{pest.behavior.activityTime}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Lifespan:</span>
                  <span className="fact-value">{pest.behavior.lifespan}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Breeding:</span>
                  <span className="fact-value">{pest.behavior.reproductionRate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="identification-section">
        <div className="container">
          <h2>How to Identify {pest.name}</h2>
          <div className="identification-grid">
            <div className="id-card">
              <h3>Physical Features</h3>
              <ul>
                {pest.identification.distinguishingFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="id-card">
              <h3>Sounds & Signs</h3>
              <ul>
                {pest.identification.soundsMade.map((sound, index) => (
                  <li key={index}>{sound}</li>
                ))}
              </ul>
              <p><strong>Droppings:</strong> {pest.identification.droppings}</p>
              <p><strong>Tracks:</strong> {pest.identification.tracks}</p>
            </div>
            
            <div className="id-card">
              <h3>Common Hiding Spots</h3>
              <ul>
                {pest.habitat.commonHidingSpots.map((spot, index) => (
                  <li key={index}>{spot}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="risks-section">
        <div className="container">
          <h2>Risks & Dangers</h2>
          <div className="risks-grid">
            <div className="risk-card health">
              <h3>⚕️ Health Risks</h3>
              <ul>
                {pest.risks.healthRisks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
            
            <div className="risk-card property">
              <h3>🏠 Property Damage</h3>
              <ul>
                {pest.risks.propertyDamage.map((damage, index) => (
                  <li key={index}>{damage}</li>
                ))}
              </ul>
            </div>
            
            <div className="risk-card business">
              <h3>💼 Business Risks</h3>
              <ul>
                {pest.risks.businessRisks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="treatment-section">
        <div className="container">
          <h2>Professional Treatment</h2>
          <div className="treatment-content">
            <div className="treatment-methods">
              <h3>Our Treatment Methods</h3>
              <ul>
                {pest.treatment.professionalMethods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              <p className="timeline"><strong>Treatment Timeline:</strong> {pest.treatment.timeline}</p>
              <p className="followup"><strong>Follow-up:</strong> {pest.treatment.followUp}</p>
            </div>
            
            <div className="treatment-prep">
              <h3>Preparation Required</h3>
              <ul>
                {pest.treatment.preparation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="prevention-section">
        <div className="container">
          <h2>Prevention Tips</h2>
          <div className="prevention-grid">
            <div className="prevention-card">
              <h3>🏠 Environmental Changes</h3>
              <ul>
                {pest.prevention.environmentalChanges.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            </div>
            
            <div className="prevention-card">
              <h3>🚪 Exclusion Methods</h3>
              <ul>
                {pest.prevention.exclusionMethods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>
            
            <div className="prevention-card">
              <h3>🧹 Cleaning Tips</h3>
              <ul>
                {pest.prevention.cleaningTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            
            {pest.prevention.landscapingTips.length > 0 && (
              <div className="prevention-card">
                <h3>🌳 Landscaping</h3>
                <ul>
                  {pest.prevention.landscapingTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="london-specific">
        <div className="container">
          <h2>{pest.name} in London</h2>
          <div className="london-content">
            <div className="hotspot-areas">
              <h3>Common Hotspots</h3>
              <p>Most affected boroughs:</p>
              <div className="borough-tags">
                {pest.londonSpecific.commonBoroughs.map((borough, index) => (
                  <Link 
                    key={index} 
                    to={`/service-areas/${borough.toLowerCase().replace(/\s+/g, '-')}`}
                    className="borough-tag"
                  >
                    {borough}
                  </Link>
                ))}
              </div>
              
              <p>Common property types:</p>
              <ul>
                {pest.londonSpecific.propertyTypes.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
            
            <div className="seasonal-activity">
              <h3>Seasonal Activity in London</h3>
              <div className="season current">
                <h4>Current Season Activity</h4>
                <p>{getCurrentSeasonActivity()}</p>
              </div>
              <div className="seasons-grid">
                <div className="season">
                  <span className="season-icon">🌸</span>
                  <strong>Spring:</strong>
                  <p>{pest.londonSpecific.seasonalActivity.spring}</p>
                </div>
                <div className="season">
                  <span className="season-icon">☀️</span>
                  <strong>Summer:</strong>
                  <p>{pest.londonSpecific.seasonalActivity.summer}</p>
                </div>
                <div className="season">
                  <span className="season-icon">🍂</span>
                  <strong>Autumn:</strong>
                  <p>{pest.londonSpecific.seasonalActivity.autumn}</p>
                </div>
                <div className="season">
                  <span className="season-icon">❄️</span>
                  <strong>Winter:</strong>
                  <p>{pest.londonSpecific.seasonalActivity.winter}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-pests">
        <div className="container">
          <h2>Related Pests</h2>
          <div className="related-grid">
            {pest.relatedPests.map(relatedId => {
              const relatedPest = pests.find(p => p.id === relatedId);
              if (!relatedPest) return null;
              
              return (
                <Link 
                  key={relatedPest.id} 
                  to={`/pest-library/${relatedPest.id}`}
                  className="related-card"
                >
                  <h3>{relatedPest.name}</h3>
                  <p>{relatedPest.description.substring(0, 100)}...</p>
                  <span className="link-arrow">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need {pest.name} Control?</h2>
            <p>Our BPCA-certified technicians are ready to help</p>
            <div className="features">
              <div className="feature">✓ Next-day service available</div>
              <div className="feature">✓ 100% satisfaction guarantee</div>
              <div className="feature">✓ Safe for children and pets</div>
              <div className="feature">✓ Discrete service</div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
              <a href="tel:07727049304" className="btn btn-secondary">
                <span>📞</span> 077 2704 9304
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestDetail;