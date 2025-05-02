import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Download } from 'lucide-react';

export default function Resume() {
  const [screenSize, setScreenSize] = useState('desktop');
  const [activeTab, setActiveTab] = useState('experience');

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

  // Calculate layout classes based on screen size
  const getLayoutClasses = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          container: 'px-4 py-12',
          title: 'text-3xl',
          sectionTitle: 'text-xl',
          itemTitle: 'text-lg',
          itemFlex: 'flex-col gap-2',
        };
      case 'tablet':
        return {
          container: 'px-6 py-16 ml-0 lg:ml-72',
          title: 'text-4xl',
          sectionTitle: 'text-2xl',
          itemTitle: 'text-xl',
          itemFlex: 'justify-between items-start',
        };
      default: // desktop
        return {
          container: 'px-8 py-20 ml-72',
          title: 'text-5xl',
          sectionTitle: 'text-2xl',
          itemTitle: 'text-xl',
          itemFlex: 'justify-between items-start',
        };
    }
  };

  const layout = getLayoutClasses();

  // Resume Data
  const resumeData = {
    education: [
      {
        degree: "BACHELOR OF COMPUTER SCIENCE",
        institution: "UET Lahore, Pakistan",
        period: "11/2021 - 05/2025",
        description: "Focused on software engineering, database systems, and web development, with coursework in algorithms, data structures, and full-stack development.",
        achievements: [
          "Dean's List (Fall 2022, Spring 2023)",
          "Undergraduate Research Assistant - Web Technologies Lab",
          "Winner, Campus Hackathon 2023"
        ]
      },
      {
        degree: "HIGH SCHOOL DIPLOMA",
        institution: "City College, Lahore",
        period: "05/2019 - 04/2021",
        description: "Graduated with distinction, specializing in Computer Science and Mathematics.",
        achievements: [
          "Valedictorian",
          "President of Computer Science Club"
        ]
      }
    ],
    experience: [
      {
        title: "Software Engineer | Intern",
        company: "New Frontier Lab",
        location: "Lahore, Pakistan",
        type: "Full Time | Onsite",
        period: "06/2024 - 09/2024",
        description: "Contributed to development of enterprise-level web applications and notification systems.",
        responsibilities: [
          "Designed and implemented a real-time notification system using WebSockets",
          "Developed responsive user interfaces using React and Tailwind CSS",
          "Collaborated with cross-functional teams to implement new features",
          "Participated in code reviews and testing procedures"
        ]
      },
      {
        title: "Freelancer",
        company: "Fiverr.com",
        location: "Remote",
        type: "Full Time | Remote",
        period: "09/2024 - Present",
        description: "Providing end-to-end web development services as a Full Stack Developer for clients worldwide.",
        responsibilities: [
          "Full-Stack Development: Delivering comprehensive web solutions including frontend development (HTML, CSS, JavaScript) and backend implementation (Node.js, Express) for diverse client projects.",
          "Database Expertise: Designing and optimizing database architectures, ensuring efficient data storage and retrieval for application requirements.",
          "Client Solutions: Developing customized web applications tailored to specific business needs, from concept through deployment.",
          "Technical Implementation: Building responsive interfaces and robust server-side functionality to create seamless user experiences.",
          "Project Delivery: Ensuring timely completion of development milestones while maintaining code quality and performance standards."
        ]
      }
    ],
    skills: [
      {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "SQL", "Firebase", "REST APIs"]
      },
      {
        category: "Tools & Technologies",
        items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify", "Heroku"]
      },
      {
        category: "Soft Skills",
        items: ["Project Management", "Team Collaboration", "Communication", "Problem Solving", "Time Management"]
      }
    ],
    certifications: [
      {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2023"
      },
      {
        title: "React - The Complete Guide",
        issuer: "Coursera",
        date: "2022"
      },
      {
        title: "MongoDB for JavaScript Developers",
        issuer: "MongoDB University",
        date: "2023"
      }
    ]
  };

  const renderEducation = () => (
    <div className="space-y-6">
      {resumeData.education.map((edu, index) => (
        <div key={index} className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className={`flex ${layout.itemFlex} mb-3`}>
            <div>
              <h4 className={`${layout.itemTitle} font-semibold`}>{edu.degree}</h4>
              <div className="flex items-center text-blue-400 text-sm md:text-base mt-1">
                <GraduationCap size={16} className="mr-2" />
                {edu.institution}
              </div>
            </div>
            <span className={`bg-blue-600 text-white px-3 py-1 rounded text-xs md:text-sm flex items-center ${
              screenSize === 'mobile' ? 'self-start mt-2' : ''
            }`}>
              <Calendar size={14} className="mr-1" />
              {edu.period}
            </span>
          </div>
          <p className="text-sm md:text-base mb-4 text-gray-300">
            {edu.description}
          </p>
          {edu.achievements && (
            <div className="mt-3">
              <h5 className="text-sm font-semibold text-gray-200 mb-2">Achievements:</h5>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-gray-300">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className={`flex ${layout.itemFlex} mb-3`}>
            <div>
              <h4 className={`${layout.itemTitle} font-semibold`}>{exp.title}</h4>
              <div className="flex items-center text-blue-400 text-sm md:text-base mt-1">
                <Briefcase size={16} className="mr-2" />
                {exp.company}
              </div>
              <div className="flex items-center text-gray-400 text-xs md:text-sm mt-1">
                <MapPin size={14} className="mr-2" />
                {exp.location} • {exp.type}
              </div>
            </div>
            <span className={`bg-blue-600 text-white px-3 py-1 rounded text-xs md:text-sm flex items-center ${
              screenSize === 'mobile' ? 'self-start mt-2' : ''
            }`}>
              <Calendar size={14} className="mr-1" />
              {exp.period}
            </span>
          </div>
          <p className="text-sm md:text-base mb-4 text-gray-300">
            {exp.description}
          </p>
          <div className="mt-3">
            <h5 className="text-sm font-semibold text-gray-200 mb-2">Responsibilities:</h5>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-300">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resumeData.skills.map((skillGroup, index) => (
        <div key={index} className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">{skillGroup.category}</h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, i) => (
              <span key={i} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
      
      {/* Certifications */}
      <div className="md:col-span-2 bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700 mt-3">
        <h4 className="text-lg font-semibold mb-4 text-blue-400">Certifications</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {resumeData.certifications.map((cert, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded-lg flex items-start">
              <Award size={18} className="text-blue-400 mr-3 mt-1" />
              <div>
                <h5 className="font-medium">{cert.title}</h5>
                <p className="text-sm text-gray-300">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="resume" 
      className={`min-h-screen text-white transition-all duration-300 ${layout.container}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={`font-bold ${layout.title} mb-2`}>
              RESUME
              <div className="h-1 w-12 bg-blue-500 mt-3"></div>
            </h2>
            <p className="text-gray-400 mb-6 md:mb-0">My academic and professional journey</p>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center self-start transition-colors">
            <Download size={18} className="mr-2" />
            Download CV
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700 mb-8">
          <div className="flex space-x-1 md:space-x-4">
            <button
              className={`py-3 px-4 md:px-6 border-b-2 transition-colors ${
                activeTab === 'experience' 
                  ? 'border-blue-500 text-blue-400' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              <span className="flex items-center">
                <Briefcase size={18} className="mr-2" />
                Experience
              </span>
            </button>
            <button
              className={`py-3 px-4 md:px-6 border-b-2 transition-colors ${
                activeTab === 'education' 
                  ? 'border-blue-500 text-blue-400' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('education')}
            >
              <span className="flex items-center">
                <GraduationCap size={18} className="mr-2" />
                Education
              </span>
            </button>
            <button
              className={`py-3 px-4 md:px-6 border-b-2 transition-colors ${
                activeTab === 'skills' 
                  ? 'border-blue-500 text-blue-400' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('skills')}
            >
              <span className="flex items-center">
                <Award size={18} className="mr-2" />
                Skills
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg">
          {activeTab === 'experience' && renderExperience()}
          {activeTab === 'education' && renderEducation()}
          {activeTab === 'skills' && renderSkills()}
        </div>
      </div>
    </section>
  );
}