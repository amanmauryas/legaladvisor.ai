export interface DocumentTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'development' | 'active';
  fields?: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[];
  required: boolean;
}

export interface DocumentCategory {
  id: string;
  name: string;
  description: string;
}

export interface GeneratedDocument {
  templateId: string;
  formData: { [key: string]: string };
  generatedAt: Date;
  status: 'draft' | 'final';
}
