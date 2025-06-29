
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCamera, FiMapPin, FiEdit3 } from "react-icons/fi";
import { GraduationCap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
    <div ref={containerRef} className="min-h-screen pt-24 pb-12 relative z-10 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/90 to-blue-900/30"></div>
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          style={{ y, opacity }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        {/* Profile Image Section */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="flex justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group"
          >
            <div className="relative w-80 h-80 flex justify-center items-center">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(147, 51, 234, 0.4)",
                    "0 0 60px rgba(59, 130, 246, 0.6)",
                    "0 0 30px rgba(147, 51, 234, 0.4)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-purple-400/30 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <Avatar className="w-full h-full border-4 border-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 shadow-2xl rounded-2xl overflow-hidden group-hover:border-purple-300 transition-all duration-300">
                <AvatarImage 
                  src="/lovable-uploads/2917b7e2-d175-477e-bb69-900fcec6ad82.png" 
                  alt="Kare Shirdi Sainath"
                  className="object-cover object-center aspect-square rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
                />
                <AvatarFallback className="text-4xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl">
                  KS
                </AvatarFallback>
              </Avatar>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    i % 3 === 0 ? 'bg-purple-400/60' : i % 3 === 1 ? 'bg-blue-400/60' : 'bg-cyan-400/60'
                  } shadow-lg`}
                  animate={{
                    x: [0, Math.cos(i * 60) * 30, 0],
                    y: [0, Math.sin(i * 60) * 30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.7
                  }}
                  style={{
                    top: `${50 + Math.sin(i * 60) * 40}%`,
                    left: `${50 + Math.cos(i * 60) * 40}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div 
              className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(147, 51, 234, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
              
              <h2 className="text-2xl font-semibold mb-4 text-purple-400 relative z-10">Personal Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                Hi! I'm Kare Shirdi Sainath, a passionate MERN Full Stack Developer currently pursuing 
                B.Tech in Computer Science Engineering with specialization in Artificial Intelligence. 
                I love creating innovative web solutions that make a difference.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-purple-300 flex items-center relative z-10">
                <span className="mr-2">🎯</span>
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2 bg-purple-900/30 rounded-lg p-3 border border-purple-500/30 backdrop-blur-sm"
                  >
                    <hobby.icon className="text-purple-400" />
                    <span className="text-sm">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div 
              className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
              
              <h2 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center relative z-10">
                <GraduationCap className="mr-3" />
                Education
              </h2>
              
              <div className="space-y-6 relative z-10">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/30 backdrop-blur-sm"
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
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div 
            className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 relative overflow-hidden"
            whileHover={{ scale: 1.01, boxShadow: "0 0 50px rgba(34, 211, 238, 0.3)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10"></div>
            
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-400 relative z-10">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Python", "AI/ML", "Git"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4, type: "spring" }}
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 text-center border border-cyan-500/30 backdrop-blur-sm"
                >
                  <span className="text-sm font-medium text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
