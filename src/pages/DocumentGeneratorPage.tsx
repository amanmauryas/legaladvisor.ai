import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import {
  FileText,
  Download,
  Eye,
  Lock,
  AlertCircle,
  Check,
  ChevronDown,
  Loader
} from 'lucide-react';

interface DocumentTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  fields: FormField[];
}

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[];
  required: boolean;
}

const DocumentGeneratorPage: React.FC = () => {
  const { t } = useLocale();
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock templates - in a real app, these would come from an API
  const documentTemplates: DocumentTemplate[] = [
    {
      id: 'nda',
      name: 'Non-Disclosure Agreement',
      description: 'Standard NDA for protecting confidential information',
      category: 'Business Agreements',
      fields: [
        {
          id: 'partyName1',
          label: 'First Party Name',
          type: 'text',
          placeholder: 'Enter the name of the first party',
          required: true
        },
        {
          id: 'partyName2',
          label: 'Second Party Name',
          type: 'text',
          placeholder: 'Enter the name of the second party',
          required: true
        },
        {
          id: 'effectiveDate',
          label: 'Effective Date',
          type: 'date',
          required: true
        },
        {
          id: 'duration',
          label: 'Agreement Duration',
          type: 'select',
          options: ['1 year', '2 years', '3 years', '5 years', 'Indefinite'],
          required: true
        },
        {
          id: 'confidentialInfo',
          label: 'Confidential Information Description',
          type: 'textarea',
          placeholder: 'Describe the confidential information covered by this agreement',
          required: true
        }
      ]
    },
    {
      id: 'employment',
      name: 'Employment Agreement',
      description: 'Standard employment contract template',
      category: 'Employment',
      fields: [
        {
          id: 'employerName',
          label: 'Employer Name',
          type: 'text',
          placeholder: 'Enter the employer\'s name',
          required: true
        },
        {
          id: 'employeeName',
          label: 'Employee Name',
          type: 'text',
          placeholder: 'Enter the employee\'s name',
          required: true
        },
        {
          id: 'position',
          label: 'Job Position',
          type: 'text',
          placeholder: 'Enter the job position',
          required: true
        },
        {
          id: 'startDate',
          label: 'Start Date',
          type: 'date',
          required: true
        },
        {
          id: 'salary',
          label: 'Annual Salary',
          type: 'text',
          placeholder: 'Enter the annual salary',
          required: true
        }
      ]
    }
  ];

  const handleTemplateSelect = (template: DocumentTemplate) => {
    console.log('Template selected:', template.name);
    setSelectedTemplate(template);
    setFormData({});
    setError(null);
    setPreviewMode(false);
  };

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const validateForm = () => {
    if (!selectedTemplate) return false;
    
    const missingFields = selectedTemplate.fields
      .filter(field => field.required && !formData[field.id])
      .map(field => field.label);

    if (missingFields.length > 0) {
      setError(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return false;
    }

    setError(null);
    return true;
  };

  const handleGenerateDocument = async () => {
    if (!validateForm()) return;

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

  const handleDownload = () => {
    // In a real app, this would trigger a document download
    console.log('Downloading document...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Document Generator</h1>
          <p className="text-primary-light">Generate legally-compliant documents in minutes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-card shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Document Templates</h2>
              <div className="space-y-4">
                {documentTemplates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => handleTemplateSelect(template)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      selectedTemplate?.id === template.id
                        ? 'border-2 border-primary bg-primary/5 shadow-lg'
                        : 'border border-gray-200 hover:border-primary hover:shadow-card-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className={`h-5 w-5 ${
                          selectedTemplate?.id === template.id ? 'text-primary' : 'text-gray-500'
                        }`} />
                        <div>
                          <h3 className="font-medium text-gray-900">{template.name}</h3>
                          <p className="text-sm text-gray-500">{template.category}</p>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 ${
                        selectedTemplate?.id === template.id ? 'text-primary' : 'text-gray-400'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form and Preview */}
          <div className="lg:col-span-2">
            {selectedTemplate ? (
              <div className="bg-white rounded-card shadow-card p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">{selectedTemplate.name}</h2>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPreviewMode(!previewMode)}
                      className="flex items-center gap-2 text-primary hover:text-primary-dark"
                    >
                      <Eye className="h-5 w-5" />
                      <span>{previewMode ? 'Edit' : 'Preview'}</span>
                    </button>
                    {previewMode && (
                      <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                      >
                        <Download className="h-5 w-5" />
                        <span>Download</span>
                      </button>
                    )}
                  </div>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg flex items-center gap-3 text-error">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="mt-6">
                  {previewMode ? (
                    <div className="prose max-w-none">
                      {/* This would be replaced with actual document preview */}
                      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-bold mb-4">{selectedTemplate.name}</h3>
                        {selectedTemplate.fields.map(field => (
                          <div key={field.id} className="mb-4">
                            <p>
                              <strong>{field.label}:</strong> {formData[field.id]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); handleGenerateDocument(); }} className="space-y-6">
                      {selectedTemplate.fields.map(field => (
                        <div key={field.id} className="bg-white p-4 rounded-lg border border-gray-200">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.label}
                            {field.required && <span className="text-error ml-1">*</span>}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              value={formData[field.id] || ''}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            >
                              <option value="">Select an option</option>
                              {field.options?.map(option => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <textarea
                              value={formData[field.id] || ''}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              placeholder={field.placeholder}
                              rows={4}
                              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            />
                          ) : (
                            <input
                              type={field.type}
                              value={formData[field.id] || ''}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              placeholder={field.placeholder}
                              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            />
                          )}
                        </div>
                      ))}

                      <div className="flex items-center justify-end gap-4 pt-4">
                        <button
                          type="submit"
                          disabled={isGenerating}
                          className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isGenerating ? (
                            <>
                              <Loader className="h-5 w-5 animate-spin" />
                              <span>Generating...</span>
                            </>
                          ) : (
                            <>
                              <Check className="h-5 w-5" />
                              <span>Generate Document</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-card shadow-card p-6 text-center">
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
