import React, { useEffect, useState } from "react";
import CICDFundamental from "../components/CICDFundamental";
import cicd from "../assets/cicd.jpg"; // Adjust the path as necessary

const CICD = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
            bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
            bg-[position:120%_103%] sm:bg-[position:85%_130%] md:bg-[position:85%_110%]`}
      style={{
        backgroundImage: `url(${cicd})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">CI/CD</h1>

        {/* Fundamental Concepts (Collapsible with Animation) */}
        <CICDFundamental />

        {/*  Essential for Recruiters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with CI/CD</h2>
          <p className="text-gray-600">
            I have set up <strong>CI/CD pipelines</strong> for automating deployment and testing workflows using <strong>GitHub Actions</strong>. This ensures that before deploying any changes to the production environment, all tests are automatically run to verify the integrity of the code.
          </p>
          <p className="text-gray-600">
            A major challenge I encountered was <strong>slow build times</strong> during the testing phase. I resolved it by optimizing the pipeline steps, <strong>parallelizing tests</strong>, and introducing <strong>caching</strong> to reduce redundant tasks.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Twitter Clone</h3>
            <p className="text-gray-700 mt-2">
              A Twitter clone built with React, FastAPI, and MySQL. It features user authentication, tweet posting, and a responsive design.
              The backend is powered by FastAPI, and MySQL ensures data persistence and reliability.
            </p>
            <a href="https://github.com/JeanMichelBB/twitterclone" className="text-blue-600 font-semibold mt-2 inline-block">
              View on GitHub →
            </a>
            <a href="https://twitterclone.sacenpapier.org" className="text-blue-600 font-semibold ml-4 inline-block">
              Live Demo →
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">BotWhy</h3>
            <p className="text-gray-700 mt-2">
              A chatbot integrating OpenAI’s GPT-4o Mini and FastAPI. It provides an interactive experience where users can ask questions
              and receive AI-generated responses in real time.
            </p>
            <a href="https://github.com/JeanMichelBB/BotWhy" className="text-blue-600 font-semibold mt-2 inline-block">
              View on GitHub →
            </a>
            <a href="https://botwhy.sacenpapier.org/" className="text-blue-600 font-semibold ml-4 inline-block">
              Live Demo →
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Apercu</h3>
            <p className="text-gray-700 mt-2">
              A web application showcasing my services and work. It serves as a portfolio, highlighting my skills and projects in an easy-to-navigate
              and visually appealing way.
            </p>
            <a href="https://github.com/JeanMichelBB/apercu" className="text-blue-600 font-semibold mt-2 inline-block">
              View on GitHub →
            </a>
            <a href="https://apercu.sacenpapier.org/" className="text-blue-600 font-semibold ml-4 inline-block">
              Live Demo →
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Version Control:</strong> Used Git and GitHub for source control and collaboration.</li>
            <li><strong>Docker:</strong> Integrated Docker for containerization in the CI/CD pipeline.</li>
            <li><strong>Cloud Deployments:</strong> Deployed applications to <strong>OCI</strong> via automated CI/CD processes.</li>
            <li><strong>Monitoring:</strong> Integrated <strong>Grafana</strong> to monitor CI/CD pipelines and application performance.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Pipeline Optimization:</strong> Reduced build times by caching dependencies and using parallel jobs.</li>
            <li><strong>Error Handling:</strong> Added retry logic and alerts for pipeline failures.</li>
            <li><strong>Security:</strong> Implemented secret management and vulnerability scanning in CI/CD pipelines.</li>
          </ul>
        </section>

        <section className="mb-8 pb-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://www.atlassian.com/continuous-delivery" target="_blank" rel="noopener noreferrer" className="text-blue-600">CI/CD Overview (Atlassian)</a></li>
            <li><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" className="text-blue-600">GitHub Actions Documentation</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CICD;