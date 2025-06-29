
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiCode, FiZap } from "react-icons/fi";
import { Sword, Shield, Target } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "System Architect",
    "Tech Specialist"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const floatingIcons = [
    { icon: Sword, color: "text-purple-400", delay: 0 },
    { icon: Shield, color: "text-blue-400", delay: 1 },
    { icon: Target, color: "text-red-400", delay: 2 },
    { icon: FiCode, color: "text-cyan-400", delay: 3 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative z-10 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-98"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black/90 to-blue-900/20"></div>
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${item.color} opacity-10`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: item.delay
              }}
              style={{
                left: `${10 + index * 20}%`,
                top: `${20 + index * 15}%`
              }}
            >
              <IconComponent size={60} />
            </motion.div>
          );
        })}

        {/* Energy Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero Content */}
          <div className="text-left">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl"
            >
              Kare Shirdi Sainath
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center mb-4 text-lg text-white"
            >
              <FiMapPin className="mr-2 text-purple-400" />
              <span>Based in Sileru, Visakhapatnam</span>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-medium mb-8 text-white h-12 flex items-center"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent font-bold">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-purple-400"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-white mb-12 leading-relaxed"
            >
              Creating exceptional digital experiences through innovative technology solutions. 
              Specializing in modern web development with expertise in cutting-edge frameworks and AI integration.
              Currently pursuing B.Tech in Computer Science with AI specialization.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-xl"
                >
                  View Portfolio
                  <FiArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400/60 text-white font-semibold rounded-full hover:bg-purple-600/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { number: "100%", label: "Dedication", color: "from-purple-300 to-blue-400", icon: FiZap },
                { number: "A+", label: "Quality", color: "from-blue-300 to-cyan-400", icon: Shield },
                { number: "Expert", label: "Level", color: "from-cyan-300 to-purple-400", icon: Sword }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-400/30 shadow-xl"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className={`text-xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} size={22} />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side - Profile Section */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="relative w-96 h-96">
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(147, 51, 234, 0.4)",
                      "0 0 50px rgba(59, 130, 246, 0.6)",
                      "0 0 30px rgba(147, 51, 234, 0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AVAILABLE
                </motion.div>

                <Avatar className="w-full h-full border-4 border-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 shadow-2xl rounded-xl">
                  <AvatarImage 
                    src="/lovable-uploads/8840a6a5-352a-405a-b417-4b44fd7cbbd7.png" 
                    alt="Kare Shirdi Sainath"
                    className="object-cover aspect-square rounded-xl"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl">
                    KS
                  </AvatarFallback>
                </Avatar>

                {/* Floating Elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full ${
                      i % 2 === 0 ? 'bg-purple-400/60' : 'bg-blue-400/60'
                    } shadow-lg`}
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -15, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8
                    }}
                    style={{
                      top: `${20 + i * 20}%`,
                      left: i < 2 ? '-8px' : 'calc(100% - 4px)'
                    }}
                  />
                ))}

                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {['{ }', '</>', '&&'].map((symbol, i) => (
                    <motion.span
                      key={i}
                      className="text-purple-300 text-lg font-mono font-bold"
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    >
                      {symbol}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
