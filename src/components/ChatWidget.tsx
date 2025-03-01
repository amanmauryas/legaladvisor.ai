import React, { useState } from 'react';
import { X, Send, FileText, Video, User, Paperclip, Loader } from 'lucide-react';
import { sendChatMessage, ChatMessage } from '../api/geminiApi';

interface ChatWidgetProps {
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { 
      type: 'ai', 
      content: 'Hello! I\'m your AI legal assistant. How can I help you today?',
      options: [
        'Draft a contract',
        'Legal advice',
        'Consult a lawyer'
      ]
    }
  ]);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;
    setError(null);
    
    try {
      setIsLoading(true);
      // Add user message to chat
      const userMessage: ChatMessage = { type: 'user', content: message };
      setChatHistory(prev => [...prev, userMessage]);
      setMessage('');

      // Get AI response
      const response = await sendChatMessage(message);
      
      // Add AI response to chat
      const aiMessage: ChatMessage = {
        type: 'ai',
        content: response.message,
        options: response.options
      };
      
      setChatHistory(prev => [...prev, aiMessage]);
    } catch (error) {
      setError('Failed to get response. Please try again.');
      // Add error message to chat
      setChatHistory(prev => [...prev, {
        type: 'ai',
        content: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.',
        options: ['Try again', 'Contact support']
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = async (option: string) => {
    setError(null);
    try {
      setIsLoading(true);
      // Add selected option as user message
      setChatHistory(prev => [...prev, { type: 'user', content: option }]);
      
      // Get AI response for the selected option
      const response = await sendChatMessage(option);
      
      // Add AI response to chat
      setChatHistory(prev => [...prev, {
        type: 'ai',
        content: response.message,
        options: response.options
      }]);
    } catch (error) {
      setError('Failed to process option. Please try again.');
      setChatHistory(prev => [...prev, {
        type: 'ai',
        content: 'I apologize, but I encountered an error processing your selection. Please try again.',
        options: ['Try again', 'Contact support']
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
      {/* Header */}
      {/* Header */}
      <div className="bg-blue-700 text-white p-4 flex justify-between items-center relative">
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
      
      {/* Error Message */}
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-sm py-1 px-4 text-center">
          {error}
        </div>
      )}
      
      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 relative">
        <div className="space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  chat.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                } ${isLoading && chat === chatHistory[chatHistory.length - 1] ? 'opacity-50' : ''}`}
              >
                <p>{chat.content}</p>
                
                {/* Options buttons for AI messages */}
                {chat.type === 'ai' && chat.options && (
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
      
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <Loader className="h-6 w-6 animate-spin text-blue-600" />
        </div>
      )}
      
      {/* Input Area */}
      <div className="p-3 border-t border-gray-200 bg-white relative">
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
            disabled={isLoading}
            className={`ml-2 ${
              isLoading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-700 hover:bg-blue-800'
            } text-white rounded-full p-2`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;