import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

function Awards() {
  // Link to the external certificate gallery
  const certificateGalleryLink = "https://limewire.com/d/92331478-03d6-4ef2-bc42-4525302bda3c#lqZGJgDqdEIE3H5g3OL5ZJTKJ621kl_7xVCt0sF8Fmo";

  return (
    <section id="Awards" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500"
        >
          Honors & Awards
        </motion.h2>

        {/* Awards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <FaTrophy className="w-8 h-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-white">UI/UX Winner</h3>
                <p className="text-blue-400">Issued by NCIT - Jan 2024</p>
              </div>
            </div>
            <p className="text-gray-400">
              Associated with Nepal College of Information Technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <FaShieldAlt className="w-8 h-8 text-purple-500 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-white">Ethical Hacking Certification</h3>
                <p className="text-blue-400">Issued by Broadway Infosys - Jan 2025</p>
              </div>
            </div>
            <p className="text-gray-400">
              Successfully completed 90 hours of professional Ethical Hacking Training.
            </p>
          </motion.div>
        </div>

        {/* Certificates Section */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mt-20 mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500"
        >
          Certificates
        </motion.h3>
        <div className="flex justify-center">
          <a
            href={certificateGalleryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center"
          >
            View All Certificates <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Awards;
