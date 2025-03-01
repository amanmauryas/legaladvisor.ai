import React, { useState } from 'react';
import { X, Send, FileText, Video, User, Paperclip } from 'lucide-react';

interface ChatWidgetProps {
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { 
      type: 'bot', 
      content: 'Hello! I\'m your AI legal assistant. How can I help you today?',
      options: [
        'Draft a contract',
        'Legal advice',
        'Consult a lawyer'
      ]
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: 'user', content: message }]);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          type: 'bot', 
          content: 'I understand you need help with that. To provide accurate assistance, could you please provide more details about your specific situation?',
          options: ['Yes, I\'ll explain more', 'I prefer to speak with a lawyer']
        }
      ]);
    }, 1000);
    
    setMessage('');
  };

  const handleOptionClick = (option: string) => {
    // Add selected option as user message
    setChatHistory([...chatHistory, { type: 'user', content: option }]);
    
    // Simulate AI response based on option
    setTimeout(() => {
      let response;
      
      if (option === 'Draft a contract') {
        response = { 
          type: 'bot', 
          content: 'I can help you draft a contract. What type of contract do you need?',
          options: ['Employment Contract', 'NDA', 'Service Agreement', 'Other']
        };
      } else if (option === 'Legal advice') {
        response = { 
          type: 'bot', 
          content: 'I can provide general legal information. What area of law do you need help with?',
          options: ['Business Law', 'Family Law', 'Real Estate', 'Intellectual Property']
        };
      } else if (option === 'Consult a lawyer') {
        response = { 
          type: 'bot', 
          content: 'I can connect you with a qualified attorney. Would you like to schedule a video consultation or chat with a lawyer?',
          options: ['Video Consultation', 'Chat with Lawyer']
        };
      } else {
        response = { 
          type: 'bot', 
          content: 'Thank you for providing that information. Based on what you\'ve shared, I recommend the following next steps...',
          options: ['Tell me more', 'Download information', 'Speak to a specialist']
        };
      }
      
      setChatHistory(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold">LegalAI Assistant</h3>
            <p className="text-xs text-blue-100">Online | Replies in seconds</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  chat.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p>{chat.content}</p>
                
                {/* Options buttons for bot messages */}
                {chat.type === 'bot' && chat.options && (
                  <div className="mt-3 space-y-2">
                    {chat.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        onClick={() => handleOptionClick(option)}
                        className="block w-full text-left text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded p-2 transition"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-gray-100 p-2 border-t border-gray-200">
        <div className="flex space-x-2 mb-2">
          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 text-sm py-2 px-3 rounded border border-gray-300 flex items-center justify-center">
            <FileText className="h-4 w-4 mr-1" />
            <span>Draft Document</span>
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 text-sm py-2 px-3 rounded border border-gray-300 flex items-center justify-center">
            <Video className="h-4 w-4 mr-1" />
            <span>Video Consult</span>
          </button>
        </div>
      </div>
      
      {/* Input Area */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-gray-700 mr-2">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSendMessage}
            className="ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-2"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;