
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiCode, FiGitBranch, FiZap, FiSword, FiShield, FiTarget } from "react-icons/fi";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Shadow Developer",
    "Code Monarch",
    "System Architect",
    "Digital Hunter"
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
    { icon: FiSword, color: "text-purple-400", delay: 0 },
    { icon: FiShield, color: "text-blue-400", delay: 0.5 },
    { icon: FiTarget, color: "text-red-400", delay: 1 },
    { icon: FiCode, color: "text-cyan-400", delay: 1.5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative z-10 pt-20"
    >
      {/* Mystical Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shadow Particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/80"></div>
        
        {/* Floating Magic Icons */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${item.color} opacity-20`}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: item.delay
              }}
              style={{
                left: `${10 + index * 25}%`,
                top: `${20 + index * 15}%`
              }}
            >
              <IconComponent size={80} />
            </motion.div>
          );
        })}

        {/* Mystical Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/60 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8
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
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent relative"
            >
              Kare Shirdi Sainath
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center mb-4 text-lg text-gray-300"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiMapPin className="mr-2 text-purple-400" />
              </motion.div>
              <span>Shadow Realm • Sileru, Visakhapatnam</span>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-200 h-12 flex items-center"
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
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
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            >
              Rising from the shadows to dominate the digital realm. Every line of code is a weapon, 
              every project a conquest. Currently leveling up my powers in B.Tech CSE-AI.
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
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-500/25 border border-purple-400/30"
                >
                  View Arsenal
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiSword className="ml-2" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gradient-to-r from-purple-400 to-cyan-400 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 transition-all duration-300 backdrop-blur-sm border-purple-400/50"
                >
                  Join Alliance
                </Link>
              </motion.div>
            </motion.div>

            {/* Power Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { number: "∞", label: "Power Level", color: "from-purple-400 to-blue-500", icon: FiZap },
                { number: "S+", label: "Rank", color: "from-blue-400 to-cyan-500", icon: FiShield },
                { number: "Elite", label: "Class", color: "from-cyan-400 to-purple-500", icon: FiSword }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/10"
                  >
                    <motion.div
                      className="flex justify-center mb-2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <IconComponent className={`text-xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    </motion.div>
                    <motion.div
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side - Profile Section */}
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
                {/* Mystical Aura Ring */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(147, 51, 234, 0.4)",
                      "0 0 60px rgba(59, 130, 246, 0.6)",
                      "0 0 30px rgba(147, 51, 234, 0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Power Level Indicator */}
                <motion.div
                  className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LVL ∞
                </motion.div>

                {/* Main Avatar */}
                <Avatar className="w-full h-full border-4 border-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 shadow-2xl shadow-purple-500/50 rounded-lg">
                  <AvatarImage 
                    src="/lovable-uploads/8840a6a5-352a-405a-b417-4b44fd7cbbd7.png" 
                    alt="Kare Shirdi Sainath"
                    className="object-cover aspect-square rounded-lg"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                    KS
                  </AvatarFallback>
                </Avatar>

                {/* Floating Power Orbs */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-4 h-4 rounded-full ${
                      i % 2 === 0 ? 'bg-purple-500/70' : 'bg-blue-500/70'
                    } shadow-lg`}
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    style={{
                      top: `${20 + i * 20}%`,
                      left: i < 2 ? '-8px' : 'calc(100% - 8px)'
                    }}
                  />
                ))}

                {/* Mystical Runes */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {['◆', '▲', '●', '■'].map((rune, i) => (
                    <motion.span
                      key={i}
                      className="text-purple-400 text-2xl"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    >
                      {rune}
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
