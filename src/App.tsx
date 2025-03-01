import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocale } from './contexts/LocaleContext';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import LegalServicePage from './pages/LegalServicePage';
import AIAssistantPage from './pages/AIAssistantPage';
import ConsultLawyerPage from './pages/ConsultLawyerPage';
import PricingPage from './pages/PricingPage';
import SignInPage from './pages/SignInPage';
import BlogPage from './pages/BlogPage';
import FutureUpdatesPage from './pages/FutureUpdatesPage';

const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a href="/" className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
        Go back home
      </a>
    </div>
  </div>
);

interface GoogleTranslateElement {
  TranslateElement: {
    InlineLayout: {
      SIMPLE: number;
    };
    new (options: {
      pageLanguage: string;
      includedLanguages: string;
      autoDisplay: boolean;
      layout: number;
    }, element: string): void;
  };
}

interface GoogleWindow extends Window {
  google?: {
    translate: GoogleTranslateElement;
  };
  googleTranslateElementInit?: () => void;
}

declare const window: GoogleWindow;

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const { language } = useLocale();

  useEffect(() => {
    // Remove existing Google Translate elements
    const existingScript = document.getElementById('google-translate-script');
    if (existingScript) {
      existingScript.remove();
    }
    const existingElement = document.getElementById('google_translate_element');
    if (existingElement) {
      existingElement.innerHTML = '';
    }

    // Only load Google Translate if language is not English
    if (language !== 'en') {
      // Define the callback function
      window.googleTranslateElementInit = () => {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: language,
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element'
          );
        }
      };

      // Create and append the script
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup
        script.remove();
        const element = document.getElementById('google_translate_element');
        if (element) {
          element.innerHTML = '';
        }
        if (window.googleTranslateElementInit) {
          window.googleTranslateElementInit = undefined;
        }
      };
    }
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div id="google_translate_element" className="hidden"></div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal-service" element={<LegalServicePage />} />
        <Route path="/ai-legal-assistant" element={<AIAssistantPage />} />
        <Route path="/consult-lawyer" element={<ConsultLawyerPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/future-updates" element={<FutureUpdatesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Chat Widget */}
      {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
      
      {/* Chat Button */}
      {!showChat && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default App;
