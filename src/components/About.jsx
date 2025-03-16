import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="About" 
      className="min-h-screen flex items-center py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dedicated cybersecurity enthusiast with a focus on ethical hacking and network security. 
              Currently pursuing Bachelor's degree in Computer Engineering at Nepal College of Information Technology.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Education</h3>
                <p className="text-gray-300">Computer Engineering</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Focus</h3>
                <p className="text-gray-300">Ethical Hacking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;