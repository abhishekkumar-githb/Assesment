import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:contact@company.com" className="flex items-center space-x-4 text-gray-600 hover:text-indigo-600 transition-colors group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span>contact@company.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center space-x-4 text-gray-600 hover:text-indigo-600 transition-colors group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span>
                    123 Business Street<br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-indigo-600">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;