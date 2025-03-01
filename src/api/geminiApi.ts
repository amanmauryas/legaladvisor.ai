import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || '');

// Create a reusable chat interface
export interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
  options?: string[];
}

export interface ChatResponse {
  message: string;
  options?: string[];
}

// Initialize a chat model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const sendChatMessage = async (
  message: string,
  context?: string
): Promise<ChatResponse> => {
  try {
    // Start a chat session
    const chat = model.startChat({
      history: context ? [
        {
          role: "user",
          parts: context,
        }
      ] : [],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // For legal queries, we'll provide some standard options
    const defaultOptions = [
      "Tell me more",
      "What are my legal rights?",
      "Connect with a lawyer",
      "Get document templates"
    ];

    return {
      message: text,
      options: defaultOptions
    };
  } catch (error) {
    console.error('Error in Gemini API call:', error);
    throw new Error('Failed to get response from AI. Please try again later.');
  }
};

// Helper function to validate API key
export const validateApiKey = async (): Promise<boolean> => {
  try {
    if (!process.env.VITE_GEMINI_API_KEY) {
      throw new Error('API key not found');
    }
    // Try a simple completion to validate the API key
    await sendChatMessage('Hello');
    return true;
  } catch (error) {
    console.error('API key validation failed:', error);
    return false;
  }
};
