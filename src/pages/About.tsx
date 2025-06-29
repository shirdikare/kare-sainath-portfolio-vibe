
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
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        {/* Profile Image Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <div className="relative w-64 h-64 flex justify-center items-center">
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.4)",
                    "0 0 40px rgba(239, 68, 68, 0.6)",
                    "0 0 20px rgba(239, 68, 68, 0.4)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <Avatar className="w-full h-full border-4 border-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-2xl rounded-xl">
                <AvatarImage 
                  src="/lovable-uploads/99d406a9-7947-40f2-8db8-198c5d094173.png" 
                  alt="Kare Shirdi Sainath"
                  className="object-cover object-center aspect-square rounded-xl"
                />
                <AvatarFallback className="text-4xl bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl">
                  KS
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">Personal Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hi! I'm Kare Shirdi Sainath, a passionate MERN Full Stack Developer currently pursuing 
                B.Tech in Computer Science Engineering with specialization in Artificial Intelligence. 
                I love creating innovative web solutions that make a difference.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-red-300 flex items-center">
                <span className="mr-2">🎯</span>
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2 bg-red-900/20 rounded-lg p-3 border border-red-500/20"
                  >
                    <hobby.icon className="text-red-400" />
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
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-2xl font-semibold mb-6 text-red-400 flex items-center">
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
                    className="bg-gradient-to-r from-red-500/10 to-black/20 rounded-xl p-6 border border-red-500/20"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{edu.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-red-400 mb-1">{edu.institution}</p>
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
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <h2 className="text-2xl font-semibold mb-6 text-center text-red-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Python", "AI/ML", "Git"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                  className="bg-gradient-to-r from-red-500/20 to-black/20 rounded-lg p-3 text-center border border-red-500/20"
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
