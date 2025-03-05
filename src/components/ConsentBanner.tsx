import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasConsented = localStorage.getItem('dataConsentAccepted');
    if (hasConsented === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dataConsentAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 px-4">
      <div className="container mx-auto py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm flex-1">
            By using this site, you consent to the collection and analysis of data for improving user experience 
            and services in accordance with Indian laws and regulations. We collect and process your data to 
            provide personalized legal assistance and enhance our services.
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={handleAccept}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-300"
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close consent banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
