
import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Integrated Home Safety Gadgets",
      description: "A comprehensive 3-month team project focused on developing intelligent home safety solutions using AI and IoT technologies.",
      features: [
        "Smart fire detection system",
        "Automated emergency alerts",
        "Real-time monitoring dashboard",
        "Mobile app integration"
      ],
      technologies: ["Python", "TensorFlow", "IoT", "React", "Node.js"],
      duration: "3 months",
      type: "Team Project",
      image: "/api/placeholder/600/400",
      logo: "🏠",
      gradient: "from-orange-400 via-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "MU BOX – ML-powered Search Engine",
      description: "An advanced search engine powered by machine learning algorithms with intelligent query processing and ranking.",
      features: [
        "Natural language processing",
        "Intelligent search ranking",
        "Real-time indexing",
        "Advanced filtering options"
      ],
      technologies: ["Python", "Scikit-learn", "Flask", "Elasticsearch", "React"],
      certificate: true,
      image: "/api/placeholder/600/400",
      logo: "🔍",
      gradient: "from-blue-400 via-purple-500 to-indigo-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
          }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 30px rgba(59, 130, 246, 0.3)",
                "0 0 50px rgba(147, 51, 234, 0.4)",
                "0 0 30px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Projects
          </motion.span>
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <motion.div 
                    className="text-8xl drop-shadow-2xl relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {project.logo}
                  </motion.div>
                  
                  {/* Animated background particles */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        animate={{
                          x: [0, 100, 0],
                          y: [0, 50, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        style={{
                          left: `${10 + i * 15}%`,
                          top: `${20 + i * 10}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3 
                      className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    {project.certificate && (
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiAward className="text-yellow-400 ml-2" size={24} />
                      </motion.div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                        >
                          <motion.span 
                            className="w-1 h-1 bg-blue-400 rounded-full mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, y: -2 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + idx * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      {project.duration && <span>Duration: {project.duration}</span>}
                      {project.type && <span className="ml-2">• {project.type}</span>}
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.button 
                        className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors backdrop-blur-sm border border-blue-500/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub size={16} />
                      </motion.button>
                      <motion.button 
                        className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors backdrop-blur-sm border border-purple-500/30"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.p 
            className="text-gray-300 mb-4 text-lg font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            More exciting projects coming soon!
          </motion.p>
          <div className="inline-flex items-center space-x-2 text-blue-400">
            <motion.span 
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span 
              className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Currently working on new innovations
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
