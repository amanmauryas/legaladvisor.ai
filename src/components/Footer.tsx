import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-2xl font-bold">LegalAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing legal services with AI technology, making legal advice accessible, affordable, and efficient for Indian citizens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/legal-service" className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white transition duration-300">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition duration-300">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-400 hover:text-white transition duration-300">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition duration-300">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Fatehpur, Uttar Pradesh 212622<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:info@legalai.in" className="text-gray-400 hover:text-white transition duration-300">
                  info@legalai.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LegalAI. All rights reserved.
            </p>
            <div>
              <p className="text-gray-400 text-sm text-center md:text-right">
                LegalAI is not a law firm and does not provide legal advice. The information provided is for general informational purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
