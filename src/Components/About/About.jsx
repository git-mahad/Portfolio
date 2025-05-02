import React, { useState, useEffect } from 'react';
import P6image from '../../assets/P6.jpg';

const MilestoneItem = ({ end, text, showPlus = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = end / (duration / 16);
    let start = 0;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-blue-400">
        {count}{showPlus && '+'}
      </div>
      <div className="text-xs sm:text-sm mt-1">{text}</div>
    </div>
  );
};

export default function About() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive values based on screen size
  const isMobile = windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;

  // Sidebar offset for content
  const sidebarOffset = isDesktop ? 'lg:ml-72' : '';
  
  return (
    <section 
      id="about" 
      className={`${sidebarOffset} min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 text-white`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 bg-opacity-70 p-4 sm:p-6 md:p-8 rounded-lg mb-12 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">ABOUT</h2>
          
          <p className="mb-6 text-sm sm:text-base">
          A recent BSCS graduate from UET Lahore with a strong foundation in frontend and backend development, 
          as well as database management. Proficient in JavaScript, HTML, CSS, and familiar with modern frameworks 
          and tools. Comfortable with backend concepts and database systems (SQL, NoSql). Passionate about building
          scalable, user-friendly applications and eager to contribute to real-world projects. Quick learner with 
          strong problem-solving skills and a collaborative mindset.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={P6image}
                alt="Muhammad Mahad"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:h-auto rounded-lg object-cover shadow-md"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="space-y-2 sm:space-y-3">
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Name:</span>
                    <span>Muhammad Mahad</span>
                  </p>
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Site:</span>
                    <span>link</span>
                  </p>
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Phone:</span>
                    <span>+92 3051479956</span>
                  </p>
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">City:</span>
                    <span>Lahore, Pakistan</span>
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Age:</span>
                    <span>22</span>
                  </p>
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Degree:</span>
                    <span>BSCS</span>
                  </p>
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Email:</span>
                    <span className="break-all">mahad.dev3@gmail.com</span>
                  </p>
                  <p className="flex flex-wrap text-sm sm:text-base">
                    <span className="font-semibold w-20">Skills:</span>
                    <span>MERN & CRM</span>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Results</h3>
                <p className="text-sm sm:text-base">
                  As a Full-stack developer, I have successfully contributed to a diverse range of projects spanning both national and
                  seed enterprises, operating on various scales. My capabilities extend to managing concurrent tasks efficiently.
                  I actively participated in our organization's recruitment drive and training department, demonstrating my commitment 
                  to both growth and team dynamics.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center sm:text-left">Milestones</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              <MilestoneItem end={23} text="REST APIs" showPlus={true} />
              <MilestoneItem end={6} text="React Projects" />
              <MilestoneItem end={3} text="MERN Projects" />
              <MilestoneItem end={12} text="C++ Projects" showPlus={true} />
              <MilestoneItem end={2} text="Java Projects" />
              <MilestoneItem end={5} text="HTML, CSS, JS" showPlus={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}