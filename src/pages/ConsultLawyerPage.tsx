import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  MessageSquare, 
  Phone, 
  Star, 
  Search,
  Filter,
  MapPin,
  Briefcase,
  Award,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Lawyer {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: number;
  location: string;
  image: string;
  availability: string;
  bio: string;
  consultationFee: string;
  languages: string[];
}

const ConsultLawyerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [expandedLawyer, setExpandedLawyer] = useState<number | null>(null);
  
  const specialties = [
    'All', 'Business Law', 'Family Law', 'Real Estate', 'Intellectual Property', 
    'Employment Law', 'Criminal Law', 'Immigration', 'Tax Law'
  ];

  const lawyers: Lawyer[] = [
    {
      id: 1,
      name: 'Jennifer Martinez, Esq.',
      specialty: 'Business Law',
      rating: 4.9,
      reviews: 127,
      experience: 12,
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      availability: 'Available today',
      bio: 'Jennifer specializes in business law with expertise in startups, contracts, and corporate governance. She has helped over 200 businesses navigate legal challenges and growth opportunities.',
      consultationFee: '$150 / 30 min',
      languages: ['English', 'Spanish']
    },
    {
      id: 2,
      name: 'Michael Washington, J.D.',
      specialty: 'Real Estate',
      rating: 4.8,
      reviews: 93,
      experience: 15,
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      availability: 'Next available: Tomorrow',
      bio: 'Michael is a real estate attorney with extensive experience in property transactions, landlord-tenant disputes, and zoning issues. He has successfully closed over $500M in real estate deals.',
      consultationFee: '$175 / 30 min',
      languages: ['English']
    },
    {
      id: 3,
      name: 'Sarah Chen, Esq.',
      specialty: 'Intellectual Property',
      rating: 5.0,
      reviews: 78,
      experience: 8,
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      availability: 'Available today',
      bio: 'Sarah specializes in intellectual property law, focusing on patents, trademarks, and copyright protection. She has worked with numerous tech startups and established companies to protect their innovations.',
      consultationFee: '$200 / 30 min',
      languages: ['English', 'Mandarin']
    },
    {
      id: 4,
      name: 'David Rodriguez, J.D.',
      specialty: 'Family Law',
      rating: 4.7,
      reviews: 112,
      experience: 20,
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      availability: 'Next available: Friday',
      bio: 'David has dedicated his career to family law, handling divorce, custody, and child support cases with compassion and expertise. He strives to make difficult family transitions as smooth as possible.',
      consultationFee: '$165 / 30 min',
      languages: ['English', 'Spanish']
    },
    {
      id: 5,
      name: 'Aisha Johnson, Esq.',
      specialty: 'Employment Law',
      rating: 4.9,
      reviews: 86,
      experience: 10,
      location: 'Atlanta, GA',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      availability: 'Available today',
      bio: 'Aisha specializes in employment law, representing both employees and employers in workplace disputes, discrimination cases, and contract negotiations. She is known for her strategic approach to complex cases.',
      consultationFee: '$160 / 30 min',
      languages: ['English']
    },
    {
      id: 6,
      name: 'Robert Kim, J.D.',
      specialty: 'Immigration',
      rating: 4.8,
      reviews: 104,
      experience: 14,
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      availability: 'Next available: Tomorrow',
      bio: 'Robert is an immigration attorney with expertise in visa applications, green cards, citizenship, and deportation defense. He has successfully helped hundreds of families and individuals navigate the complex immigration system.',
      consultationFee: '$180 / 30 min',
      languages: ['English', 'Korean', 'Spanish']
    }
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lawyer.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || lawyer.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const toggleLawyerDetails = (id: number) => {
    if (expandedLawyer === id) {
      setExpandedLawyer(null);
    } else {
      setExpandedLawyer(id);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consult with Expert Lawyers</h1>
            <p className="text-xl text-blue-100 mb-10">
              Connect with experienced attorneys for personalized legal advice through video consultations, chat, or phone calls.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or specialty..."
                      className="w-full bg-white text-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      className="w-full bg-white text-gray-800 pl-10 pr-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                      {specialties.map((specialty, index) => (
                        <option key={index} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like to Consult?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consultation method that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Consultation</h3>
              <p className="text-gray-600 mb-6">
                Face-to-face video calls with attorneys for personalized legal advice.
              </p>
              <span className="text-blue-700 font-medium">Most Popular</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chat Consultation</h3>
              <p className="text-gray-600 mb-6">
                Text-based consultations for quick questions and document reviews.
              </p>
              <span className="text-blue-700 font-medium">Most Convenient</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone Consultation</h3>
              <p className="text-gray-600 mb-6">
                Traditional phone calls for detailed discussions and advice.
              </p>
              <span className="text-blue-700 font-medium">Most Familiar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Lawyers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Legal Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our network of qualified attorneys ready to help with your legal needs.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {filteredLawyers.length > 0 ? (
              <div className="space-y-6">
                {filteredLawyers.map(lawyer => (
                  <div key={lawyer.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                          <img 
                            src={lawyer.image} 
                            alt={lawyer.name} 
                            className="w-24 h-24 rounded-full object-cover"
                          />
                        </div>
                        <div className="md:w-3/4">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{lawyer.name}</h3>
                            <div className="flex items-center mt-2 md:mt-0">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {lawyer.availability}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-y-2 mb-4">
                            <div className="w-full md:w-1/2 flex items-center">
                              <Briefcase className="h-4 w-4 text-blue-700 mr-2" />
                              <span className="text-gray-700">{lawyer.specialty}</span>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                              <MapPin className="h-4 w-4 text-blue-700 mr-2" />
                              <span className="text-gray-700">{lawyer.location}</span>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-2" />
                              <span className="text-gray-700">{lawyer.rating} ({lawyer.reviews} reviews)</span>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                              <Award className="h-4 w-4 text-blue-700 mr-2" />
                              <span className="text-gray-700">{lawyer.experience} years experience</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <span className="text-blue-700 font-medium mb-2 sm:mb-0">{lawyer.consultationFee}</span>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => toggleLawyerDetails(lawyer.id)}
                                className="text-blue-700 hover:text-blue-800 font-medium flex items-center"
                              >
                                {expandedLawyer === lawyer.id ? (
                                  <>
                                    Less info <ChevronUp className="h-4 w-4 ml-1" />
                                  </>
                                ) : (
                                  <>
                                    More info <ChevronDown className="h-4 w-4 ml-1" />
                                  </>
                                )}
                              </button>
                              <Link 
                                to="#" 
                                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expanded details */}
                      {expandedLawyer === lawyer.id && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2">About {lawyer.name.split(',')[0]}</h4>
                          <p className="text-gray-700 mb-4">{lawyer.bio}</p>
                          
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-1">Languages</h5>
                              <div className="flex flex-wrap gap-2">
                                {lawyer.languages.map((language, index) => (
                                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    {language}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-gray-900 mb-2">Available Consultation Times</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-800 py-2 px-3 rounded transition duration-300 text-sm flex items-center justify-center">
                              <Calendar className="h-4 w-4 mr-1" /> Today, 2:00 PM
                            </button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-800 py-2 px-3 rounded transition duration-300 text-sm flex items-center justify-center">
                              <Calendar className="h-4 w-4 mr-1" /> Today, 4:30 PM
                            </button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-800 py-2 px-3 rounded transition duration-300 text-sm flex items-center justify-center">
                              <Calendar className="h-4 w-4 mr-1" /> Tomorrow, 10:00 AM
                            </button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-800 py-2 px-3 rounded transition duration-300 text-sm flex items-center justify-center">
                              <Calendar className="h-4 w-4 mr-1" /> Tomorrow, 1:30 PM
                            </button>
                          </div>
                          
                          <div className="flex justify-end">
                            <Link 
                              to="#" 
                              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                            >
                              Schedule Consultation
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <p className="text-xl text-gray-600">No lawyers found matching your criteria. Please try a different search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Lawyer Consultations Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to get the legal help you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-blue-700 font-bold text-xl">1</span>
                <div className="absolute w-8 h-0.5 bg-blue-200 -right-8 top-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Choose a Lawyer</h3>
              <p className="text-gray-600">
                Browse profiles and select an attorney with expertise in your legal matter.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-blue-700 font-bold text-xl">2</span>
                <div className="absolute w-8 h-0.5 bg-blue-200 -right-8 top-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Book a Time</h3>
              <p className="text-gray-600">
                Select a convenient consultation time from the lawyer's available slots.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-blue-700 font-bold text-xl">3</span>
                <div className="absolute w-8 h-0.5 bg-blue-200 -right-8 top-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Pay securely online for your consultation with our satisfaction guarantee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-700 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Legal Advice</h3>
              <p className="text-gray-600">
                Connect with your lawyer via video, chat, or phone for personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from clients who have received expert legal guidance through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The video consultation was incredibly helpful. My attorney was knowledgeable and gave me clear guidance on my business contract issue. Saved me thousands in potential legal problems."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Thomas Wilson</h4>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "I was able to book a consultation within hours of my landlord dispute. The attorney was compassionate and helped me understand my rights. The chat follow-up was also very helpful."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Rebecca Taylor</h4>
                  <p className="text-sm text-gray-600">Tenant</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The immigration attorney I consulted was extremely knowledgeable. He guided me through the complex visa process and was available for follow-up questions. Worth every penny."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Raj Patel</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Speak with a Lawyer?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert legal advice tailored to your specific situation from qualified attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Book a Consultation
            </Link>
            <Link to="/pricing" className="bg-transparent hover:bg-blue-800 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConsultLawyerPage;