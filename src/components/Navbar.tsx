import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Globe, Languages } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';
import { countries, languages } from '../config/translations';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const { t, currentCountry, language, setCountry, setLanguage } = useLocale();
  const [showCountries, setShowCountries] = React.useState(false);
  const [showLanguages, setShowLanguages] = React.useState(false);
  
  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('legalServices'), href: '/legal-service' },
    { name: t('aiAssistant'), href: '/ai-legal-assistant' },
    { name: t('consultLawyer'), href: '/consult-lawyer' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('blog'), href: '/blog' },
    { name: t('futureUpdates'), href: '/future-updates' },
  ];

  const handleCountryChange = (countryCode: string) => {
    setCountry(countryCode);
    setShowCountries(false);
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguages(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-blue-700" />
              <span className="ml-2 text-2xl font-bold text-blue-900">LegalAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`font-medium transition duration-300 ${
                  isActive(link.href)
                    ? 'text-blue-700'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Country and Language Selectors */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Country Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCountries(!showCountries);
                  setShowLanguages(false);
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition duration-200"
              >
                <Globe className="h-5 w-5" />
                <span>{currentCountry.flag}</span>
              </button>
              
              {showCountries && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => handleCountryChange(c.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 ${
                        currentCountry.code === c.code ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLanguages(!showLanguages);
                  setShowCountries(false);
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition duration-200"
              >
                <Languages className="h-5 w-5" />
                <span>{currentLanguage?.name.split(' ')[0]}</span>
              </button>
              
              {showLanguages && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 ${
                        language === lang.code ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/signin"
              className="text-blue-700 hover:text-blue-800 font-medium transition duration-300"
            >
              {t('signIn')}
            </Link>
            <Link
              to="/signin"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => {
                setShowCountries(!showCountries);
                setShowLanguages(false);
              }}
              className="text-gray-700 hover:text-blue-700 transition duration-200"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                setShowLanguages(!showLanguages);
                setShowCountries(false);
              }}
              className="text-gray-700 hover:text-blue-700 transition duration-200"
            >
              <Languages className="h-5 w-5" />
            </button>
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
                <Link
                  key={index}
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
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                <Link
                  to="/signin"
                  className="text-blue-700 hover:text-blue-800 font-medium py-2 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('signIn')}
                </Link>
                <Link
                  to="/signin"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('register')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Country Selector */}
      {showCountries && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white absolute bottom-0 left-0 right-0 rounded-t-xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Select Your Country</h3>
                <button
                  onClick={() => setShowCountries(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="py-2">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => handleCountryChange(c.code)}
                  className={`w-full px-4 py-3 text-left flex items-center space-x-3 ${
                    currentCountry.code === c.code ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Language Selector */}
      {showLanguages && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white absolute bottom-0 left-0 right-0 rounded-t-xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Select Language</h3>
                <button
                  onClick={() => setShowLanguages(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-3 text-left flex items-center space-x-3 ${
                    language === lang.code ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
