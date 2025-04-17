import React, { useState, useEffect } from 'react';

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="resume" 
      className={`min-h-screen text-white transition-all duration-300 ${
        isMobile ? 'px-4 py-8' : 'ml-64 p-8 md:p-12'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 bg-opacity-70 p-4 md:p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">RESUME</h2>

          {/* Education Section */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2">Education</h3>
            <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg">
              <div className={`flex ${isMobile ? 'flex-col gap-2' : 'justify-between items-center'}`}>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">COMPUTER SCIENCE</h4>
                  <p className="text-blue-400 text-sm md:text-base">UET Lahore, Pakistan</p>
                </div>
                <span className={`bg-blue-600 text-white px-3 py-1 rounded text-xs md:text-sm ${
                  isMobile ? 'self-start mt-2' : ''
                }`}>11/2021 - 05/2025</span>
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2">Professional Experience</h3>

            {/* Job 1 */}
            <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
              <div className={`${isMobile ? 'flex flex-col gap-2' : 'flex justify-between items-start mb-2'}`}>
                <h4 className="text-lg md:text-xl font-semibold">Software Engineer | Intern</h4>
                <span className={`bg-blue-600 text-white px-3 py-1 rounded text-xs md:text-sm ${
                  isMobile ? 'self-start' : ''
                }`}>06/2024 - 09/2024</span>
              </div>
              <p className="text-blue-400 text-sm md:text-base mb-3 md:mb-4">New Frontier Lab | Full Time | Onsite</p>
              <p className="text-sm md:text-base mb-3 md:mb-4">
                Made a notification system and site 1 and site 2
              </p>
            </div>

            {/* Job 2 */}
            <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
              <div className={`${isMobile ? 'flex flex-col gap-2' : 'flex justify-between items-start mb-2'}`}>
                <h4 className="text-lg md:text-xl font-semibold">Freelancer</h4>
                <span className={`bg-blue-600 text-white px-3 py-1 rounded text-xs md:text-sm ${
                  isMobile ? 'self-start' : ''
                }`}>09/2024 - Present</span>
              </div>
              <p className="text-blue-400 text-sm md:text-base mb-3 md:mb-4">Fiverr.com | Full Time | Remote</p>
              <p className="text-sm md:text-base mb-3 md:mb-4">
                As a Full Stack Developer on Fiverr, I offer end-to-end web development services including frontend development (HTML/CSS/JavaScript), backend engineering (Node.js/Express), and database design/implementation.
              </p>
              <ul className="list-disc pl-5 space-y-1 md:space-y-2 text-sm md:text-base">
                <li><span className="font-semibold">Full-Stack Development:</span> Delivering comprehensive web solutions including frontend development (HTML, CSS, JavaScript) and backend implementation (Node.js, Express) for diverse client projects.</li>
                <li><span className="font-semibold">Database Expertise:</span> Designing and optimizing database architectures, ensuring efficient data storage and retrieval for application requirements.</li>
                <li><span className="font-semibold">Client Solutions:</span> Developing customized web applications tailored to specific business needs, from concept through deployment.</li>
                <li><span className="font-semibold">Technical Implementation:</span> Building responsive interfaces and robust server-side functionality to create seamless user experiences.</li>
                <li><span className="font-semibold">Project Delivery:</span> Ensuring timely completion of development milestones while maintaining code quality and performance standards.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}