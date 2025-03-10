import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, X, Terminal, Code, User, Send, 
  Layers, Github, Linkedin, Twitter
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { label: 'Home', href: '/', icon: Terminal },
    { label: 'About', href: '/about', icon: User },
    { label: 'Projects', href: '/projects', icon: Layers },
    { label: 'Contact', href: '/contact', icon: Send },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/edsonbruno' },
    { icon: Linkedin, href: 'https://linkedin.com/in/edsonbruno' },
    { icon: Twitter, href: 'https://twitter.com/edsonbruno' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-600/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              <Code size={36} className="text-cyber-500" />
            </motion.div>
            <motion.span 
              className="text-2xl font-bold text-white"
              initial={{ y: -5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <span className="text-cyber-500">&lt;</span>
              Edson Bruno
              <span className="text-cyber-500">/&gt;</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-white hover:text-cyber-500 transition-colors font-medium relative group ${
                    location.pathname === item.href ? 'text-cyber-500 font-semibold' : ''
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon size={18} />
                    {item.label}
                  </span>
                  <motion.span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                      location.pathname === item.href ? 'scale-x-100' : ''
                    }`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyber-500 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyber-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-dark-600/95 backdrop-blur-lg overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-2 py-2 px-3 rounded-lg ${
                    location.pathname === item.href 
                      ? 'bg-cyber-500/10 text-cyber-500 font-semibold' 
                      : 'text-white hover:bg-dark-500/50'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-dark-400">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyber-500 transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </header>
  );
}