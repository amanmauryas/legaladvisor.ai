import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
      <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{testimonial.content}</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            className="h-5 w-5 text-yellow-500" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;