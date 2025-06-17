import React from 'react';
// import { FiCheck, FiShield, FiBarChart, FiLock, FiClock, FiFileText } from 'react-icons/fi';
// import { FaFlask, FaBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CommercialServices: React.FC = () => {
  const services = [
    {
      title: 'Office Building Pest Management',
      description: 'Comprehensive pest control for office buildings, maintaining a professional environment.',
      features: ['Discreet service', 'Flexible scheduling', 'Detailed reporting', 'Compliance documentation'],
      price: 'From £199'
    },
    {
      title: 'Retail Store Protection',
      description: 'Protect your retail business from pests that could damage products and reputation.',
      features: ['Customer-friendly treatments', 'Stock protection', 'Emergency response', 'Brand protection'],
      price: 'From £179'
    },
    {
      title: 'Warehouse & Storage',
      description: 'Large-scale pest control for warehouses, distribution centers, and storage facilities.',
      features: ['Large area coverage', 'Rodent monitoring systems', 'Bird control', 'Integrated pest management'],
      price: 'From £299'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Specialized pest control for hospitals, clinics, and medical facilities with strict hygiene requirements.',
      features: ['Hospital-grade treatments', 'Infection control compliant', '24/7 emergency service', 'Sensitive area protocols'],
      price: 'From £249'
    },
    {
      title: 'Schools & Education',
      description: 'Safe pest control for educational institutions with child-safe methods and flexible scheduling.',
      features: ['Child-safe treatments', 'Holiday scheduling', 'Playground safety', 'Educational materials'],
      price: 'From £189'
    },
    {
      title: 'Manufacturing Plants',
      description: 'Industrial pest control for manufacturing facilities with compliance to industry standards.',
      features: ['Industry compliance', 'HACCP support', 'Audit preparation', 'Production area treatments'],
      price: 'From £349'
    }
  ];

  const industries = [
    { name: 'Office Buildings' },
    { name: 'Retail Stores' },
    { name: 'Warehouses' },
    { name: 'Healthcare' },
    { name: 'Education' },
    { name: 'Manufacturing' },
    { name: 'Hotels' },
    { name: 'Gyms & Spas' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="text-white py-16 relative"
          style={{
            background: `
              linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
              url('/hero-images/freepik__the-style-is-candid-image-photography-with-natural__64246.jpeg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Pest Control Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional pest management solutions for London businesses with guaranteed compliance and results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Business Quote
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
            <h2 className="text-3xl font-bold text-center mb-12">Why London Businesses Choose PestPro</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Full documentation and reporting for health inspections and audits.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2">Discreet Service</h3>
                <p className="text-gray-600">Professional, unmarked vehicles and discrete treatment methods.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Out-of-hours service available to minimize business disruption.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                <p className="text-gray-600">Service level agreements and satisfaction guarantees for peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2 flex justify-center"></div>
                  <h3 className="font-semibold">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
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
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                    <Link 
                      to="/contact" 
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
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
            <h2 className="text-3xl font-bold text-center mb-12">Compliance & Standards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4 flex justify-center"></div>
                <h3 className="text-xl font-semibold mb-2">Government Compliance</h3>
                <p className="text-gray-600">Full compliance with local council requirements and health department standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4 flex justify-center"></div>
                <h3 className="text-xl font-semibold mb-2">HACCP Support</h3>
                <p className="text-gray-600">Integrated pest management plans supporting your HACCP compliance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4 flex justify-center"></div>
                <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
                <p className="text-gray-600">Comprehensive treatment reports and monitoring data for audit purposes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Your Business Today</h2>
            <p className="text-xl mb-8">Get a customized commercial pest control solution with compliance guarantees</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Business Quote
              </Link>
              <Link 
                to="/service-areas" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default CommercialServices;