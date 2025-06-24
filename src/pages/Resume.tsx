
import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";

const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    console.log("Downloading resume...");
    // You would implement the actual download functionality here
  };

  const handlePreview = () => {
    // In a real application, this would open the resume in a new tab or modal
    console.log("Opening resume preview...");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Resume
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Resume Preview Area */}
          <div className="h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center border-b border-white/10">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <FiEye size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Resume Preview</h3>
              <p className="text-gray-300 max-w-md">
                Click the preview button below to view my detailed resume with all experience, 
                skills, and achievements.
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
              File: shirdi_resume.pdf • Last updated: December 2024
            </p>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">4+</div>
            <div className="text-sm text-gray-300">Years of Study</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-sm text-gray-300">Technologies</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl font-bold text-pink-400 mb-2">2+</div>
            <div className="text-sm text-gray-300">Major Projects</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
