import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Mail, 
  Heart, Code, Terminal
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-600/80 backdrop-blur-sm pt-12 pb-6 border-t border-cyber-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
              >
                <Code size={28} className="text-cyber-500" />
              </motion.div>
              <span className="text-xl font-bold text-white">
                <span className="text-cyber-500">&lt;</span>
                Edson Bruno
                <span className="text-cyber-500">/&gt;</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer specializing in creating secure, efficient, and user-friendly web applications.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com/edsonbruno" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-dark-500 flex items-center justify-center text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/edsonbruno" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-dark-500 flex items-center justify-center text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/edsonbruno" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-dark-500 flex items-center justify-center text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="mailto:contact@edsonbruno.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-dark-500 flex items-center justify-center text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-cyber-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyber-500 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-cyber-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyber-500 rounded-full"></span>
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-cyber-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyber-500 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-cyber-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyber-500 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4 text-white">Tech Stack</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">React</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">Node.js</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">TypeScript</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">Java</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">AWS</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">DevOps</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">Python</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">SQL</div>
              <div className="bg-dark-500 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-400 transition-colors">NoSQL</div>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-dark-400">
          <p className="text-gray-500 mb-2">
            © {new Date().getFullYear()} Edson Bruno. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> and <Terminal className="w-4 h-4 text-cyber-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}