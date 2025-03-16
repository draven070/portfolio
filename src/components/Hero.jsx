import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../public/o.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="absolute inset-0 bg-[url('/cyber-bg.jpg')] opacity-20 bg-cover bg-center" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
         <img 
             src={profileImage} 
            alt="Bijay Dahal"
            className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg shadow-blue-500/50 object-cover"
         />

        </motion.div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
          Bijay Dahal
        </h1>
        <div className="text-xl text-gray-300 mb-6 h-20">
          <TypeAnimation
            sequence={[
              'Cybersecurity Learner',
              1000,
              'Ethical Hacking Trainee',
              1000,
              'Passionate About Security',
              1000,
              'CTF Player',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-400 mb-8">Ilam, Koshi, Nepal</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/draven070" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/bijay-dahal-226286334/" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;