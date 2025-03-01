import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import {
  FileText,
  Users,
  Calendar,
  Bell,
  Search,
  Filter,
  Folder,
  Clock,
  AlertCircle
} from 'lucide-react';

interface Case {
  id: string;
  title: string;
  status: 'active' | 'pending' | 'closed';
  date: string;
  type: string;
}

interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
  status: 'draft' | 'final' | 'pending_review';
}

const DashboardPage: React.FC = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in a real app, this would come from an API
  const cases: Case[] = [
    {
      id: '1',
      title: 'Contract Review - Tech Corp',
      status: 'active',
      date: '2024-02-20',
      type: 'Contract'
    },
    {
      id: '2',
      title: 'Employment Agreement',
      status: 'pending',
      date: '2024-02-18',
      type: 'Agreement'
    },
    {
      id: '3',
      title: 'Trademark Registration',
      status: 'active',
      date: '2024-02-15',
      type: 'Intellectual Property'
    }
  ];

  const documents: Document[] = [
    {
      id: '1',
      title: 'NDA - Project Alpha',
      type: 'NDA',
      date: '2024-02-20',
      status: 'final'
    },
    {
      id: '2',
      title: 'Service Agreement',
      type: 'Agreement',
      date: '2024-02-19',
      status: 'draft'
    },
    {
      id: '3',
      title: 'Privacy Policy',
      type: 'Policy',
      date: '2024-02-18',
      status: 'pending_review'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'final':
        return 'bg-secondary-light text-white';
      case 'pending':
      case 'pending_review':
        return 'bg-warning text-white';
      case 'draft':
        return 'bg-gray-500 text-white';
      case 'closed':
        return 'bg-gray-700 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-primary text-white py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Legal Dashboard</h1>
          <p className="text-primary-light mb-6">Manage your legal matters and documents</p>
          
          {/* Search and Filter Bar */}
          <div className="flex gap-4 mt-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search cases, documents..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-primary">12</span>
            </div>
            <h3 className="text-gray-600 font-medium">Active Cases</h3>
          </div>

          <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <span className="text-2xl font-bold text-secondary">5</span>
            </div>
            <h3 className="text-gray-600 font-medium">Lawyer Consultations</h3>
          </div>

          <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <span className="text-2xl font-bold text-accent">3</span>
            </div>
            <h3 className="text-gray-600 font-medium">Upcoming Meetings</h3>
          </div>

          <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-info/10 p-3 rounded-full">
                <Bell className="h-6 w-6 text-info" />
              </div>
              <span className="text-2xl font-bold text-info">8</span>
            </div>
            <h3 className="text-gray-600 font-medium">Notifications</h3>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-2 font-medium ${
                activeTab === 'overview'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`pb-4 px-2 font-medium ${
                activeTab === 'cases'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Cases
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`pb-4 px-2 font-medium ${
                activeTab === 'documents'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Documents
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Cases */}
            <div className="bg-white rounded-card shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Cases</h2>
                <button className="text-primary hover:text-primary-dark">View All</button>
              </div>
              <div className="space-y-4">
                {cases.map(case_ => (
                  <div key={case_.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Folder className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{case_.title}</h3>
                        <p className="text-sm text-gray-500">{case_.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(case_.status)}`}>
                        {case_.status}
                      </span>
                      <span className="text-sm text-gray-500">{case_.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Documents */}
            <div className="bg-white rounded-card shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Documents</h2>
                <button className="text-primary hover:text-primary-dark">View All</button>
              </div>
              <div className="space-y-4">
                {documents.map(doc => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{doc.title}</h3>
                        <p className="text-sm text-gray-500">{doc.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                      <span className="text-sm text-gray-500">{doc.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cases' && (
          <div className="bg-white rounded-card shadow-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">All Cases</h2>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
                New Case
              </button>
            </div>
            <div className="space-y-4">
              {cases.map(case_ => (
                <div key={case_.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Folder className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{case_.title}</h3>
                      <p className="text-sm text-gray-500">{case_.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                    <span className="text-sm text-gray-500">{case_.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="bg-white rounded-card shadow-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">All Documents</h2>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
                New Document
              </button>
            </div>
            <div className="space-y-4">
              {documents.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-500">{doc.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                    <span className="text-sm text-gray-500">{doc.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
