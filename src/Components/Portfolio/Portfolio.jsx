import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const modalRef = useRef(null);

  // Project data
  const projects = {
    ALL: [
      {
        id: 1,
        title: "Smart Stitchers",
        year: "2016/11",
        description: "BECAUDER BROOKLYN & SOUNTLY",
        category: "APP WEB",
        image: "/api/placeholder/400/300",
        details: "Full description of Smart Stitchers project. This innovative application combines machine learning with crafting techniques to help amateur stitchers create professional-looking designs.",
        features: ["Pattern Recognition", "Real-time Guidance", "Community Sharing"]
      },
      {
        id: 2,
        title: "Text App",
        description: "Communication platform",
        features: ["TEXTS", "CALL", "PAGES"],
        category: "APP",
        image: "/api/placeholder/400/300",
        details: "Full description of Text App project. A comprehensive communication solution for businesses and individuals featuring secure messaging, voice calling, and collaborative workspaces."
      },
      {
        id: 3,
        title: "Mindful Unicorn",
        description: "University Project",
        features: ["Made by The Same Manufacturer As", "BMI Calculator"],
        category: "WEB",
        image: "/api/placeholder/400/300",
        details: "Full description of Mindful Unicorn project. A wellness application designed for university students to track mental health, physical activity, and academic performance."
      },
      {
        id: 4,
        title: "CEPI Pakistan",
        description: "China Collaboration",
        features: ["OFAOFA", "Main Chat"],
        category: "WEB",
        image: "/api/placeholder/400/300",
        details: "Full description of CEPI Pakistan project. A cross-border collaboration platform facilitating research exchange between Pakistani and Chinese educational institutions."
      }
    ],
    APP: [
      {
        id: 1,
        title: "Smart Stitchers",
        year: "2016/11",
        description: "BECAUDER BROOKLYN & SOUNTLY",
        category: "APP WEB",
        image: "/api/placeholder/400/300",
        details: "Full description of Smart Stitchers project. This innovative application combines machine learning with crafting techniques to help amateur stitchers create professional-looking designs.",
        features: ["Pattern Recognition", "Real-time Guidance", "Community Sharing"]
      },
      {
        id: 2,
        title: "Text App",
        description: "Communication platform",
        features: ["TEXTS", "CALL", "PAGES"],
        category: "APP",
        image: "/api/placeholder/400/300",
        details: "Full description of Text App project. A comprehensive communication solution for businesses and individuals featuring secure messaging, voice calling, and collaborative workspaces."
      }
    ],
    WEB: [
      {
        id: 3,
        title: "Mindful Unicorn",
        description: "University Project",
        features: ["Made by The Same Manufacturer As", "BMI Calculator"],
        category: "WEB",
        image: "/api/placeholder/400/300",
        details: "Full description of Mindful Unicorn project. A wellness application designed for university students to track mental health, physical activity, and academic performance."
      },
      {
        id: 4,
        title: "CEPI Pakistan",
        description: "China Collaboration",
        features: ["OFAOFA", "Main Chat"],
        category: "WEB",
        image: "/api/placeholder/400/300",
        details: "Full description of CEPI Pakistan project. A cross-border collaboration platform facilitating research exchange between Pakistani and Chinese educational institutions."
      }
    ]
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Calculate layout classes based on screen size
  const getLayoutClasses = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          container: 'px-4 py-12',
          title: 'text-3xl',
          grid: 'grid-cols-1 gap-4',
          tabs: 'justify-between text-sm',
        };
      case 'tablet':
        return {
          container: 'px-6 py-16 ml-0 lg:ml-72',
          title: 'text-4xl',
          grid: 'grid-cols-2 gap-5',
          tabs: 'justify-center text-base',
        };
      default: // desktop
        return {
          container: 'px-8 py-20 ml-72',
          title: 'text-5xl',
          grid: 'grid-cols-2 md:grid-cols-3 gap-6',
          tabs: 'justify-center text-lg',
        };
    }
  };

  const layout = getLayoutClasses();

  return (
    <section id="portfolio" className={`min-h-screen text-white ${layout.container}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`font-bold mb-8 ${layout.title}`}>
          PORTFOLIO
          <div className="h-1 w-12 bg-blue-500 mt-3"></div>
        </h2>
        
        {/* Tabs */}
        <div className={`flex ${layout.tabs} mb-8 border-b border-gray-700`}>
          {['ALL', 'APP', 'WEB'].map((tab) => (
            <button
              key={tab}
              className={`px-4 md:px-8 py-3 font-medium relative ${
                activeTab === tab 
                  ? 'text-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 h-1 bg-blue-400 w-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid ${layout.grid}`}>
          {projects[activeTab].map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 border border-gray-800"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-48 md:h-56 bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-blue-600 px-4 py-2 rounded-full flex items-center">
                    <span className="font-medium mr-1">View Details</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-blue-400 text-xs md:text-sm font-medium bg-blue-400 bg-opacity-10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  {project.year && <span className="text-gray-400 text-xs md:text-sm">{project.year}</span>}
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-3 md:p-6">
            <div 
              ref={modalRef}
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in"
            >
              <div className="relative">
                <div className="h-56 md:h-72 bg-gray-800">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <button 
                  className="absolute top-3 right-3 bg-gray-900 bg-opacity-70 p-2 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
                  onClick={closeModal}
                >
                  <X size={20} />
                </button>
                
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <span className="text-blue-400 text-sm md:text-base bg-blue-400 bg-opacity-10 px-2 py-1 rounded font-medium">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-bold text-xl md:text-2xl mt-2 mb-1">
                        {selectedProject.title}
                      </h3>
                      {selectedProject.year && (
                        <p className="text-gray-400 text-sm md:text-base">{selectedProject.year}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg md:text-xl mb-3">Project Details</h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      {selectedProject.details}
                    </p>
                  </div>
                  
                  {selectedProject.features && (
                    <div>
                      <h4 className="font-bold text-lg md:text-xl mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-center bg-gray-800 rounded-lg p-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition flex items-center">
                      View Live Project <ExternalLink size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Project navigation - could be added for desktop */}
        {screenSize === 'desktop' && isModalOpen && (
          <>
            <button className="fixed top-1/2 left-80 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-blue-600 transition-colors z-50">
              <ChevronLeft size={24} />
            </button>
            <button className="fixed top-1/2 right-6 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-blue-600 transition-colors z-50">
              <ChevronRight size={24} />
            </button>
          </>
        )}
        
        {/* Empty state - shown when no projects in category */}
        {projects[activeTab].length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-gray-400 text-center">
              <span className="block text-5xl mb-4">🏗️</span>
              <h3 className="text-xl font-bold mb-2">No Projects Yet</h3>
              <p>Projects for this category will appear here soon.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;