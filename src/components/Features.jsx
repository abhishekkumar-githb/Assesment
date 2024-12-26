import React from 'react';
import { Shield, Zap, Star, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience'
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-600" />,
      title: 'Premium Quality',
      description: 'Top-notch quality in every aspect of our service'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: 'Fully Responsive',
      description: 'Perfect experience across all devices and screens'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Discover the features that set us apart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;