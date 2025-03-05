import { DocumentTemplate } from '../types/documents';

export const documentCategories = {
  PERSONAL: 'Personal Legal Documents',
  BUSINESS: 'Business & Commercial Documents',
  PROPERTY: 'Property & Rental Agreements',
  LEGAL_NOTICES: 'Legal Notices & Letters'
};

export const documentTemplates: DocumentTemplate[] = [
  // Personal Legal Documents
  {
    id: 'will',
    name: 'Will & Testament',
    description: 'A simple last will and testament document',
    category: documentCategories.PERSONAL,
    status: 'development'
  },
  {
    id: 'living-will',
    name: 'Living Will',
    description: 'Advance Healthcare Directive specifying medical preferences',
    category: documentCategories.PERSONAL,
    status: 'development'
  },
  {
    id: 'poa',
    name: 'Power of Attorney (POA)',
    description: 'Grants authority to act on your behalf',
    category: documentCategories.PERSONAL,
    status: 'development'
  },
  {
    id: 'medical-poa',
    name: 'Medical Power of Attorney',
    description: 'Authorizes medical decisions on your behalf',
    category: documentCategories.PERSONAL,
    status: 'development'
  },
  {
    id: 'affidavit',
    name: 'Affidavit',
    description: 'Sworn statement that can be self-drafted and notarized',
    category: documentCategories.PERSONAL,
    status: 'development'
  },
  {
    id: 'promissory-note',
    name: 'Promissory Note',
    description: 'Legally binding agreement for lending money',
    category: documentCategories.PERSONAL,
    status: 'development'
  },
  {
    id: 'authorization-letter',
    name: 'Authorization Letter',
    description: 'Grant permission for someone to act on your behalf',
    category: documentCategories.PERSONAL,
    status: 'development'
  },

  // Business & Commercial Documents
  {
    id: 'nda',
    name: 'Non-Disclosure Agreement (NDA)',
    description: 'Protects confidential information',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'freelance-agreement',
    name: 'Freelance/Consultant Agreement',
    description: 'Defines terms between freelancers and clients',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'contractor-agreement',
    name: 'Independent Contractor Agreement',
    description: 'Outlines terms between contractor and business',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'offer-letter',
    name: 'Employment Offer Letter',
    description: 'Provides job offer details',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'partnership-agreement',
    name: 'Business Partnership Agreement',
    description: 'Defines roles in a partnership',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'payment-agreement',
    name: 'Invoice & Payment Agreement',
    description: 'Documents for payment obligations',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'terms-conditions',
    name: 'Website Terms & Conditions',
    description: 'Standard policies for website users',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    description: 'Data privacy and protection policy',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'sla',
    name: 'Service Level Agreement (SLA)',
    description: 'Defines service expectations',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'loi',
    name: 'Letter of Intent (LOI)',
    description: 'Outlines preliminary agreements',
    category: documentCategories.BUSINESS,
    status: 'development'
  },
  {
    id: 'cease-desist',
    name: 'Cease and Desist Letter',
    description: 'Requests to stop an activity',
    category: documentCategories.BUSINESS,
    status: 'development'
  },

  // Property & Rental Agreements
  {
    id: 'lease-agreement',
    name: 'Lease/Rental Agreement',
    description: 'Standard rental agreement template',
    category: documentCategories.PROPERTY,
    status: 'development'
  },
  {
    id: 'roommate-agreement',
    name: 'Roommate Agreement',
    description: 'Defines living arrangements between roommates',
    category: documentCategories.PROPERTY,
    status: 'development'
  },
  {
    id: 'bill-of-sale',
    name: 'Bill of Sale',
    description: 'Documents the sale of personal property',
    category: documentCategories.PROPERTY,
    status: 'development'
  },
  {
    id: 'property-purchase',
    name: 'Property Purchase Agreement',
    description: 'Basic property sale agreement',
    category: documentCategories.PROPERTY,
    status: 'development'
  },

  // Legal Notices & Letters
  {
    id: 'eviction-notice',
    name: 'Eviction Notice',
    description: 'Written notice regarding lease violations',
    category: documentCategories.LEGAL_NOTICES,
    status: 'development'
  },
  {
    id: 'resignation-letter',
    name: 'Resignation Letter',
    description: 'Formal notice for leaving a job',
    category: documentCategories.LEGAL_NOTICES,
    status: 'development'
  },
  {
    id: 'complaint-letter',
    name: 'Complaint Letter',
    description: 'Formal report of an issue',
    category: documentCategories.LEGAL_NOTICES,
    status: 'development'
  },
  {
    id: 'debt-settlement',
    name: 'Debt Settlement Agreement',
    description: 'Agreement between debtor and creditor',
    category: documentCategories.LEGAL_NOTICES,
    status: 'development'
  },
  {
    id: 'warning-letter',
    name: 'Workplace Warning Letter',
    description: 'Used for disciplinary actions',
    category: documentCategories.LEGAL_NOTICES,
    status: 'development'
  },
  {
    id: 'demand-letter',
    name: 'Legal Demand Letter',
    description: 'Formal request before legal proceedings',
    category: documentCategories.LEGAL_NOTICES,
    status: 'development'
  }
];
