import { motion } from "framer-motion";
import { FiCamera, FiMapPin, FiEdit3 } from "react-icons/fi";
import { GraduationCap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const About = () => {
  const educationData = [
    {
      degree: "B.Tech CSE-AI",
      institution: "Dr. M.G.R University",
      period: "2021–2025",
      icon: "🎓"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      period: "2019–2021",
      icon: "📘"
    },
    {
      degree: "SSC",
      institution: "D.A.V High School",
      period: "2018–2019",
      icon: "📗"
    }
  ];

  const hobbies = [
    { name: "Traveling", icon: FiMapPin },
    { name: "Photography", icon: FiCamera },
    { name: "Blogging", icon: FiEdit3 }
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
          About Me
        </motion.h1>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative group"
            >
              <img 
                src="/lovable-uploads/ce69e83a-c2da-4b77-ba56-dce21a85463a.png"
                alt="Kare Shirdi Sainath at waterfall"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Exploring nature's beauty</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative group"
            >
              <img 
                src="/lovable-uploads/f039f641-5e77-417f-9f1b-559de410d857.png"
                alt="Kare Shirdi Sainath traveling"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Passionate about traveling</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Personal Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hi! I'm Kare Shirdi Sainath, a passionate MERN Full Stack Developer currently pursuing 
                B.Tech in Computer Science Engineering with specialization in Artificial Intelligence. 
                I love creating innovative web solutions that make a difference.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <span className="mr-2">🎯</span>
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2 bg-white/5 rounded-lg p-3"
                  >
                    <hobby.icon className="text-blue-400" />
                    <span className="text-sm">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                <GraduationCap className="mr-3" />
                Education
              </h2>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/5"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{edu.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400 mb-1">{edu.institution}</p>
                        <p className="text-sm text-gray-400">{edu.period}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Python", "AI/ML", "Git"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 text-center border border-white/10"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
