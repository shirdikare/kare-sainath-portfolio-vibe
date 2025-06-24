
import { motion } from "framer-motion";
import { FiDownload, FiEye, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/df354ef8-b008-4861-93e3-c75dd5c8d101.png';
    link.download = 'KARE_SHIRDI_SAINATH_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

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
          Resume
        </motion.h1>

        {!showPreview ? (
          <>
            {/* Resume Preview Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden mb-8"
            >
              {/* Resume Preview Area */}
              <div className="h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center border-b border-white/10">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <FiEye size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">KARE SHIRDI SAINATH</h3>
                  <p className="text-gray-300 max-w-md">
                    B.Tech (CSE-AI) Student with expertise in Java, React.js, and AI technologies.
                    Click preview to view my complete resume.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePreview}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <FiEye className="mr-2" />
                    Preview Resume
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    <FiDownload className="mr-2" />
                    Download Resume
                  </motion.button>
                </div>
                
                <p className="text-center text-gray-400 mt-6 text-sm">
                  File: KARE_SHIRDI_SAINATH_Resume.pdf • Last updated: December 2024
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">B.Tech</div>
                <div className="text-sm text-gray-300">CSE-AI Pursuing</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-sm text-gray-300">Technical Skills</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-pink-400 mb-2">2+</div>
                <div className="text-sm text-gray-300">Major Projects</div>
              </div>
            </motion.div>
          </>
        ) : (
          /* Full Resume Preview */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <FiDownload className="mr-2" />
                  Download
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClosePreview}
                  className="px-6 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-8">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/df354ef8-b008-4861-93e3-c75dd5c8d101.png" 
                  alt="KARE SHIRDI SAINATH Resume"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Resume;
