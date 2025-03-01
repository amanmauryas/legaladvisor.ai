import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  MessageSquare, 
  FileText, 
  Video, 
  Clock, 
  Lock, 
  CheckCircle,
  Scale,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const { t } = useLocale();
  const [searchQuery, setSearchQuery] = useState('');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'LegalAI helped me draft my business contracts in minutes. The AI suggestions were spot-on and saved me thousands in legal fees.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      content: 'The contract review feature caught several issues our team missed. Incredibly valuable service that combines AI efficiency with legal expertise.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Real Estate Agent',
      content: 'I use LegalAI daily for property agreements. The 24/7 availability and instant document generation have transformed my workflow.',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
    }
  ];

  const services = [
    {
      id: 1,
      title: 'AI-Powered Legal Q&A',
      description: 'Get instant answers to your legal questions with our advanced AI system trained on legal precedents and current laws.',
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />
    },
    {
      id: 2,
      title: 'Contract Drafting',
      description: 'Generate legally-sound contracts and agreements tailored to your specific needs in minutes.',
      icon: <FileText className="h-10 w-10 text-blue-600" />
    },
    {
      id: 3,
      title: 'Legal Consultation',
      description: 'Schedule video calls with experienced attorneys who can provide personalized legal advice.',
      icon: <Video className="h-10 w-10 text-blue-600" />
    },
    {
      id: 4,
      title: '24/7 Assistance',
      description: 'Access legal help anytime, anywhere with our round-the-clock AI assistant and on-call legal professionals.',
      icon: <Clock className="h-10 w-10 text-blue-600" />
    }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {t('welcome')}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get legal insights, draft contracts, and consult with professionals effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                  {t('getStarted')}
                </button>
                <button className="bg-transparent hover:bg-blue-800 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  {t('learnMore')}
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20 w-full max-w-md">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold">AI Legal Search</h2>
                </div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder={t('askLegalQuestion')}
                    className="w-full bg-white/20 text-white placeholder-blue-200 border border-blue-300/30 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute right-3 top-3 h-6 w-6 text-blue-200" />
                </div>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/20 rounded-lg p-3 cursor-pointer hover:bg-white/30 transition">
                    <p className="text-sm">How do I register a trademark?</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 cursor-pointer hover:bg-white/30 transition">
                    <p className="text-sm">What are my rights as a tenant?</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 cursor-pointer hover:bg-white/30 transition">
                    <p className="text-sm">How to create an LLC?</p>
                  </div>
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 rounded-lg transition duration-300">
                  {t('searchNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-blue-700 mr-2" />
              <span className="text-gray-700 font-medium">Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-blue-700 mr-2" />
              <span className="text-gray-700 font-medium">AI + Human Expertise</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-blue-700 mr-2" />
              <span className="text-gray-700 font-medium">24/7 Assistance</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-700 mr-2" />
              <span className="text-gray-700 font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining cutting-edge AI technology with legal expertise to provide efficient, accurate, and accessible legal solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies legal processes through AI-powered assistance and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Ask Your Question</h3>
              <p className="text-gray-600">
                Type your legal question or describe your situation in natural language.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Get AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your query against legal databases and provides relevant information.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Expert Review</h3>
              <p className="text-gray-600">
                For complex matters, our legal professionals review AI-generated advice for accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of individuals and businesses trust our AI legal platform for their legal needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients who have simplified their legal processes with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Get Started Free
            </button>
            <button className="bg-transparent hover:bg-blue-800 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
