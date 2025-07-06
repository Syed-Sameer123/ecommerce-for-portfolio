import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center opacity-20">
              <span className="text-white text-3xl font-bold">L</span>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/products" className="text-amber-600 hover:text-amber-700 font-medium">Products</Link>
            <span className="text-gray-400">•</span>
            <Link to="/about" className="text-amber-600 hover:text-amber-700 font-medium">About</Link>
            <span className="text-gray-400">•</span>
            <Link to="/contact" className="text-amber-600 hover:text-amber-700 font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;