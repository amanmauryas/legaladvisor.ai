import React from 'react';
import { Menu, X, Scale } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { name: 'Home', href: '/HomePage' },
    { name: 'Legal Services', href: '/pages/LegalServicePage' },
    { name: 'AI Legal Assistant', href: '/pages/AIAssistantPage' },
    { name: 'Consult a Lawyer', href: '/pages/ConsultLawyerPage' },
    { name: 'Pricing', href: '/PricingPage' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Scale className="h-8 w-8 text-blue-700" />
              <span className="ml-2 text-2xl font-bold text-blue-900">LegalAI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-blue-700 font-medium transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium transition duration-300">
              Sign In
            </a>
            <a 
              href="#" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-700 font-medium py-2 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="text-blue-700 hover:text-blue-800 font-medium py-2 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </a>
                <a 
                  href="#" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;