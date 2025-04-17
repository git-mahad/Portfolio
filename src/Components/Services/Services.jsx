import React, { useState } from 'react';
import { Code, Database, Globe, Server, Bug, LayoutGrid, Cloud, ChevronRight } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "C & C++ Task",
      description: "Expert implementation of memory-efficient and performance-optimized solutions using C and C++.",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      details: "Specialized in developing high-performance applications, system utilities, and embedded systems using C and C++. I focus on memory optimization, efficient algorithms, and cross-platform compatibility to deliver robust solutions that meet your specific requirements.",
      features: ["Algorithm Optimization", "Memory Management", "System Programming", "Performance Tuning"]
    },
    {
      id: 2,
      title: "Database Design",
      description: "Structured database architecture that scales with your application needs.",
      icon: <Database className="w-10 h-10 text-green-400" />,
      details: "Comprehensive database design services that focus on data integrity, performance, and scalability. I create efficient schema designs, implement proper indexing strategies, and optimize query performance to ensure your data layer supports your application's growth.",
      features: ["Schema Design", "Query Optimization", "Data Modeling", "Migration Planning"]
    },
    {
      id: 3,
      title: "Static Website",
      description: "Fast-loading, responsive static websites with modern design principles.",
      icon: <Globe className="w-10 h-10 text-purple-400" />,
      details: "Development of lightning-fast static websites that deliver exceptional user experience across all devices. I leverage modern frameworks and best practices to create visually appealing, SEO-friendly sites with minimal maintenance requirements.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern UI/UX"]
    },
    {
      id: 4,
      title: "Backend Design (Node.js)",
      description: "Robust and scalable backend solutions powered by Node.js.",
      icon: <Server className="w-10 h-10 text-red-400" />,
      details: "End-to-end backend development using Node.js to create scalable, maintainable APIs and server applications. I implement efficient data processing, authentication systems, and third-party integrations while ensuring security and performance.",
      features: ["RESTful APIs", "Authentication Systems", "Microservices", "Real-time Applications"]
    },
    {
      id: 5,
      title: "Troubleshooting (MERN Project)",
      description: "Expert debugging and optimization for MERN stack applications.",
      icon: <Bug className="w-10 h-10 text-yellow-400" />,
      details: "Specialized diagnostic and troubleshooting services for MERN stack applications. I identify performance bottlenecks, resolve complex bugs, and implement architectural improvements to enhance application stability and user experience.",
      features: ["Performance Analysis", "Error Resolution", "Code Refactoring", "Architecture Review"]
    },
    {
      id: 6,
      title: "MERN Developer",
      description: "Full-stack development using MongoDB, Express, React, and Node.js.",
      icon: <LayoutGrid className="w-10 h-10 text-indigo-400" />,
      details: "Comprehensive MERN stack development services covering everything from database design to front-end implementation. I build scalable, modern web applications with clean code, effective state management, and optimized performance.",
      features: ["Full-stack Integration", "State Management", "Component Architecture", "API Design"]
    },
    {
      id: 7,
      title: "Salesforce",
      description: "Custom Salesforce implementations and integrations for business growth.",
      icon: <Cloud className="w-10 h-10 text-sky-400" />,
      details: "Expert Salesforce development and customization services to streamline your business processes. I create custom objects, automate workflows, develop Lightning components, and integrate Salesforce with external systems to maximize your ROI.",
      features: ["Custom Development", "Process Automation", "Integration Solutions", "User Training"]
    }
  ];

  return (
    <section id="services" className="ml-64 min-h-screen p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">SERVICES</h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setActiveService(service)}
            >
              <div className="p-6">
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gray-800 mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center">{service.description}</p>
                <div className="flex justify-center mt-4">
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="mr-1">View Details</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        {activeService && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setActiveService(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gray-800 mr-4">
                      {activeService.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{activeService.title}</h3>
                      <p className="text-blue-400">{activeService.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3">Overview</h4>
                    <p className="text-gray-300">{activeService.details}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {activeService.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button 
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors"
                      onClick={() => setActiveService(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;