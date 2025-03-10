import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paw } from 'lucide-react';
import toast from 'react-hot-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Inscrição realizada com sucesso!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-primary-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              rotate: Math.random() * 360,
              opacity: 0.3 + Math.random() * 0.7
            }}
            animate={{ 
              x: [
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%', 
                Math.random() * 100 + '%'
              ],
              rotate: Math.random() * 360 + 360
            }}
            transition={{ 
              duration: 15 + Math.random() * 15, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Paw size={20 + Math.random() * 30} className="text-black" />
          </motion.div>
        ))}
      </div>
      
      <div className="relative text-center max-w-2xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bubblegum text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Receba Novidades e Promoções
        </motion.h2>
        
        <motion.p 
          className="text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Inscreva-se em nossa newsletter e receba ofertas exclusivas, dicas de cuidados com pets e novidades em primeira mão!
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Inscrever</span>
                <Send size={18} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}