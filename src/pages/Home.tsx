
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiCode, FiGitBranch, FiZap } from "react-icons/fi";
import { Sword, Shield, Target, Zap } from "lucide-react";
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
    { icon: Sword, color: "text-purple-300", delay: 0 },
    { icon: Shield, color: "text-blue-300", delay: 0.5 },
    { icon: Target, color: "text-red-300", delay: 1 },
    { icon: FiCode, color: "text-cyan-300", delay: 1.5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative z-10 pt-20"
    >
      {/* Enhanced Dark Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-black/80 to-blue-900/30"></div>
        
        {/* Floating Technical Icons */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${item.color} opacity-15`}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: item.delay
              }}
              style={{
                left: `${8 + index * 22}%`,
                top: `${15 + index * 18}%`
              }}
            >
              <IconComponent size={100} />
            </motion.div>
          );
        })}

        {/* Enhanced Energy Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-400/40 rounded-full shadow-lg shadow-purple-400/20"
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Vertical Energy Streaks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
            animate={{
              y: ['-100%', '200%'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8
            }}
            style={{
              left: `${20 + i * 25}%`,
              top: 0
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero Content */}
          <div className="text-left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent relative drop-shadow-2xl"
            >
              Kare Shirdi Sainath
              <motion.div
                className="absolute -top-3 -right-3 w-10 h-10 bg-purple-400/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center mb-4 text-lg text-gray-200"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <FiMapPin className="mr-2 text-purple-300" />
              </motion.div>
              <span>Based in Sileru, Visakhapatnam</span>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-100 h-12 flex items-center"
            >
              <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-bold drop-shadow-lg">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-purple-300"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-sm"
            >
              Crafting exceptional digital experiences through innovative technology solutions. 
              Specializing in modern web development with expertise in cutting-edge frameworks and AI integration.
              Currently pursuing B.Tech in Computer Science with AI specialization.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-2xl shadow-purple-500/30 border border-purple-400/40 backdrop-blur-sm"
                >
                  View Portfolio
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sword className="ml-2" size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400/60 text-gray-100 font-semibold rounded-full hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-purple-500/10"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
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
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-purple-400/40 shadow-2xl shadow-purple-500/20"
                  >
                    <motion.div
                      className="flex justify-center mb-2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 5, repeat: Infinity, delay: index * 0.4 }}
                    >
                      <IconComponent className={`text-xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} size={22} />
                    </motion.div>
                    <motion.div
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-sm`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side - Enhanced Profile Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Main Profile Container */}
              <div className="relative w-96 h-96">
                {/* Enhanced Aura Ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(147, 51, 234, 0.6)",
                      "0 0 80px rgba(59, 130, 246, 0.8)",
                      "0 0 40px rgba(147, 51, 234, 0.6)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Status Indicator */}
                <motion.div
                  className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl shadow-purple-500/50"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ACTIVE
                </motion.div>

                {/* Main Avatar */}
                <Avatar className="w-full h-full border-4 border-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 shadow-2xl shadow-purple-500/60 rounded-xl">
                  <AvatarImage 
                    src="/lovable-uploads/8840a6a5-352a-405a-b417-4b44fd7cbbd7.png" 
                    alt="Kare Shirdi Sainath"
                    className="object-cover aspect-square rounded-xl"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl">
                    KS
                  </AvatarFallback>
                </Avatar>

                {/* Enhanced Energy Orbs */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-5 h-5 rounded-full ${
                      i % 3 === 0 ? 'bg-purple-400/80' : i % 3 === 1 ? 'bg-blue-400/80' : 'bg-cyan-400/80'
                    } shadow-2xl blur-sm`}
                    animate={{
                      x: [0, 25, 0],
                      y: [0, -25, 0],
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6
                    }}
                    style={{
                      top: `${15 + i * 15}%`,
                      left: i < 3 ? '-12px' : 'calc(100% - 8px)'
                    }}
                  />
                ))}

                {/* Tech Symbols */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  {['{ }', '</>', '&&', '||'].map((symbol, i) => (
                    <motion.span
                      key={i}
                      className="text-purple-300 text-xl font-mono font-bold drop-shadow-lg"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        delay: i * 0.7 
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
