import React, { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">About Me</h1>

      <p className="text-lg text-gray-700 pb-6">
        Welcome to my portfolio! I'm a passionate software developer with a love for creating impactful applications that solve real-world problems.
      </p>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Background</h2>
        <p className="text-lg text-gray-700 ">
          With a background in both programming and management, I bring a unique combination of technical and leadership skills. I have worked in various industries, including IT, healthcare, and retail, helping organizations streamline their processes through custom software solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Skills</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 ">
          <li>Full-Stack Development (React, Node.js, Python, etc.)</li>
          <li>Docker and Containerization</li>
          <li>Cloud Computing (AWS, Azure)</li>
          <li>Infrastructure as Code (Terraform, Kubernetes)</li>
          <li>Database Management (SQL, MongoDB)</li>
          <li>DevOps and CI/CD</li>
          <li>AI and Machine Learning</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Interests</h2>
        <p className="text-lg text-gray-700 ">
          In addition to my work, I enjoy learning about emerging technologies, contributing to open-source projects, and exploring how artificial intelligence can drive innovation. When I'm not coding, I enjoy photography, short films, and hiking.
        </p>
      </section>

    </div>
  );
};

export default About;