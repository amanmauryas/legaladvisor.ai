import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { 
  Check, 
  X, 
  HelpCircle, 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  Video,
  MessageSquare,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { formatPrice, t } = useLocale();

  const plans = [
    {
      name: "Basic",
      description: "For individuals seeking basic legal assistance",
      price: billingPeriod === 'monthly' ? 29 : 290,
      features: [
        "AI Legal Assistant Access",
        "Document Templates",
        "Basic Legal Research",
        "Email Support",
        "1 Free Legal Document Review"
      ],
      notIncluded: [
        "Video Consultations",
        "Priority Support",
        "Custom Document Creation",
        "Dedicated Legal Team"
      ]
    },
    {
      name: "Professional",
      description: "For small businesses and professionals",
      price: billingPeriod === 'monthly' ? 99 : 990,
      popular: true,
      features: [
        "Everything in Basic",
        "3 Video Consultations/month",
        "Priority Support",
        "Custom Document Creation",
        "Unlimited Document Reviews",
        "Business Contract Templates"
      ],
      notIncluded: [
        "Dedicated Legal Team",
        "24/7 Emergency Support"
      ]
    },
    {
      name: "Enterprise",
      description: "For growing businesses with complex legal needs",
      price: billingPeriod === 'monthly' ? 299 : 2990,
      features: [
        "Everything in Professional",
        "Unlimited Video Consultations",
        "Dedicated Legal Team",
        "24/7 Emergency Support",
        "Custom Legal Strategy",
        "Regulatory Compliance Review"
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      question: "What's included in the AI Legal Assistant?",
      answer: "Our AI Legal Assistant provides instant answers to legal questions, helps with document analysis, and offers preliminary legal research. It's available 24/7 and can handle multiple legal topics."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive a prorated credit for your next billing cycle."
    },
    {
      question: "Are video consultations with real lawyers?",
      answer: "Yes, all video consultations are with licensed attorneys who specialize in relevant practice areas. They're carefully vetted and have extensive experience in their fields."
    },
    {
      question: "Is my data secure and confidential?",
      answer: "Absolutely. We employ bank-level encryption and security measures to protect your data. All communications are protected by attorney-client privilege where applicable."
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('pricing')}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {t('choosePlan')}
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={billingPeriod === 'monthly' ? 'text-white' : 'text-blue-200'}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'annual' : 'monthly')}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    billingPeriod === 'annual' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={billingPeriod === 'annual' ? 'text-white' : 'text-blue-200'}>
                Annual (Save 20%)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2">
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{formatPrice(plan.price)}</span>
                    <span className="text-gray-600">/{billingPeriod === 'monthly' ? t('mo') : t('yr')}</span>
                  </div>
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {t('getStarted')}
                  </button>
                  <div className="mt-8">
                    <p className="font-medium text-gray-900 mb-4">{t('includedFeatures')}:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-medium text-gray-900 mb-4 mt-6">{t('notIncluded')}:</p>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential features available across all our plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Confidential</h3>
              <p className="text-gray-600">Bank-level security and data encryption</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Quick answers to your legal questions</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Access to qualified legal professionals</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">AI assistance available around the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-200"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
