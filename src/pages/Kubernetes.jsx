import React, { useEffect, useState } from "react";
import KubernetesFundamental from "../components/KubernetesFundamental";
import kubernetes from "../assets/kubernetes.jpg"; // Adjust the path as necessary

const Kubernetes = () => {
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
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Kubernetes</h2>
          <p className="text-gray-600">
            I have worked with Kubernetes on several large-scale applications, particularly in cloud environments like AWS and Google Cloud.
            In one project, I deployed a microservices-based architecture using Kubernetes, which significantly simplified the scaling and management of services.
            By leveraging Kubernetes’ automatic scaling and health checks, I could ensure that the system remained highly available even under heavy loads.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **E-commerce Platform with Kubernetes**
            <strong>Description:</strong> Built a containerized e-commerce platform using Kubernetes, Docker, and Helm for continuous integration and deployment.
            <strong>Link:</strong> <a href="https://github.com/your-repo" className="text-blue-600">View on GitHub</a>
          </p>
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

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Namespace Segmentation:</strong> Use namespaces to isolate different environments (dev, staging, production) within a Kubernetes cluster.</li>
            <li><strong>Resource Requests & Limits:</strong> Always define resource requests and limits for CPU and memory to ensure efficient resource allocation.</li>
            <li><strong>Use Health Checks:</strong> Implement readiness and liveness probes to ensure pods are running smoothly and can be automatically restarted if necessary.</li>
            <li><strong>Use Labels & Annotations:</strong> Utilize labels and annotations for easy management, organization, and filtering of Kubernetes resources.</li>
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