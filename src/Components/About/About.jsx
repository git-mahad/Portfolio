import React, { useState, useEffect } from 'react';
import aboutImage from '../../assets/P6.jpg';

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
      <div className="text-3xl font-bold text-blue-400">
        {count}{showPlus && '+'}
      </div>
      <div className="text-sm mt-1">{text}</div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="ml-64 min-h-screen p-12 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg mb-12">
          <h2 className="text-4xl font-bold mb-8">ABOUT</h2>
          <p className="mb-6">
            Results-driven, customer-focused Software Engineer with 5+ years of experience in commercial application and software development.
            Highly articulate, analytical, and diligent, consistently delivering innovative solutions. Strong track record in prioritizing
            customer satisfaction and effectively communicating complex concepts. Believe in delivering quality solutions to win and maintain
            a trustworthy business relationship with clients.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <img
                src={aboutImage}
                alt="Muhammad Mahad"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <p className="flex">
                    <span className="font-semibold w-20">Name:</span>
                    <span>Muhammad Mahad</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-20">Site:</span>
                    <span>link</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-20">Phone:</span>
                    <span>+92 3051479956</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-20">City:</span>
                    <span>Lahore, Pakistan</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="flex">
                    <span className="font-semibold w-20">Age:</span>
                    <span>22</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-20">Degree:</span>
                    <span>BSCS</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-20">Email:</span>
                    <span>mahad.dev3@gmail.com</span>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-20">Skills:</span>
                    <span>MERN & CRM</span>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Results</h3>
                <p>
                  Full-stack developer, I have successfully contributed to a diverse range of projects spanning both national and
                  seed enterprises, operating on various scales. My capabilities extend to managing concurrent tasks efficiently.
                  I actively participated in our organization's recruitment drive and training department, demonstrating my time
                  to both growth and team dynamics.
                </p>
              </div>
            </div>
          </div>

          <div>
        <h3 className="text-2xl font-bold mb-4">Milestones</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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