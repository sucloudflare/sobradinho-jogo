import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Sparkles, Clock, RefreshCw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Eu sou o ChatSobradinho, seu assistente virtual sobre nossa cidade. Como posso ajudar você hoje?',
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
    
    if (input.includes('história') || input.includes('historia')) {
      return 'Sobradinho foi fundada em torno da construção da Barragem de Sobradinho, iniciada em 1973. Em 1989, tornou-se município independente. A cidade tem forte ligação com o Rio São Francisco e é conhecida por seu potencial hidroelétrico e turístico. Nossa história é marcada pelo desenvolvimento sustentável e pela força do nosso povo.';
    }
    
    if (input.includes('barragem')) {
      return 'A Barragem de Sobradinho é uma das maiores obras de engenharia do Brasil. Inaugurada em 1978, possui capacidade de 34,1 bilhões de metros cúbicos de água e é fundamental para a geração de energia e controle das águas do Rio São Francisco. Além disso, é um importante ponto turístico que atrai visitantes de todo o país.';
    }
    
    if (input.includes('turismo') || input.includes('pontos turísticos') || input.includes('turisticos')) {
      return 'Sobradinho possui diversos pontos turísticos incríveis! Os principais são:\n\n1. Barragem de Sobradinho - Vista panorâmica e pôr do sol deslumbrante\n2. Balneário - Área de lazer com piscinas naturais\n3. Mirante - Vista privilegiada da cidade\n4. Praias fluviais - Ótimas para banho e esportes aquáticos\n5. Parque da Caatinga - Trilhas e contato com a natureza';
    }
    
    if (input.includes('população') || input.includes('habitantes')) {
      return 'Sobradinho tem aproximadamente 23.000 habitantes (estimativa atual) e está em constante crescimento. Nossa população é conhecida pela hospitalidade e pelo espírito acolhedor. O crescimento populacional está diretamente ligado ao turismo e às oportunidades de trabalho relacionadas à barragem.';
    }
    
    if (input.includes('economia') || input.includes('trabalho')) {
      return 'A economia de Sobradinho é diversificada e dinâmica, baseada em:\n\n1. Setor de serviços\n2. Turismo\n3. Agricultura irrigada\n4. Geração de energia elétrica\n5. Comércio local\n\nA barragem é uma importante fonte de empregos e desenvolvimento para a região.';
    }
    
    if (input.includes('clima')) {
      return 'Sobradinho possui clima semiárido, típico do sertão nordestino. Características principais:\n\n- Temperatura média anual: 26°C\n- Baixo índice pluviométrico\n- Verões quentes e secos\n- Invernos amenos\n- Alta incidência solar';
    }
    
    if (input.includes('educação') || input.includes('escolas')) {
      return 'O sistema educacional de Sobradinho é bem estruturado, contando com:\n\n1. Escolas municipais de ensino fundamental\n2. Colégio Estadual de Sobradinho\n3. Escolas técnicas profissionalizantes\n4. Programas de educação continuada\n\nNossas instituições são reconhecidas pela qualidade do ensino.';
    }

    return 'Desculpe, não entendi sua pergunta. Posso ajudar você com informações sobre:\n\n- História da cidade\n- Barragem de Sobradinho\n- Pontos turísticos\n- População\n- Economia\n- Clima\n- Educação\n\nPor favor, reformule sua pergunta sobre um desses temas!';
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
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-b from-gray-50 to-sky-50 dark:from-gray-900 dark:to-sky-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-sky-600" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              ChatSobradinho
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Seu assistente virtual inteligente sobre Sobradinho. Pergunte sobre história, 
            turismo, economia e muito mais!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="h-[600px] overflow-y-auto p-6 scroll-smooth">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-start gap-4 mb-6 ${
                      message.isBot ? '' : 'flex-row-reverse'
                    }`}
                  >
                    {message.isBot && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                    )}
                    
                    <div className={`flex flex-col ${message.isBot ? '' : 'items-end'}`}>
                      <div
                        className={`px-6 py-4 rounded-2xl max-w-[80%] ${
                          message.isBot
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                            : 'bg-gradient-to-r from-sky-500 to-blue-500 text-white'
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.text}</div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3" />
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
                  >
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    ChatSobradinho está digitando...
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}