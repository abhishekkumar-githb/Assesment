import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              About Our Company
            </h2>
            <p className="text-xl text-gray-600">
              We're a team of passionate individuals dedicated to creating exceptional digital experiences. With years of expertise, we help businesses transform their ideas into reality.
            </p>
            
            <div className="space-y-4">
              {[
                'Over 10 years of experience',
                'Award-winning team',
                'Global reach, local touch',
                'Customer satisfaction guaranteed'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;