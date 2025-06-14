import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Residential Services',
      subtitle: 'Home & Family Protection',
      description: 'Comprehensive pest elimination for London homes using family-safe methods that protect what matters most.',
      detailedDescription: 'Our residential pest control services are specifically designed for London homes, ensuring your family\'s safety while effectively eliminating unwanted pests. We understand that your home is your sanctuary.',
      icon: '🏠',
      primaryBenefit: 'Family-Safe Guaranteed',
      keyFeatures: [
        'Child & pet-safe treatments only',
        'Same-day emergency response',
        '12-month service guarantee',
        'Free follow-up inspections',
        'Preventative maintenance plans',
        'No-mess, discrete service'
      ],
      commonIssues: [
        'Rodent infestations in kitchens and lofts',
        'Ant colonies in food storage areas',
        'Spider webs in corners and basements',
        'Flying insects around windows',
        'Clothes moths in wardrobes'
      ],
      badHabits: [
        'Leaving pet food out overnight',
        'Poor kitchen hygiene practices',
        'Unsealed food containers',
        'Clutter providing hiding spaces',
        'Ignoring minor pest signs'
      ],
      prevention: [
        'Seal cracks and entry points',
        'Maintain clean, dry environments',
        'Store food in airtight containers',
        'Regular deep cleaning routines',
        'Professional quarterly inspections'
      ],
      link: '/services/residential',
      color: 'green',
      startingPrice: 'From £149',
      responseTime: '2-4 hours'
    },
    {
      title: 'Commercial Services',
      subtitle: 'Business Continuity Protection',
      description: 'Professional pest management that protects your business reputation with minimal disruption and full compliance documentation.',
      detailedDescription: 'Protecting London businesses from pest-related disruptions since 2010. Our commercial services ensure your operations continue smoothly while maintaining the highest standards of pest control.',
      icon: '🏢',
      primaryBenefit: 'Zero Business Disruption',
      keyFeatures: [
        'Discrete, unmarked service vehicles',
        'Out-of-hours treatment scheduling',
        'Comprehensive compliance reporting',
        'Service level agreements available',
        'Emergency 24/7 response',
        'Industry-specific solutions'
      ],
      commonIssues: [
        'Rodents in office kitchen areas',
        'Flying insects near reception',
        'Cockroaches in server rooms',
        'Ants in break room areas',
        'Birds nesting in building exteriors'
      ],
      badHabits: [
        'Inadequate waste management',
        'Poor cleaning schedules',
        'Ignoring building maintenance',
        'Delayed pest issue reporting',
        'Inconsistent food storage policies'
      ],
      prevention: [
        'Implement strict waste protocols',
        'Regular building maintenance',
        'Staff pest awareness training',
        'Monthly professional inspections',
        'Integrated pest management systems'
      ],
      link: '/services/commercial',
      color: 'blue',
      startingPrice: 'From £199',
      responseTime: '1-2 hours'
    },
    {
      title: 'Restaurant Services',
      subtitle: 'Food Safety Excellence',
      description: 'Specialized food service pest control ensuring HACCP compliance and maintaining your establishment\'s reputation for cleanliness.',
      detailedDescription: 'London\'s restaurant industry trusts us to maintain the highest food safety standards. Our specialized treatments protect your reputation, ensure compliance, and keep your kitchen pest-free.',
      icon: '🍽️',
      primaryBenefit: 'HACCP Compliance Guaranteed',
      keyFeatures: [
        'Food-safe treatments exclusively',
        'Pre-opening service scheduling',
        'HACCP documentation support',
        'Emergency same-day response',
        'Kitchen-specific protocols',
        'Health inspection preparation'
      ],
      commonIssues: [
        'Cockroaches near cooking equipment',
        'Rodents in food storage areas',
        'Flies around prep stations',
        'Ants in dining areas',
        'Drain flies in kitchen sinks'
      ],
      badHabits: [
        'Improper food waste disposal',
        'Inadequate cleaning protocols',
        'Poor storage container hygiene',
        'Ignoring minor infestations',
        'Inconsistent staff training'
      ],
      prevention: [
        'Strict sanitation schedules',
        'Proper waste management systems',
        'Regular deep cleaning protocols',
        'Staff hygiene training programs',
        'Weekly professional monitoring'
      ],
      link: '/services/restaurants',
      color: 'red',
      startingPrice: 'From £249',
      responseTime: 'Emergency: 1 hour'
    }
  ];

  const trustBadges = [
    { name: 'FSA Approved', icon: '🛡️', description: 'Food Standards Agency certified treatments' },
    { name: 'BPCA Member', icon: '🏆', description: 'British Pest Control Association member' },
    { name: 'Insured & Bonded', icon: '📋', description: '£2M public liability insurance' },
    { name: 'HACCP Compliant', icon: '✅', description: 'Full HACCP compliance documentation' }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-700',
          button: 'bg-green-600 hover:bg-green-700',
          accent: 'text-green-600'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-700',
          button: 'bg-blue-600 hover:bg-blue-700',
          accent: 'text-blue-600'
        };
      case 'red':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-700',
          button: 'bg-red-600 hover:bg-red-700',
          accent: 'text-red-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          button: 'bg-gray-600 hover:bg-gray-700',
          accent: 'text-gray-600'
        };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">London's Premier Pest Control Specialists</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Pest Control
                <span className="block text-green-400">That Actually Works</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Evidence-based pest elimination with guaranteed results. Serving London's residential, commercial, and restaurant sectors with 15+ years of proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Assessment
                </Link>
                <a 
                  href="tel:02071234567" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Emergency: 020 7123 4567
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <div className="font-semibold text-sm mb-1">{badge.name}</div>
                    <div className="text-xs text-gray-400">{badge.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories - Enhanced */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Service Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your service type for tailored pest control solutions that address your specific environment and challenges.
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, index) => {
                const colors = getColorClasses(category.color);
                return (
                  <div key={index} className={`relative overflow-hidden rounded-2xl bg-white border-2 ${colors.border} shadow-lg`}>
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 lg:p-12">
                        <div className={`inline-flex items-center ${colors.bg} rounded-full px-4 py-2 mb-6`}>
                          <span className="text-2xl mr-3">{category.icon}</span>
                          <span className={`font-semibold ${colors.text}`}>{category.primaryBenefit}</span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                        <p className={`text-lg font-medium ${colors.accent} mb-4`}>{category.subtitle}</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">{category.detailedDescription}</p>
                        
                        <div className="flex items-center gap-6 mb-8">
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${colors.accent}`}>{category.startingPrice}</div>
                            <div className="text-sm text-gray-500">Starting Price</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${colors.accent}`}>{category.responseTime}</div>
                            <div className="text-sm text-gray-500">Response Time</div>
                          </div>
                        </div>

                        <Link 
                          to={category.link}
                          className={`${colors.button} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group`}
                        >
                          Explore {category.title}
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>

                      {/* Details Side */}
                      <div className={`${colors.bg} p-8 lg:p-12`}>
                        <div className="space-y-8">
                          {/* Key Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Features</h4>
                            <ul className="space-y-2">
                              {category.keyFeatures.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start text-sm">
                                  <span className={`${colors.accent} mr-3 mt-0.5`}>✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Common Issues */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Pest Issues</h4>
                            <ul className="space-y-2">
                              {category.commonIssues.map((issue, issueIndex) => (
                                <li key={issueIndex} className="flex items-start text-sm">
                                  <span className="text-red-500 mr-3 mt-0.5">⚠</span>
                                  <span>{issue}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Prevention & Education Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Prevention is Better Than Treatment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding pest attraction factors and implementing preventative measures can save you thousands in pest control costs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const colors = getColorClasses(category.color);
                return (
                  <div key={index} className="bg-white border rounded-xl shadow-lg overflow-hidden">
                    <div className={`${colors.bg} p-6 border-b`}>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{category.icon}</span>
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      {/* Bad Habits */}
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                          <span className="mr-2">❌</span>
                          Habits That Attract Pests
                        </h4>
                        <ul className="space-y-2">
                          {category.badHabits.map((habit, habitIndex) => (
                            <li key={habitIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-400 mr-2 mt-1">•</span>
                              {habit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prevention */}
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                          <span className="mr-2">✅</span>
                          Prevention Best Practices
                        </h4>
                        <ul className="space-y-2">
                          {category.prevention.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-400 mr-2 mt-1">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why London Trusts PestPro</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                15+ years of proven results with thousands of satisfied customers across London's residential and commercial sectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">98% Success Rate</h3>
                <p className="text-gray-400">Industry-leading elimination success rate with guaranteed follow-up service.</p>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Emergency Response</h3>
                <p className="text-gray-400">Same-day emergency service with 1-4 hour response times across London.</p>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Certified</h3>
                <p className="text-gray-400">Only FSA-approved, family-safe treatments with full insurance coverage.</p>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Full Compliance</h3>
                <p className="text-gray-400">Complete documentation for health inspections and regulatory compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Eliminate Your Pest Problem?</h2>
            <p className="text-xl mb-8 text-green-100">
              Get a free, comprehensive assessment and customized treatment plan within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Assessment
              </Link>
              <Link 
                to="/pest-library" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Identify Your Pest Problem
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