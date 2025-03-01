import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-300 group">
      <div className="mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium group-hover:underline"
      >
        Learn more 
        <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
      </a>
    </div>
  );
};

export default ServiceCard;