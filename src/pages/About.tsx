import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award, Heart, Coffee, Code } from 'lucide-react';

export function About() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the People',
      period: '2022 - Present',
      description: 'Focusing on software engineering, algorithms, and data structures.'
    },
    {
      degree: 'Associate Degree in Systems Analysis and Development',
      institution: 'UNEB - Universidade do Estado da Bahia',
      period: '2021 - Present',
      description: 'Studying at Sobradinho campus, focusing on practical software development.'
    },
    {
      degree: 'Data Analysis Bootcamp',
      institution: 'SoulCode Academy',
      period: '2023',
      description: 'Intensive program covering data analysis, visualization, and machine learning.'
    },
    {
      degree: 'Frontend Development',
      institution: 'DigiCad',
      period: '2022',
      description: 'Specialized training in modern frontend technologies and frameworks.'
    }
  ];

  const experience = [
    {
      position: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Developing and maintaining web applications using React, Node.js, and MongoDB.'
    },
    {
      position: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Created responsive and interactive user interfaces for various client projects.'
    },
    {
      position: 'Junior Developer',
      company: 'Startup Hub',
      period: '2020 - 2021',
      description: 'Assisted in the development of web applications and learned industry best practices.'
    }
  ];

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      title: 'Java Developer',
      issuer: 'Alura',
      date: '2022'
    },
    {
      title: 'DevOps Professional',
      issuer: 'Avanti',
      date: '2023'
    },
    {
      title: 'Backend Development with Java',
      issuer: 'Digital Innovation One',
      date: '2022'
    }
  ];

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
            <span className="text-cyber-500">&lt;</span> About Me <span className="text-cyber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and journey as a developer.
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden cyber-border">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                alt="Edson Bruno" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-cyber-500">&gt;</span> Edson Bruno Santos da Fé
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm Edson, a passionate Full Stack Developer with a strong interest in cybersecurity and a love for solving complex problems through code.
              </p>
              
              <p>
                Born on March 29, 1997, I'm currently 27 years old and based in Sobradinho, Bahia, Brazil. I'm pursuing my education in Computer Science at University of the People and Systems Analysis and Development at UNEB.
              </p>
              
              <p>
                As someone living with schizophrenia, I've learned to channel my unique perspective into creative problem-solving and detail-oriented development work. I believe that neurodiversity brings valuable insights to the tech industry.
              </p>
              
              <p>
                I'm constantly expanding my knowledge through various courses and certifications, including data analysis at SoulCode Academy, frontend development at DigiCad, Java at Alura and DIO, AWS at Escola da Nuvem, and DevOps at Avanti.
              </p>
              
              <p>
                When I'm not coding, I enjoy watching hacking-related movies and exploring new technologies. I'm passionate about creating secure, efficient, and user-friendly applications that make a positive impact.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-cyber-500" size={20} />
                <span className="text-gray-300">Born: March 29, 1997</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Code className="text-cyber-500" size={20} />
                <span className="text-gray-300">Full Stack Developer</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Coffee className="text-cyber-500" size={20} />
                <span className="text-gray-300">Coffee Enthusiast</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Heart className="text-cyber-500" size={20} />
                <span className="text-gray-300">Loves Hacking Movies</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <GraduationCap className="text-cyber-500" />
            <span>Education</span>
          </h2>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:border-cyber-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-cyber-500 font-mono text-sm">{item.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{item.institution}</p>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Briefcase className="text-cyber-500" />
            <span>Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:border-cyber-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.position}</h3>
                  <span className="text-cyber-500 font-mono text-sm">{item.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Award className="text-cyber-500" />
            <span>Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:border-cyber-500 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-dark-500 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-cyber-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{item.issuer}</p>
                <p className="text-cyber-500 text-xs font-mono">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}