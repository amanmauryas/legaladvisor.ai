import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Legal Services', href: '/legal-service' },
  { name: 'AI Assistant', href: '/ai-legal-assistant' },
  { name: 'Document Generator', href: '/document-generator' },
  { name: 'Consult Lawyer', href: '/consult-lawyer' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Future Updates', href: '/future-updates' },
];

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const location = useLocation();
  
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Logo Row */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-center items-center">
          <Link to="/" className="flex items-center">
            <Scale className="h-12 w-12 text-blue-700" />
            <span className="ml-3 text-4xl font-bold text-blue-900">LegalAI</span>
          </Link>
        </div>
      </div>

      {/* Navigation Row */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="hidden md:flex justify-between items-center h-16">
            {/* Navigation Links */}
            <div className="flex-1 flex justify-center items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition duration-300 ${
                    isActive(link.href)
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Sign In Button */}
            <div className="ml-10">
              <Link
                to="/signin"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 px-6 rounded-lg transition duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end items-center h-16">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
              type="button"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium py-2 transition duration-300 ${
                    isActive(link.href)
                      ? 'text-blue-700'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/signin"
                  className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 px-6 rounded-lg transition duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
