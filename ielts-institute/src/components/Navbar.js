import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">IELTS Institute</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-500 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-500 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-500 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="btn-primary w-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
