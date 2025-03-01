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
import { Link } from 'react-router-dom';

const LegalServicesPage: React.FC = () => {
  const legalPracticeAreas = [
    {
      id: 1,
      title: 'Business Law',
      description: 'Formation, contracts, compliance, and dispute resolution for businesses of all sizes.',
      icon: <Building className="h-12 w-12 text-blue-600" />,
      services: [
        'Business Formation & Registration',
        'Contract Drafting & Review',
        'Corporate Governance',
        'Mergers & Acquisitions',
        'Regulatory Compliance'
      ]
    },
    {
      id: 2,
      title: 'Real Estate Law',
      description: 'Legal services for property transactions, leases, zoning, and property disputes.',
      icon: <Home className="h-12 w-12 text-blue-600" />,
      services: [
        'Property Transactions',
        'Lease Agreements',
        'Zoning & Land Use',
        'Property Disputes',
        'Title Examinations'
      ]
    },
    {
      id: 3,
      title: 'Employment Law',
      description: 'Guidance on employment contracts, workplace policies, and dispute resolution.',
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      services: [
        'Employment Contracts',
        'Workplace Policies',
        'Discrimination Claims',
        'Severance Agreements',
        'HR Compliance'
      ]
    },
    {
      id: 4,
      title: 'Family Law',
      description: 'Legal assistance for divorce, child custody, adoption, and other family matters.',
      icon: <Users className="h-12 w-12 text-blue-600" />,
      services: [
        'Divorce Proceedings',
        'Child Custody & Support',
        'Adoption',
        'Prenuptial Agreements',
        'Estate Planning for Families'
      ]
    },
    {
      id: 5,
      title: 'Intellectual Property',
      description: 'Protection for trademarks, patents, copyrights, and trade secrets.',
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      services: [
        'Trademark Registration',
        'Patent Applications',
        'Copyright Protection',
        'IP Licensing',
        'Infringement Defense'
      ]
    },
    {
      id: 6,
      title: 'International Law',
      description: 'Legal services for cross-border transactions, immigration, and international disputes.',
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      services: [
        'Cross-Border Transactions',
        'Immigration Services',
        'International Dispute Resolution',
        'Foreign Investment',
        'Compliance with International Regulations'
      ]
    }
  ];

  const aiLegalTools = [
    {
      id: 1,
      title: 'AI Contract Generator',
      description: 'Create legally-sound contracts in minutes with our AI-powered document generator.',
      icon: <FileText className="h-10 w-10 text-white" />
    },
    {
      id: 2,
      title: 'Legal Research Assistant',
      description: 'Find relevant cases, statutes, and legal precedents with our AI research tool.',
      icon: <BookOpen className="h-10 w-10 text-white" />
    },
    {
      id: 3,
      title: 'Compliance Checker',
      description: 'Ensure your business practices comply with current laws and regulations.',
      icon: <Check className="h-10 w-10 text-white" />
    },
    {
      id: 4,
      title: 'Legal Risk Analyzer',
      description: 'Identify potential legal risks in your contracts and business operations.',
      icon: <Shield className="h-10 w-10 text-white" />
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Legal Services</h1>
            <p className="text-xl text-blue-100 mb-10">
              Combining traditional legal expertise with cutting-edge AI technology to provide efficient, accurate, and accessible legal solutions for individuals and businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ai-assistant" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                Try Our AI Legal Tools
              </Link>
              <Link to="/consult-lawyer" className="bg-transparent hover:bg-blue-800 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Consult with a Lawyer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert legal services across a wide range of practice areas, each supported by our AI-enhanced tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalPracticeAreas.map(area => (
              <div key={area.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <ul className="space-y-2 mb-6">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/ai-assistant" 
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                  >
                    Learn more 
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Legal Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-Powered Legal Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our suite of AI tools enhances traditional legal services, making them faster, more accurate, and more accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiLegalTools.map(tool => (
              <div key={tool.id} className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl shadow-lg text-white overflow-hidden">
                <div className="p-6">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                  <p className="text-blue-100 mb-6">{tool.description}</p>
                  <Link 
                    to="/ai-assistant" 
                    className="inline-block bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition duration-300"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines AI technology with human legal expertise to deliver superior results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Legal professionals working with AI" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Initial AI Analysis</h3>
                  <p className="text-gray-600">
                    Our AI system analyzes your legal needs, documents, and questions to provide initial insights and recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Review</h3>
                  <p className="text-gray-600">
                    Experienced attorneys review the AI-generated analysis, adding their expertise and ensuring accuracy.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Solution</h3>
                  <p className="text-gray-600">
                    We deliver a tailored legal solution that combines AI efficiency with human legal judgment.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our AI system continues to learn from your case, providing ongoing support and updates as laws change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Legal Services?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied clients who have transformed their legal experience with our AI-enhanced services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                Get Started Free
              </Link>
              <Link to="/pricing" className="bg-transparent hover:bg-blue-800 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalServicesPage;