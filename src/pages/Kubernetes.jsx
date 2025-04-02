import React, { useEffect, useState } from "react";
import KubernetesFundamental from "../components/KubernetesFundamental";
import kubernetes from "../assets/kubernetes.jpg"; // Adjust the path as necessary

const Kubernetes = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
                bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
                bg-[position:120%_103%] sm:bg-[position:85%_130%] md:bg-[position:85%_110%]`}
      style={{
        backgroundImage: `url(${kubernetes})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Kubernetes</h1>

        <KubernetesFundamental />

        {/* Personal Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Home Lab Kubernetes Cluster</h2>
          <p className="text-gray-600">
            I’ve set up a home lab with a Kubernetes cluster running on Proxmox. The cluster consists of 9 nodes: 
            3 master nodes, 2 worker nodes, 3 Longhorn storage nodes, and 1 admin node. I deploy and manage various full-stack applications, such as a Twitter clone, using Docker containers. 
            For monitoring and alerting, I’ve integrated Prometheus and Grafana to track the health and performance of the cluster. Additionally, I’ve set up Discord notifications to send real-time alerts about system events.
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

        {/* Kubernetes Home Lab Setup */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Kubernetes Home Lab Setup</h2>
          <p className="text-gray-600">
            My home lab is built on a Proxmox environment with Kubernetes running on top of it. 
            Here’s the breakdown of the setup:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Proxmox Cluster:</strong> 3 physical machines running Proxmox to create a highly available Kubernetes cluster.</li>
            <li><strong>Nodes:</strong> 3 master nodes, 2 worker nodes, 3 Longhorn storage nodes for persistent storage, and 1 admin node to manage the infrastructure.</li>
            <li><strong>Full-Stack Applications:</strong> Running a variety of applications, including a Dockerized Twitter clone, which is deployed and scaled across the Kubernetes cluster.</li>
            <li><strong>Monitoring Stack:</strong> Integrated Prometheus for monitoring the cluster’s health, and Grafana to visualize the data. Real-time notifications are sent to Discord for critical alerts.</li>
          </ul>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Tools</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD with Kubernetes:</strong> Integrated with Jenkins and GitLab CI for automated deployments to Kubernetes clusters, ensuring rapid testing and delivery.</li>
            <li><strong>Helm:</strong> Used Helm to manage Kubernetes charts, allowing for simplified deployment of applications and services.</li>
            <li><strong>Monitoring with Prometheus & Grafana:</strong> Implemented monitoring using Prometheus to scrape metrics from Kubernetes and Grafana to visualize those metrics, ensuring system health and performance insights.</li>
          </ul>
        </section>

        {/* Proxmox + Kubernetes Integration */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Proxmox + Kubernetes Integration</h2>
          <p className="text-gray-600">
            I’ve integrated Kubernetes with Proxmox to create a scalable and resilient infrastructure. 
            The Proxmox virtual machines host the Kubernetes nodes, which are configured to work together seamlessly. 
            Longhorn is used to manage persistent storage, ensuring high availability and easy scaling of applications across the cluster.
          </p>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Namespace Segmentation:</strong> Use namespaces to isolate different environments (e.g., development, staging, production) within a Kubernetes cluster.</li>
            <li><strong>Resource Management:</strong> Define resource requests and limits for CPU and memory to prevent over-provisioning and ensure stability.</li>
            <li><strong>Health Checks:</strong> Implement readiness and liveness probes to detect failures early and enable automatic recovery.</li>
            <li><strong>Efficient Logging & Monitoring:</strong> Centralize logs using tools like Fluentd or Loki, and visualize performance metrics with Grafana.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8 pb-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://kubernetes.io/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Official Kubernetes Documentation</a></li>
            <li><a href="https://www.learnk8s.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Learn Kubernetes</a></li>
            <li><a href="https://www.udemy.com/course/learn-kubernetes/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Kubernetes Udemy Course</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Kubernetes;