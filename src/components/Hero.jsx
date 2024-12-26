import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-100 via-white to-pink-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            Complete Internet business solution
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
            We will work on your internet business idea.
            </p>
            <div className="flex space-x-4 animate-fade-in-delay-2">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-indigo-700 transition-colors">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Hero"
              className="rounded-lg shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;