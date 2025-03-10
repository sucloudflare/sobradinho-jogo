import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search, Filter, X } from 'lucide-react';

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'data', name: 'Data Analysis' },
    { id: 'security', name: 'Security' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment processing.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/edsonbruno/ecommerce',
      live: 'https://ecommerce-demo.edsonbruno.dev',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A mobile application for managing tasks, projects, and deadlines with real-time notifications.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com/edsonbruno/taskmanager',
      live: 'https://taskmanager.edsonbruno.dev',
      featured: true
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing and analyzing complex datasets with customizable charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      category: 'data',
      technologies: ['D3.js', 'React', 'Python', 'Pandas'],
      github: 'https://github.com/edsonbruno/dataviz',
      live: 'https://dataviz.edsonbruno.dev',
      featured: true
    },
    {
      id: 4,
      title: 'Security Audit Tool',
      description: 'A tool for performing security audits on web applications, identifying vulnerabilities and suggesting fixes.',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de',
      category: 'security',
      technologies: ['Python', 'JavaScript', 'OWASP'],
      github: 'https://github.com/edsonbruno/securityaudit',
      live: 'https://securityaudit.edsonbruno.dev',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with a unique cybersecurity theme.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/edsonbruno/portfolio',
      live: 'https://edsonbruno.dev',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'A mobile application providing detailed weather forecasts with interactive maps and alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Weather API'],
      github: 'https://github.com/edsonbruno/weatherapp',
      live: 'https://weatherapp.edsonbruno.dev',
      featured: false
    }
  ];
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-cyber-500">&lt;</span> My Projects <span className="text-cyber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing my skills and experience in various technologies.
          </p>
        </motion.div>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="relative mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg bg-dark-600 text-white border border-dark-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent w-full md:w-64"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyber-500 text-dark-500'
                      : 'bg-dark-600 text-gray-300 hover:bg-dark-500'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-2 rounded-lg bg-dark-600 text-white hover:bg-dark-500 transition-colors flex items-center gap-2"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Filters */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mb-6"
        >
          <div className="bg-dark-600 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white">Categories</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyber-500 text-dark-500'
                      : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-cyber-500 text-dark-500 text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-dark-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 h-12 overflow-hidden">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-dark-500 text-cyber-500 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-500 text-white hover:bg-dark-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyber-500 text-dark-500 hover:bg-cyber-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}