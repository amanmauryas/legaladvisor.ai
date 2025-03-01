import React from 'react';
import { 
  FileText, 
  Scale, 
  Gavel, 
  Building, 
  Home, 
  Briefcase, 
  Users, 
  Globe, 
  Shield, 
  BookOpen,
  ArrowRight,
  Check
} from 'lucide-react';

const LegalServicePage: React.FC = () => {
  const services = [
    {
      icon: <Scale className="h-12 w-12 text-blue-600" />,
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses of all sizes",
      features: [
        "Business Formation & Registration",
        "Contract Drafting & Review",
        "Mergers & Acquisitions",
        "Corporate Governance"
      ]
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Real Estate Law",
      description: "Expert guidance in property matters and transactions",
      features: [
        "Property Transactions",
        "Lease Agreements",
        "Title Reviews",
        "Property Disputes"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Family Law",
      description: "Sensitive handling of family legal matters",
      features: [
        "Divorce Proceedings",
        "Child Custody",
        "Marriage Agreements",
        "Estate Planning"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Intellectual Property",
      description: "Protection for your creative and business assets",
      features: [
        "Patent Applications",
        "Trademark Registration",
        "Copyright Protection",
        "IP Litigation"
      ]
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Legal Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert legal solutions powered by AI technology and backed by experienced attorneys
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 flex items-center text-blue-600 hover:text-blue-700 font-medium transition duration-200">
                  <span>Learn more</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional legal expertise with cutting-edge technology to provide superior legal services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Attorneys</h3>
              <p className="text-gray-600">
                Access to experienced lawyers specialized in various legal domains
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock access to legal resources and AI-powered assistance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Confidential</h3>
              <p className="text-gray-600">
                Your legal matters are handled with the utmost security and confidentiality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our legal experts and discover how we can help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule Consultation
            </button>
            <button className="bg-transparent hover:bg-blue-800 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalServicePage;
