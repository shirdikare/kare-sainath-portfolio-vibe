
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
      image: "/api/placeholder/600/400"
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
      image: "/api/placeholder/600/400"
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
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {project.id === 1 ? "🏠" : "🔍"}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.certificate && (
                      <FiAward className="text-yellow-400 ml-2" size={20} />
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      {project.duration && <span>Duration: {project.duration}</span>}
                      {project.type && <span className="ml-2">• {project.type}</span>}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                        <FiGithub size={16} />
                      </button>
                      <button className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                        <FiExternalLink size={16} />
                      </button>
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
          <p className="text-gray-300 mb-4">More exciting projects coming soon!</p>
          <div className="inline-flex items-center space-x-2 text-blue-400">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm">Currently working on new innovations</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
