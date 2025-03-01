import React from 'react';
import { Scale, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
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
              Revolutionizing legal services with AI technology, making legal advice accessible, affordable, and efficient.
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
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Disclaimer</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Security</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Accessibility</a>
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
                  123 Legal Avenue, Suite 500<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+14155552671" className="text-gray-400 hover:text-white transition duration-300">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:info@legalai.com" className="text-gray-400 hover:text-white transition duration-300">
                  info@legalai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 LegalAI. All rights reserved.
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
};

export default Footer;