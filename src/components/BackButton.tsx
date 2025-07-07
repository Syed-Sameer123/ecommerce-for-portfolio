import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const excludedRoutes = ['/', '/about', '/contact', '/products'];

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const shouldShow = !excludedRoutes.includes(location.pathname.toLowerCase());

  if (!shouldShow) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-20 left-4 z-50 flex items-center gap-2 px-4 py-2
      bg-white/20 dark:bg-gray-800/20 backdrop-blur-md
      border border-white/30 dark:border-gray-700/30
      text-gray-800 dark:text-gray-100
      hover:text-amber-500 dark:hover:text-amber-400
      rounded-xl shadow-md transition-all duration-300"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
};

export default BackButton;
