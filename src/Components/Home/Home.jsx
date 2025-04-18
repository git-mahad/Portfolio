import React, { useState, useEffect } from 'react';
import backImage from '../../assets/P8.jpeg';

const titles = ["Fresh Graduate", "Mern Developer", "CRM/Salesforce Developer"];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fullText = titles[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1));
      } else {
        setDisplayedText(prev => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  // Responsive text sizes
  const headingSize = windowSize.width < 640 ? 'text-4xl' :
    windowSize.width < 768 ? 'text-5xl' : 'text-6xl';
  const subheadingSize = windowSize.width < 640 ? 'text-xl' : 'text-2xl';

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backImage})`,
          zIndex: -1,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center px-4"
          style={{
            paddingTop: windowSize.width < 768 ? '4rem' : '0',
            paddingBottom: windowSize.width < 768 ? '4rem' : '0'
          }}
        >
          <div className="text-center">
            <h1 className={`${headingSize} font-bold mb-4 md:mb-6`}>
              Muhammad Mahad
            </h1>
            <div className={`${subheadingSize} font-light flex flex-wrap justify-center items-center h-12 md:h-16`}>
              <p className="whitespace-nowrap">I'm a&nbsp;</p>
              <div className="flex items-center">
                <p className="text-blue-400 font-medium min-h-[1.5rem]">
                  {displayedText}
                </p>
                <span className="ml-1 animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Optional CTA Button for Mobile */}
          {windowSize.width < 768 && (
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              Contact Me
            </button>
          )}
        </section>
      </div>
    </div>
  );
}