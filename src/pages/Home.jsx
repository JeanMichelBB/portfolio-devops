import React, { useState, useEffect } from 'react';
import LatestProject from '../components/LatestProject';
import SubjectsGrid from '../components/SubjectsGrid';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showLatestProject, setShowLatestProject] = useState(false);
  const [showSubjectsGrid, setShowSubjectsGrid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) { // Show <LatestProject />
        setShowLatestProject(true);
      } else {
        setShowLatestProject(false);
      }

      if (scrollY > 300) { // Show <SubjectsGrid /> later
        setShowSubjectsGrid(true);
      } else {
        setShowSubjectsGrid(false);
      }
    };
    
    setTimeout(() => setIsVisible(true), 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-center py-20">
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Home</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Welcome to my portfolio website. Here, you can learn more about me, my projects, and my experiences. Feel free to explore the site and reach out to me if you have any inquiries or collaboration opportunities. I would love to hear from you.
        <Link to="/about" className="text-blue-500"> More about me here</Link>.
      </p>
      </div>

      <div className="mt-10">
        {/* LatestProject - Appears at scrollY > 100 */}
        <div className={`transition-opacity duration-500 ${showLatestProject ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <LatestProject />
        </div>

        {/* SubjectsGrid - Appears at scrollY > 300 */}
        <div className={`transition-opacity duration-500 ${showSubjectsGrid ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <SubjectsGrid />
        </div>

        <div className="text-lg text-gray-700 mx-auto bg-gradient-to-b from-cyan-200 to-white border-b-10 border-r-10 border-l-10 border-white">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto p-3">
            I am a passionate developer with a keen interest in various technologies and services. My expertise spans across multiple domains, including cloud computing, DevOps, and web development. I enjoy learning new skills and applying them to real-world projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;