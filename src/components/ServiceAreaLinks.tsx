import React from 'react';

const serviceAreas = [
  { slug: 'camden', name: 'Camden' },
  { slug: 'islington', name: 'Islington' },
  { slug: 'hackney', name: 'Hackney' },
  { slug: 'kensington-chelsea', name: 'Kensington & Chelsea' },
];

const ServiceAreaLinks: React.FC = () => (
  <section className="other-areas">
    <div className="container">
      <h2>Other London Areas We Serve</h2>
      <ul className="area-links">
        {serviceAreas.map(area => (
          <li key={area.slug}>
            <a href={`/service-areas/${area.slug}`} className="text-link">
              {area.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ServiceAreaLinks;
