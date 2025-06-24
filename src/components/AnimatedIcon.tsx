
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiCode, FiDatabase, FiServer, FiGlobe } from "react-icons/fi";

const AnimatedIcon = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const icons = [
    { Icon: FiCode, delay: 0 },
    { Icon: FiDatabase, delay: 0.2 },
    { Icon: FiServer, delay: 0.4 },
    { Icon: FiGlobe, delay: 0.6 },
  ];

  return (
    <div ref={containerRef} className="relative w-32 h-32 mx-auto">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            delay: delay,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          style={{
            transform: `rotate(${index * 90}deg) translateY(-40px)`,
          }}
        >
          <motion.div
            className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/10"
            whileHover={{ scale: 1.1 }}
            style={{
              transform: `rotate(-${index * 90}deg)`,
            }}
          >
            <Icon size={24} className="text-blue-400" />
          </motion.div>
        </motion.div>
      ))}
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold">KS</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedIcon;
