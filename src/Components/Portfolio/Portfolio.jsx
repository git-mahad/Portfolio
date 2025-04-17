import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = {
    ALL: [
      {
        id: 1,
        title: "Smart Stitchers",
        year: "2016/11",
        description: "BECAUDER BROOKLYN & SOUNTLY",
        category: "APP WEB",
        image: "/path-to-image1.jpg",
        details: "Full description of Smart Stitchers project...",
        features: ["Feature 1", "Feature 2", "Feature 3"]
      },
      {
        id: 2,
        title: "Text App",
        description: "Communication platform",
        features: ["TEXTS", "CALL", "PAGES"],
        category: "ATLET",
        image: "/path-to-image2.jpg",
        details: "Full description of Text App project..."
      }
    ],
    APP: [
      {
        id: 1,
        title: "Smart Stitchers",
        year: "2016/11",
        description: "BECAUDER BROOKLYN & SOUNTLY",
        category: "APP WEB",
        image: "/path-to-image1.jpg",
        details: "Full description of Smart Stitchers project..."
      }
    ],
    WEB: [
      {
        id: 3,
        title: "Mindful Unicorn",
        description: "University Project",
        features: ["Made by The Same Manufacturer As", "BMI Calculator"],
        category: "WEB",
        image: "/path-to-image3.jpg",
        details: "Full description of Mindful Unicorn project..."
      },
      {
        id: 4,
        title: "CEPI Pakistan",
        description: "China Collaboration",
        features: ["OFAOFA", "Main Chat"],
        category: "WEB",
        image: "/path-to-image4.jpg",
        details: "Full description of CEPI Pakistan project..."
      }
    ]
  };

  return (
    <section 
      id="portfolio" 
      className={`min-h-screen text-white ${
        isMobile ? 'px-4 py-8' : 'ml-64 p-6 md:p-12'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`font-bold mb-8 ${isMobile ? 'text-3xl' : 'text-4xl'}`}>PORTFOLIO</h2>
        
        {/* Tabs */}
        <div className={`flex ${isMobile ? 'justify-between' : 'justify-center'} border-b border-gray-700 mb-6 md:mb-8`}>
          {['ALL', 'APP', 'WEB'].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-6 py-2 md:py-3 font-medium text-sm md:text-base ${
                activeTab === tab 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {projects[activeTab].map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-40 sm:h-48 bg-gray-800">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-sm md:text-base font-bold">View Details</span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-blue-400 text-xs md:text-sm">{project.category}</span>
                  {project.year && <span className="text-gray-400 text-xs md:text-sm">{project.year}</span>}
                </div>
                <h3 className={`font-bold mb-1 ${isMobile ? 'text-lg' : 'text-xl'}`}>{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={isMobile ? 20 : 24} />
                </button>
                <div className="h-48 sm:h-64 bg-gray-800">
                  {selectedProject.image && (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <span className="text-blue-400 text-sm sm:text-base">{selectedProject.category}</span>
                      <h3 className={`font-bold mt-1 ${isMobile ? 'text-xl' : 'text-2xl'}`}>{selectedProject.title}</h3>
                      {selectedProject.year && <p className="text-gray-400 text-sm sm:text-base">{selectedProject.year}</p>}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{selectedProject.description}</p>
                  <div className="mb-4 sm:mb-6">
                    <h4 className={`font-bold mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>Details</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{selectedProject.details}</p>
                  </div>
                  {selectedProject.features && (
                    <div>
                      <h4 className={`font-bold mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>Features</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;