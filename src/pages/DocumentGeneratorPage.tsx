import { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import {
  FileText,
  Download,
  Eye,
  Lock,
  AlertCircle,
  Check,
  ChevronDown,
  Loader,
  AlertTriangle
} from 'lucide-react';
import { documentTemplates, documentCategories } from '../config/documentTemplates';
import type { DocumentTemplate } from '../types/documents';

const DocumentGeneratorPage = () => {
  const { t } = useLocale();
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Group templates by category
  const templatesByCategory = Object.values(documentCategories).map(category => ({
    category,
    templates: documentTemplates.filter(template => template.category === category)
  }));

  const handleTemplateSelect = (template: DocumentTemplate) => {
    setSelectedTemplate(template);
    setFormData({});
    setError(null);
    setPreviewMode(false);

    if (template.status === 'development') {
      setError('This document template is currently under development.');
    }
  };

  const handleGenerateDocument = async () => {
    if (!selectedTemplate) return;
    
    if (selectedTemplate.status === 'development') {
      setError('This document template is currently under development.');
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPreviewMode(true);
    } catch (err) {
      setError('Failed to generate document. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-700 text-white py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Document Generator</h1>
          <p className="text-blue-100">Generate legally-compliant documents in minutes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Document Templates</h2>
              <div className="space-y-8">
                {templatesByCategory.map(({ category, templates }) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700">{category}</h3>
                    <div className="space-y-2">
                      {templates.map(template => (
                        <button
                          key={template.id}
                          onClick={() => handleTemplateSelect(template)}
                          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                            selectedTemplate?.id === template.id
                              ? 'border-2 border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <FileText className={`h-5 w-5 ${
                                selectedTemplate?.id === template.id ? 'text-blue-500' : 'text-gray-400'
                              }`} />
                              <div>
                                <h4 className="font-medium text-gray-900">{template.name}</h4>
                                <p className="text-sm text-gray-500">{template.description}</p>
                              </div>
                            </div>
                            {template.status === 'development' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                In Development
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            {selectedTemplate ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">{selectedTemplate.name}</h2>
                  {selectedTemplate.status === 'development' && (
                    <div className="flex items-center gap-2 text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="text-sm font-medium">Under Development</span>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="prose max-w-none">
                  <p className="text-gray-600">{selectedTemplate.description}</p>
                  {selectedTemplate.status === 'development' && (
                    <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">Template Under Development</h3>
                      <p className="text-yellow-700">
                        This document template is currently being developed. Once completed, you'll be able to:
                      </p>
                      <ul className="mt-4 space-y-2 text-yellow-700">
                        <li>Fill in a customized form with your specific details</li>
                        <li>Preview the generated document before downloading</li>
                        <li>Download the final document in multiple formats</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Template</h3>
                <p className="text-gray-500">
                  Choose a document template from the left to get started
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 text-gray-600">
            <Lock className="h-5 w-5" />
            <p className="text-sm">
              All documents are generated with end-to-end encryption and stored securely.
              Your data is protected and confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentGeneratorPage;
