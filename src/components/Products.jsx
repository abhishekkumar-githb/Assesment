import React from 'react';
import { Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Premium Package',
      price: '$99',
      features: [
        'Advanced Analytics',
        '24/7 Support',
        'Custom Branding',
        'API Access'
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Business Package',
      price: '$199',
      features: [
        'Everything in Premium',
        'Priority Support',
        'Advanced Security',
        'Team Collaboration',
        'Custom Integration'
      ],
      popular: true,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Enterprise Package',
      price: '$299',
      features: [
        'Everything in Business',
        'Dedicated Support',
        'Custom Development',
        'SLA Guarantee',
        'Advanced Training',
        'White Label Solution'
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect solution for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                product.popular ? 'ring-2 ring-indigo-600 transform scale-105' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-6">
                  {product.price}
                  <span className="text-base font-normal text-gray-600">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};