import React from 'react';
import { 
  Calendar, 
  Star, 
  Zap, 
  Globe, 
  Shield, 
  Bot,
  MessageSquare,
  Video,
  FileText,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

interface Update {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'in-progress' | 'planned';
  icon: React.ReactNode;
}

const updates: Update[] = [
  {
    id: 1,
    title: "Multi-language Document Generation",
    description: "Generate legal documents in multiple languages with AI-powered translation and localization.",
    date: "Q1 2024",
    status: "upcoming",
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Enhanced AI Legal Research",
    description: "Advanced AI capabilities for comprehensive legal research across multiple jurisdictions.",
    date: "Q2 2024",
    status: "planned",
    icon: <Bot className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Real-time Legal Consultation",
    description: "Instant video consultations with legal experts through our platform.",
    date: "Q2 2024",
    status: "in-progress",
    icon: <Video className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Blockchain Contract Integration",
    description: "Smart contract creation and management with blockchain integration.",
    date: "Q3 2024",
    status: "planned",
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Advanced Document Analysis",
    description: "AI-powered analysis of complex legal documents with risk assessment.",
    date: "Q3 2024",
    status: "planned",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 6,
    title: "Legal Practice Management Suite",
    description: "Comprehensive tools for law firms to manage cases, clients, and documents.",
    date: "Q4 2024",
    status: "planned",
    icon: <Briefcase className="h-6 w-6" />
  }
];

const getStatusColor = (status: Update['status']) => {
  switch (status) {
    case 'upcoming':
      return 'bg-green-100 text-green-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    case 'planned':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const FutureUpdatesPage: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Future Updates & Roadmap
            </h1>
            <p className="text-xl text-blue-100">
              Discover what's next for our legal AI platform
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Current Focus */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Current Focus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {updates
                  .filter(update => update.status === 'in-progress')
                  .map(update => (
                    <div
                      key={update.id}
                      className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600"
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-lg p-3 mr-4">
                          {update.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {update.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{update.description}</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="text-gray-500">{update.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Upcoming Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Upcoming Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {updates
                  .filter(update => update.status === 'upcoming')
                  .map(update => (
                    <div
                      key={update.id}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
                    >
                      <div className="bg-green-100 rounded-lg p-3 inline-block mb-4">
                        {update.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {update.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{update.description}</p>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-500">{update.date}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Future Plans */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Future Plans
              </h2>
              <div className="space-y-6">
                {updates
                  .filter(update => update.status === 'planned')
                  .map(update => (
                    <div
                      key={update.id}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
                    >
                      <div className="flex items-start">
                        <div className="bg-gray-100 rounded-lg p-3 mr-4">
                          {update.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {update.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{update.description}</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="text-gray-500">{update.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Shape Our Future?
            </h2>
            <p className="text-gray-600 mb-8">
              We value your feedback. Share your ideas and help us build the future of legal technology.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              Share Your Feedback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureUpdatesPage;
