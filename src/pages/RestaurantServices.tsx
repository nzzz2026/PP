import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RestaurantServices: React.FC = () => {
  const services = [
    {
      title: 'Kitchen Deep Cleaning & Treatment',
      description: 'Comprehensive kitchen pest control focusing on food preparation areas and storage zones.',
      features: ['Food-safe treatments', 'Equipment protection', 'Grease trap maintenance', 'Deep cleaning protocols'],
      price: 'From £249'
    },
    {
      title: 'Rodent Control Systems',
      description: 'Advanced monitoring and baiting systems designed specifically for restaurant environments.',
      features: ['Tamper-resistant stations', 'Digital monitoring', '24/7 tracking', 'Immediate alerts'],
      price: 'From £199'
    },
    {
      title: 'Flying Insect Management',
      description: 'Specialized control of flies, gnats, and other flying pests that threaten food safety.',
      features: ['UV light traps', 'Breeding site elimination', 'Entry point sealing', 'Drain treatments'],
      price: 'From £179'
    },
    {
      title: 'Cockroach Elimination',
      description: 'Intensive cockroach control programs using gel baits and targeted treatments.',
      features: ['Food-grade treatments', 'Crack & crevice application', 'Monitor & maintain', 'Emergency response'],
      price: 'From £229'
    },
    {
      title: 'Ant Colony Control',
      description: 'Complete ant colony elimination with focus on kitchen and food storage areas.',
      features: ['Colony targeting', 'Safe bait systems', 'Prevention barriers', 'Long-term monitoring'],
      price: 'From £169'
    },
    {
      title: 'Comprehensive IPM Program',
      description: 'Full integrated pest management program designed for restaurants and food service.',
      features: ['Monthly inspections', 'Staff training', 'HACCP compliance', 'Audit preparation'],
      price: 'From £399/month'
    }
  ];

  const complianceFeatures = [
    'Food Standards Agency (FSA) compliance',
    'Environmental Health Officer (EHO) approval',
    'HACCP integration support',
    'Allergen management protocols',
    'Detailed treatment records',
    'Emergency response protocols'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restaurant Pest Control Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Specialized pest management for London restaurants, cafes, and food service businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Restaurant Quote
              </Link>
              <a 
                href="tel:02071234567" 
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Emergency: 020 7123 4567
              </a>
            </div>
          </div>
        </section>

        {/* Food Safety Promise */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-red-600">Food Safety First Promise</h2>
              <p className="text-lg text-gray-700 mb-6">
                We understand that your restaurant's reputation depends on food safety. Our treatments are specifically designed 
                to eliminate pests while maintaining the highest food safety standards.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <span className="text-3xl mr-3">🛡️</span>
                  <span className="font-semibold">Food-Safe Only</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-3xl mr-3">⚡</span>
                  <span className="font-semibold">Emergency Response</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-3xl mr-3">✅</span>
                  <span className="font-semibold">Compliance Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Restaurants Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why London Restaurants Trust PestPro</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Food Service Experts</h3>
                <p className="text-gray-600">Specialized knowledge of restaurant pest challenges and solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-600">Pre-opening and post-closing treatments to avoid disruption.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inspection Ready</h3>
                <p className="text-gray-600">Full documentation and compliance for health inspections.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
                <p className="text-gray-600">Same-day response for urgent pest situations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Restaurant Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="text-red-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-red-600">{service.price}</span>
                    <Link 
                      to="/contact" 
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Food Safety Compliance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Compliance Features</h3>
                <ul className="space-y-3">
                  {complianceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Common Restaurant Pests</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🪳</span>
                    <div>
                      <h4 className="font-semibold">Cockroaches</h4>
                      <p className="text-sm text-gray-600">Kitchen and food prep areas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🐀</span>
                    <div>
                      <h4 className="font-semibold">Rodents</h4>
                      <p className="text-sm text-gray-600">Storage and dining areas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🪰</span>
                    <div>
                      <h4 className="font-semibold">Flies</h4>
                      <p className="text-sm text-gray-600">Kitchen and waste areas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🐜</span>
                    <div>
                      <h4 className="font-semibold">Ants</h4>
                      <p className="text-sm text-gray-600">Food storage and prep areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Restaurant Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h3 className="font-semibold mb-2">Initial Audit</h3>
                <p className="text-gray-600 text-sm">Comprehensive food safety and pest assessment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h3 className="font-semibold mb-2">Custom Plan</h3>
                <p className="text-gray-600 text-sm">Tailored IPM program for your restaurant</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h3 className="font-semibold mb-2">Safe Treatment</h3>
                <p className="text-gray-600 text-sm">Food-safe pest control implementation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h3 className="font-semibold mb-2">Monitor</h3>
                <p className="text-gray-600 text-sm">Ongoing monitoring and maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">5</div>
                <h3 className="font-semibold mb-2">Document</h3>
                <p className="text-gray-600 text-sm">Complete records for inspections</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Keep Your Restaurant Pest-Free</h2>
            <p className="text-xl mb-8">Protect your reputation with professional restaurant pest control services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Restaurant Quote
              </Link>
              <Link 
                to="/pest-library" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                View Pest Threats
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantServices;