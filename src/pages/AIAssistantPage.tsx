import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, Loader } from 'lucide-react';
import { sendChatMessage, ChatMessage } from '../api/geminiApi';

const AIAssistantPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
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
    setMessage(option);
    await handleSubmit(new Event('submit') as any);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-gray-600">
              Get instant answers to your legal questions powered by advanced AI
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white text-sm py-2 px-4 rounded-lg mb-4 text-center">
              {error}
            </div>
          )}

          {/* Chat Interface */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
            {/* Chat History */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {chatHistory.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <Bot className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <p className="text-lg">
                    Hello! I'm your AI legal assistant. How can I help you today?
                  </p>
                </div>
              ) : (
                chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.type === 'user'
                            ? 'bg-blue-600'
                            : 'bg-gray-200'
                        }`}
                      >
                        {msg.type === 'user' ? (
                          <User className="h-5 w-5 text-white" />
                        ) : (
                          <Bot className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-4 ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p>{msg.content}</p>
                        {msg.type === 'ai' && msg.options && (
                          <div className="mt-3 space-y-2">
                            {msg.options.map((option, optIndex) => (
                              <button
                                key={optIndex}
                                onClick={() => handleOptionClick(option)}
                                className="block w-full text-left text-sm bg-white hover:bg-gray-50 text-gray-800 rounded p-2 transition border border-gray-200"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
              
              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-center mt-4">
                  <Loader className="h-6 w-6 animate-spin text-blue-600" />
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your legal question..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`rounded-lg px-6 py-2 transition duration-200 flex items-center space-x-2 ${
                    isLoading 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  <span>Send</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>
              This AI assistant provides general legal information only and should not be
              considered as legal advice. For specific legal matters, please consult with a
              qualified attorney.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
