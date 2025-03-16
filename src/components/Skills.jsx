import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaNetworkWired, FaLaptopCode, FaBug, FaLock, FaCode } from 'react-icons/fa';

function Skills() {
  const skills = [
    {
      icon: <FaNetworkWired className="w-8 h-8" />, 
      title: "Wireshark", 
      description: "Network Protocol Analysis", 
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />, 
      title: "Ethical Hacking", 
      description: "Security Testing & Penetration Testing", 
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />, 
      title: "Kali Linux", 
      description: "Advanced Penetration Testing & Security Auditing", 
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <FaBug className="w-8 h-8" />, 
      title: "Burp Suite", 
      description: "Web Application Security Testing", 
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <FaLock className="w-8 h-8" />, 
      title: "Metasploit", 
      description: "Exploit Development & Vulnerability Assessment", 
      color: "from-gray-500 to-indigo-500"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />, 
      title: "OSINT", 
      description: "Open Source Intelligence & Information Gathering", 
      color: "from-teal-500 to-blue-600"
    },
    {
      icon: <FaCode className="w-8 h-8" />, 
      title: "Programming Languages", 
      description: "C, C++, JavaScript, Python (Intermediate Experience)", 
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="Skills" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${skill.color} mx-auto`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">{skill.title}</h3>
              <p className="text-gray-400 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
