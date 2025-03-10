import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, ChevronUp, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Edson's virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I assist you today?";
    }
    
    if (input.includes('name')) {
      return "I'm a virtual assistant for Edson Bruno. You can call me EBBot!";
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "You can contact Edson via email at contact@edsonbruno.dev or through the contact form on this website.";
    }
    
    if (input.includes('project') || input.includes('work')) {
      return "Edson has worked on various projects including web applications, mobile apps, data analysis tools, and security solutions. You can check them out in the Projects section!";
    }
    
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return "Edson's skills include frontend development (React, TypeScript), backend development (Node.js, Java), data analysis, and cybersecurity. He's also familiar with AWS, Docker, and various database technologies.";
    }
    
    if (input.includes('education') || input.includes('study') || input.includes('university')) {
      return "Edson is currently studying Computer Science at University of the People and Systems Analysis and Development at UNEB in Sobradinho, BA. He's also taken courses at SoulCode Academy, DigiCad, Alura, DIO, and more.";
    }
    
    if (input.includes('experience') || input.includes('job') || input.includes('work')) {
      return "Edson has experience as a Full Stack Developer, working with various technologies and frameworks to build web and mobile applications.";
    }

    return "I'm not sure I understand. Could you try rephrasing your question? You can ask about Edson's projects, skills, education, or how to contact him.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-80 md:w-96 bg-dark-600/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyber-500/30 overflow-hidden z-50"
          >
            <div className="p-4 border-b border-dark-400 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyber-500 flex items-center justify-center">
                  <Bot size={18} className="text-dark-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">EBBot</h3>
                  <p className="text-xs text-gray-400">Edson's Virtual Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-dark-500/50">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-start gap-2 mb-4 ${
                      message.isBot ? '' : 'flex-row-reverse'
                    }`}
                  >
                    {message.isBot ? (
                      <div className="w-8 h-8 rounded-full bg-cyber-500 flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-dark-500" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-dark-400 flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] ${message.isBot ? '' : 'text-right'}`}>
                      <div
                        className={`px-3 py-2 rounded-lg ${
                          message.isBot
                            ? 'bg-dark-400 text-white'
                            : 'bg-cyber-500 text-dark-500'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-2 mb-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyber-500 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-dark-500" />
                    </div>
                    <div className="bg-dark-400 text-white px-3 py-2 rounded-lg">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t border-dark-400">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-dark-500 text-white border border-dark-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-cyber-500 text-dark-500 hover:bg-cyber-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-cyber-500 text-dark-500 flex items-center justify-center shadow-lg z-50"
      >
        {isOpen ? <ChevronUp size={24} /> : <Bot size={24} />}
      </motion.button>
    </>
  );
}