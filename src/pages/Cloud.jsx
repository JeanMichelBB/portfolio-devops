import React, { useEffect, useState } from "react";
import CloudFundamental from "../components/CloudFundamental";
import cloud from "../assets/cloud.jpg";
const Cloud = () => {
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
        backgroundImage: `url(${cloud})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Cloud Computing</h1>

        <CloudFundamental />

        {/* Essential for Recruiters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Cloud Computing</h2>
          <p className="text-gray-600">
            I have used cloud platforms such as **AWS** and **Azure** in **____ (describe your project, e.g., deploying a scalable web application, setting up a serverless architecture, etc.)**.
            This included working with **____ (technologies: EC2, Lambda, S3, Kubernetes, etc.)**.
          </p>
          <p className="text-gray-600">
            One of the challenges I faced was **____ (describe the challenge: network configuration, security, cost optimization, etc.)**.
            To solve it, I **____ (solution: implemented auto-scaling, used cloud-native security practices, leveraged cost-saving features, etc.)**.
          </p>
        </section>

        {/* Real-World Implementation (Projects) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **____ (Project Name, e.g., "Multi-Cloud Application Deployment")**
            <strong>Description:</strong> **____ (How you utilized cloud computing in the project)**
            <strong>Link:</strong> <a href="____ (GitHub or Live Demo URL)" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Integrated cloud resources with CI/CD tools like **GitHub Actions**, **Jenkins**, etc., for seamless deployments.</li>
            <li><strong>Microservices:</strong> Deployed microservices in cloud environments using **Kubernetes**, **Docker Swarm**, etc.</li>
            <li><strong>Database as a Service:</strong> Utilized managed database services like **Amazon RDS**, **Azure SQL**, etc., for scalable database solutions.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Cost Optimization:</strong> Used auto-scaling and reserved instances to reduce cloud costs.</li>
            <li><strong>Security:</strong> Applied cloud-native security practices like encryption, IAM policies, and VPC isolation.</li>
            <li><strong>Monitoring:</strong> Set up cloud monitoring tools such as **CloudWatch** (AWS), **Azure Monitor**, and **Stackdriver** to ensure uptime and reliability.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8 pb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer" className="text-blue-600">AWS Training and Certification</a></li>
            <li><a href="https://learn.microsoft.com/en-us/training/azure/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Azure Learning Path</a></li>
            <li><a href="https://cloud.google.com/training" target="_blank" rel="noopener noreferrer" className="text-blue-600">Google Cloud Training</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Cloud;