import React, { useEffect, useState } from "react";
import DockerFundamental from "../components/DockerFundamental";
import docker from "../assets/docker.jpg";

const Docker = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
                bg-[length:250px_180px] sm:bg-[length:300px_160px] md:bg-[length:400px_270px] lg:bg-[length:500px_360px]
                bg-[position:120%_103%] sm:bg-[position:85%_130%] md:bg-[position:85%_110%]`}
      style={{
        backgroundImage: `url(${docker})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Docker</h1>

        <DockerFundamental />

        {/*  Essential for Recruiters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2"> My Experience with Docker</h2>
          <p className="text-gray-600">
            I have used Docker to containerize and deploy multiple projects, including FastAPI-based applications, monitoring stacks, and web applications. Technologies used include Nginx, Redis, PostgreSQL, Prometheus, and Grafana.
          </p>
          <p className="text-gray-600">
            One major challenge I solved was ensuring efficient container networking between microservices. I addressed it by using Docker networks, defining custom bridge networks, and optimizing the Docker Compose configuration.
          </p>
        </section>

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
            <li><strong>CI/CD Pipelines:</strong> Automated deployments using GitHub Actions.</li>
            <li><strong>Kubernetes:</strong> Deployed Docker containers for microservices architecture, ensuring high availability and scalability.</li>
            <li><strong>Cloud Deployments:</strong> Used Docker on OCI Compute instances and AWS ECS for hosting services.</li>
            <li><strong>Monitoring:</strong> Integrated Prometheus and Grafana to track system health and logs of Dockerized applications.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Reduce image size:</strong> Used Alpine Linux (`FROM node:alpine`) for smaller, optimized images.</li>
            <li><strong>Security:</strong> Implemented non-root users, secrets management, and scanned images with Trivy for vulnerabilities.</li>
            <li><strong>Networking:</strong> Used Docker networks to isolate services and ensure better security.</li>
            <li><strong>Logging & Debugging:</strong> Used centralized logging with Loki and Fluentd, in addition to `docker logs`, `docker exec`, and `docker inspect`.</li>
            <li><strong>Performance Optimization:</strong> Used multi-stage builds, optimized `Dockerfile` configurations, and leveraged caching.</li>
          </ul>
        </section>

        <section className="mb-8 pb-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Docker Official Documentation</a></li>
            <li><a href="https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Best Practices for Dockerfiles</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Docker;