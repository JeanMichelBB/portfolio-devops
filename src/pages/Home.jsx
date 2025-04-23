import React, { useState, useEffect } from 'react';
import LatestProject from '../components/LatestProject';
import SubjectsGrid from '../components/SubjectsGrid';
import Carousel from '../components/Carousel';
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
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide">
          Welcome to My DevOps Playground
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto p-4 leading-relaxed">
          Hi, I’m <span className="font-semibold text-gray-900">Jean-Michel Bérubé</span>, a DevOps engineer passionate about automation, cloud infrastructure, and system optimization.
          Explore my knowledge, projects, and hands-on experience in <span className="font-medium text-gray-900">Linux, Docker, Kubernetes</span>, and more
          <Link to="/about" className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors">
            . More about me here
          </Link>.
          <br />
          <strong>Look for my latest projects below. ↓</strong>
          <br />
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
          <Carousel />
        </div>
        <div className="text-lg text-gray-700 mx-auto bg-gradient-to-b from-cyan-200 to-white border-b-10 border-r-10 border-l-10 border-white pt-10 px-6 sm:px-12 md:px-24">
          <p className="mt-4 text-lg sm:text-xl md:text-lg text-gray-800 leading-relaxed">
            My journey in technology is driven by a passion for <strong>efficiency, scalability, and problem-solving</strong>.
            I believe in <strong>leveraging automation and cloud-native solutions</strong> to streamline workflows and optimize system performance.
            Staying up to date with emerging technologies is a key part of my approach, ensuring I bring <strong>innovative and reliable solutions</strong> to every challenge.
          </p>
          <p className="mt-4 text-lg sm:text-xl md:text-lg text-gray-800 leading-relaxed">
            Beyond my technical expertise, I thrive on <strong>collaboration, mentorship, and continuous learning</strong>.
            Whether it's <strong>designing robust infrastructure, implementing security best practices, or fine-tuning deployments</strong>,
            I strive to build systems that are <strong>resilient, scalable, and future-proof</strong>.
          </p>
          <p className="mt-4 text-lg sm:text-xl md:text-lg text-gray-800 leading-relaxed">
            Explore my work and see what I’ve built
            <Link to="/projects" className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors">
              . Check out my projects.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;