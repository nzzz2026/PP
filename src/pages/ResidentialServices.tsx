import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResidentialServices: React.FC = () => {
  const services = [
    {
      title: 'Complete Home Pest Inspection',
      description: 'Comprehensive assessment of your property to identify current infestations and potential pest entry points.',
      features: ['Full property survey', 'Detailed pest risk assessment', 'Prevention recommendations', 'Written report'],
      price: 'From £89'
    },
    {
      title: 'Rodent Control & Proofing',
      description: 'Professional rat and mouse control with permanent proofing solutions to prevent future infestations.',
      features: ['Safe baiting systems', 'Entry point sealing', 'Ongoing monitoring', '12-month guarantee'],
      price: 'From £149'
    },
    {
      title: 'Insect Treatment Programs',
      description: 'Targeted treatments for ants, cockroaches, silverfish, and other household insects.',
      features: ['Species-specific treatments', 'Child & pet safe methods', 'Follow-up visits', 'Prevention advice'],
      price: 'From £139'
    },
    {
      title: 'Bed Bug Elimination',
      description: 'Complete bed bug eradication using professional heat treatment and targeted insecticides.',
      features: ['Heat treatment available', 'Mattress & furniture treatment', 'Multiple visit program', '100% elimination guarantee'],
      price: 'From £299'
    },
    {
      title: 'Wasp Nest Removal',
      description: 'Safe removal of wasp and bee nests with emergency next-day service available.',
      features: ['Emergency response', 'Safe removal techniques', 'Protective equipment included', 'Nest prevention advice'],
      price: 'From £159'
    },
    {
      title: 'Flea & Mite Treatment',
      description: 'Comprehensive flea treatment for homes with pets, including carpet and furniture treatment.',
      features: ['Pet-safe treatments', 'Carpet deep treatment', 'Growth regulator application', 'Pet care advice'],
      price: 'From £179'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Pest Control Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protecting London homes from pests with safe, effective, and guaranteed solutions
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

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose PestPro for Your Home?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">Family Safe Methods</h3>
                <p className="text-gray-600">Child and pet-friendly treatments that keep your family safe while eliminating pests effectively.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-gray-600">Next-day emergency service available with 2-4 hour response times for urgent pest situations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                <p className="text-gray-600">All residential treatments come with our satisfaction guarantee and follow-up support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Residential Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-600">{service.price}</span>
                    <Link 
                      to="/contact" 
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our 4-Step Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h3 className="font-semibold mb-2">Inspection</h3>
                <p className="text-gray-600 text-sm">Thorough assessment of your property and pest situation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h3 className="font-semibold mb-2">Treatment Plan</h3>
                <p className="text-gray-600 text-sm">Customized treatment strategy for your specific needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h3 className="font-semibold mb-2">Treatment</h3>
                <p className="text-gray-600 text-sm">Professional application of safe, effective treatments</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h3 className="font-semibold mb-2">Follow-up</h3>
                <p className="text-gray-600 text-sm">Monitoring and prevention to ensure long-term results</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Home?</h2>
            <p className="text-xl mb-8">Get a free, no-obligation quote for residential pest control services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Free Quote
              </Link>
              <Link 
                to="/pest-library" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Browse Pest Library
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default ResidentialServices;