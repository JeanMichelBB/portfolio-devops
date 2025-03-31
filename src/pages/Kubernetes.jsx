import React, { useEffect, useState } from "react";

const Kubernetes = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Kubernetes</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Container Orchestration</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kubernetes is the industry standard for automating deployment, scaling, and management of containerized applications. It simplifies infrastructure management and enhances scalability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cluster Management</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience in setting up and managing Kubernetes clusters, ensuring efficient resource allocation, high availability, and security best practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Deployments & Scaling</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Familiar with managing Deployments, StatefulSets, and DaemonSets, as well as implementing auto-scaling strategies for workload optimization.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Monitoring & Troubleshooting</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience integrating monitoring tools like Prometheus and Grafana to track cluster performance, diagnose issues, and optimize resource usage.
        </p>
      </section>
    </div>
  );
};

export default Kubernetes;