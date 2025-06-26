
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiCode, FiGitBranch, FiZap } from "react-icons/fi";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "MERN Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Tech Innovator"
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
    { icon: FiCode, color: "text-cyan-400", delay: 0 },
    { icon: FiGitBranch, color: "text-emerald-400", delay: 0.5 },
    { icon: FiZap, color: "text-yellow-400", delay: 1 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative z-10 pt-20"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${item.color} opacity-10`}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: item.delay
              }}
              style={{
                left: `${20 + index * 30}%`,
                top: `${30 + index * 20}%`
              }}
            >
              <IconComponent size={60} />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Kare Shirdi Sainath
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center mb-4 text-lg text-gray-300"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiMapPin className="mr-2 text-emerald-400" />
              </motion.div>
              <span>Sileru, Visakhapatnam, Andhra Pradesh, India</span>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-200 h-12 flex items-center"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cyan-400"
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
              Passionate about creating innovative web solutions with cutting-edge technologies.
              Currently pursuing B.Tech in CSE-AI and building the future, one line of code at a time.
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
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  View Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight className="ml-2" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Interactive Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { number: "2+", label: "Projects", color: "from-cyan-400 to-blue-500" },
                { number: "5+", label: "Skills", color: "from-purple-400 to-pink-500" },
                { number: "100%", label: "Dedication", color: "from-emerald-400 to-cyan-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <motion.div
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96">
                <Avatar className="w-full h-full border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-cyan-500/25">
                  <AvatarImage 
                    src="/lovable-uploads/df354ef8-b008-4861-93e3-c75dd5c8d101.png" 
                    alt="Kare Shirdi Sainath"
                    className="object-cover aspect-square"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                    KS
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
