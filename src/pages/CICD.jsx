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
            bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_130%]`}
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
            I have set up **CI/CD pipelines** for **____ (describe your project, e.g., automating deployment for a web app)**.
            This involved using **____ (technologies: GitHub Actions, Jenkins, GitLab CI, CircleCI)** to automate testing and deployment workflows.
          </p>
          <p className="text-gray-600">
            A major challenge I encountered was **____ (describe a problem: slow build times, deployment failures, etc.)**.
            I resolved it by **____ (solution: optimizing pipeline steps, parallelizing tests, introducing caching, etc.)**.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Implementation (Projects)</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **____ (Project Name, e.g., "Automated CI/CD for Web App")**
            <strong>Description:</strong> **____ (How you used CI/CD in this project)**
            <strong>Link:</strong> <a href="____ (GitHub or Live Demo URL)" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Version Control:</strong> Used Git and GitHub/GitLab for source control and collaboration.</li>
            <li><strong>Docker:</strong> Integrated Docker for containerization in the CI/CD pipeline.</li>
            <li><strong>Cloud Deployments:</strong> Deployed applications to **____ (AWS, Azure, Google Cloud, etc.)** via automated CI/CD processes.</li>
            <li><strong>Monitoring:</strong> Integrated **____ (Prometheus, Grafana, etc.)** to monitor CI/CD pipelines and application performance.</li>
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