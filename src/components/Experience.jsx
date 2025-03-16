import React from 'react';

function Experience() {
  return (
    <section
      id="Experience"
      className="relative bg-gradient-to-b from-black to-gray-800 py-12 px-6 text-white"
    >
     
      <div
        className="absolute inset-0 bg-[url('/cyber-bg.jpg')] opacity-20 bg-cover bg-center"
        aria-hidden="true"
      ></div>

      
      <div className="relative max-w-4xl mx-auto">
      
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

        {/* CTF Player Section */}
        <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-cyan-400">Capture The Flag (CTF) Player</h3>
          <p className="text-gray-300 mt-4">
            Actively participating in cybersecurity Capture The Flag (CTF) competitions, solving challenges in web security, OSINT, forensics.
          </p>
        </div>

       
      </div>
    </section>
  );
}

export default Experience;