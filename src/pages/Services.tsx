import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Residential Services',
      description: 'Complete pest control solutions for London homes and apartments with family-safe treatments.',
      icon: '🏠',
      features: ['Child & pet safe methods', 'Same-day emergency service', 'Satisfaction guarantee', 'Follow-up support'],
      link: '/services/residential',
      color: 'green'
    },
    {
      title: 'Commercial Services',
      description: 'Professional pest management for businesses with compliance documentation and flexible scheduling.',
      icon: '🏢',
      features: ['Discreet service', 'Compliance documentation', 'Flexible scheduling', 'Service level agreements'],
      link: '/services/commercial',
      color: 'blue'
    },
    {
      title: 'Restaurant Services',
      description: 'Specialized food service pest control with HACCP compliance and food-safe treatments only.',
      icon: '🍽️',
      features: ['Food-safe treatments', 'HACCP compliance', 'Emergency response', 'Inspection preparation'],
      link: '/services/restaurants',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          border: 'border-green-200'
        };
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          border: 'border-blue-200'
        };
      case 'red':
        return {
          bg: 'bg-red-100',
          text: 'text-red-600',
          button: 'bg-red-600 hover:bg-red-700',
          border: 'border-red-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Pest Control Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive pest management solutions for residential, commercial, and restaurant properties across London
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:02071234567" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Emergency: 020 7123 4567
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Service Type</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const colors = getColorClasses(category.color);
                return (
                  <div key={index} className={`bg-white border-2 ${colors.border} rounded-lg p-8 hover:shadow-lg transition-shadow`}>
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">{category.title}</h3>
                    <p className="text-gray-600 text-center mb-6">{category.description}</p>
                    <ul className="space-y-2 mb-8">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <span className={`${colors.text} mr-2`}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link 
                        to={category.link}
                        className={`${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block`}
                      >
                        View {category.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose PestPro London</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Fully trained and certified pest control professionals with years of London experience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600">Emergency same-day service available with 2-4 hour response times across London.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Safe & Effective</h3>
                <p className="text-gray-600">Only approved, safe treatments that are effective against pests but safe for families and pets.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                <p className="text-gray-600">All treatments come with our satisfaction guarantee and follow-up support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Serving All of London</h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide professional pest control services across all London boroughs with rapid response times.
            </p>
            <Link 
              to="/service-areas" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                to="/pest-library" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
              >
                Browse Pest Library
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services; 