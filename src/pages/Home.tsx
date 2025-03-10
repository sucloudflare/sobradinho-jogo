import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Server, Database, Shield } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute w-96 h-96 rounded-full bg-cyber-500/20 blur-3xl"
            style={{
              left: mousePosition.x / 5,
              top: mousePosition.y / 5,
              transition: 'left 0.3s ease-out, top 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-96 h-96 rounded-full bg-terminal-500/10 blur-3xl"
            style={{
              right: mousePosition.x / 10,
              bottom: mousePosition.y / 10,
              transition: 'right 0.5s ease-out, bottom 0.5s ease-out'
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-cyber-500">&lt;</span> Edson Bruno <span className="text-cyber-500">/&gt;</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 mb-6 h-16 font-fira">
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'Cybersecurity Enthusiast',
                      'Problem Solver',
                      'Continuous Learner'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: 'text-terminal-500',
                    cursorClassName: 'text-cyber-500'
                  }}
                />
              </div>
              
              <p className="text-gray-400 mb-8 max-w-lg">
                Specialized in building secure, scalable, and user-friendly web applications. 
                Computer Science student at University of the People and ADS at UNEB.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                
                <a href="/resume.pdf" className="btn-outline flex items-center gap-2">
                  Download CV
                  <Download size={18} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-64 h-64 mx-auto lg:mx-0 lg:ml-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-500 to-terminal-500 animate-pulse cyber-border"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Edson Bruno" 
                  className="w-full h-full object-cover rounded-full border-4 border-dark-500"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-dark-600/90 backdrop-blur-sm p-4 rounded-lg border border-cyber-500/30 scanner">
                <div className="terminal text-xs">
                  <p><span className="text-cyber-500">$</span> whoami</p>
                  <p>edson_bruno</p>
                  <p><span className="text-cyber-500">$</span> location</p>
                  <p>Sobradinho, BA, Brazil</p>
                  <p><span className="text-cyber-500">$</span> status</p>
                  <p>Ready for new challenges</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-600/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-cyber-500">&lt;</span> Skills <span className="text-cyber-500">/&gt;</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of technical skills developed through academic studies and practical experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:border-cyber-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-dark-500 flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Frontend</h3>
              <p className="text-gray-400 mb-4">
                Creating responsive and interactive user interfaces with modern frameworks and libraries.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">React</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">TypeScript</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Tailwind CSS</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 hover:border-cyber-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-dark-500 flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
              <p className="text-gray-400 mb-4">
                Building robust server-side applications and APIs with scalable architectures.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Node.js</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Java</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Python</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 hover:border-cyber-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-dark-500 flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data</h3>
              <p className="text-gray-400 mb-4">
                Managing and analyzing data with various database systems and analytics tools.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">SQL</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">MongoDB</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Data Analysis</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 hover:border-cyber-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-dark-500 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DevOps & Security</h3>
              <p className="text-gray-400 mb-4">
                Implementing CI/CD pipelines and ensuring application security best practices.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">AWS</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Docker</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Security</span>
                  <div className="w-32 h-2 bg-dark-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-cyber-500">&lt;</span> Featured Projects <span className="text-cyber-500">/&gt;</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                viewport={{ once: true }}
                className="card group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-155${1500000000 + project * 10000000}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={`/projects/${project}`} className="btn-primary">
                      View Project
                    </Link>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project Title {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of the project, its purpose, and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-dark-500 text-cyber-500 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-dark-500 text-cyber-500 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-dark-500 text-cyber-500 px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-600/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 rounded-full bg-cyber-500/10 blur-3xl -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 rounded-full bg-terminal-500/10 blur-3xl -bottom-48 -left-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              I'm currently available for freelance work and open to new opportunities.
              If you have a project that needs coding skills, I'm your developer!
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}