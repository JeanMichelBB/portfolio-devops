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
            I have used Docker in **____ (describe your project, e.g., deploying a FastAPI backend, setting up a monitoring stack, containerizing a microservice architecture)**.
            This included **____ (technologies used: Nginx, Redis, PostgreSQL, Prometheus, etc.)**.
          </p>
          <p className="text-gray-600">
            One major challenge I solved was **____ (describe a problem: container networking, volume persistence, security hardening, etc.)**.
            I addressed it by **____ (solution: using multi-stage builds, optimizing Dockerfiles, creating a Docker Compose setup, etc.)**.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Implementation (Projects)</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **____ (Project Name, e.g., "Monitoring Stack with Docker & Prometheus")**
            <strong>Description:</strong> **____ (How you used Docker in this project)**
            <strong>Link:</strong> <a href="____ (GitHub or Live Demo URL)" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Automated deployments using **____ (Jenkins, GitHub Actions, GitLab CI, etc.)**.</li>
            <li><strong>Kubernetes:</strong> Deployed Docker containers in **____ (describe use case, e.g., microservices architecture, high availability setup)**.</li>
            <li><strong>Cloud Deployments:</strong> Used Docker on **____ (AWS ECS, Azure Container Instances, Google Cloud Run, etc.)**.</li>
            <li><strong>Monitoring:</strong> Integrated **____ (Prometheus, Grafana, ELK Stack, etc.)** to monitor containerized applications.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Reduce image size:</strong> Used Alpine Linux (`FROM node:alpine`) for smaller, optimized images.</li>
            <li><strong>Security:</strong> Implemented **____ (e.g., non-root users, secrets management, scanning images with Trivy)**.</li>
            <li><strong>Networking:</strong> Used Docker networks to isolate services and ensure better security.</li>
            <li><strong>Debugging:</strong> Troubleshot containers using `docker logs`, `docker exec -it bash`, and `docker inspect`.</li>
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