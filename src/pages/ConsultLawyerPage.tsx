import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare, Star, User, MapPin } from 'lucide-react';

const ConsultLawyerPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const lawyers = [
    {
      id: 1,
      name: "Sarah Anderson",
      specialty: "Corporate Law",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      location: "New York, NY",
      available: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      specialty: "Real Estate Law",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      location: "Los Angeles, CA",
      available: true
    },
    {
      id: 3,
      name: "Jennifer Chen",
      specialty: "Intellectual Property",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      location: "San Francisco, CA",
      available: false
    }
  ];

  const specialties = [
    "Corporate Law",
    "Real Estate Law",
    "Family Law",
    "Criminal Law",
    "Intellectual Property",
    "Employment Law",
    "Immigration Law",
    "Tax Law"
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consult with Expert Lawyers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with experienced attorneys for personalized legal guidance
            </p>
            
            {/* Specialty Filter */}
            <div className="max-w-md mx-auto">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Practice Area</option>
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.map((lawyer) => (
              <div key={lawyer.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{lawyer.name}</h3>
                      <p className="text-blue-600">{lawyer.specialty}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{lawyer.location}</span>
                  </div>

                  <div className="mt-2 flex items-center">
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 text-gray-900 font-medium">{lawyer.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-600">{lawyer.reviews} reviews</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                      <Video className="h-5 w-5" />
                      <span>Schedule Video Call</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-200">
                      <MessageSquare className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4">
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Available for consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Clock className="h-4 w-4" />
                      <span>Response time: Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert legal consultation in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Choose a Lawyer</h3>
              <p className="text-gray-600">
                Browse profiles and reviews to find the right lawyer for your needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Schedule Consultation</h3>
              <p className="text-gray-600">
                Book a convenient time for your video consultation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Get Legal Advice</h3>
              <p className="text-gray-600">
                Connect with your lawyer via video call for expert guidance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultLawyerPage;
