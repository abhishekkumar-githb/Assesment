import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
    <div className="relative h-48 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-3xl font-bold text-indigo-600">{product.price}</span>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center space-x-2">
          <span>Add to Cart</span>
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;