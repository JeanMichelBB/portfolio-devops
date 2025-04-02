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
            bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_120%]`}
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
            I previously used <strong>AWS</strong>, but now I use <strong>OCI</strong> because of its free tier benefits. Through my experience, I have gained knowledge in setting up and managing <strong>VCNs (Virtual Cloud Networks), subnets, instances, volumes, security gateways, and network protocols</strong>. Using <strong>Terraform</strong>, I have automated the provisioning of these resources to ensure scalability and security.
          </p>
          <p className="text-gray-600">
            One of the challenges I faced was configuring <strong>ingress and egress rules</strong> for secure connectivity. To solve this, I implemented proper <strong>security gateway rules</strong> and <strong>OCI security lists</strong>, ensuring that only necessary traffic was allowed to and from my instances.
          </p>
        </section>

 {/* Real-World Projects */}
 <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>

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
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Integrated cloud resources with CI/CD tools like <strong>GitHub Actions</strong>, etc., for seamless deployments.</li>
            <li><strong>Microservices:</strong> Deployed microservices in cloud environments using <strong>Kubernetes</strong>, <strong>Docker Swarm</strong>, etc.</li>
            <li><strong>Database as a Service:</strong> Utilized managed database services like <strong>Amazon RDS</strong>, <strong>Azure SQL</strong>, etc., for scalable database solutions.</li>
            <li><strong>Container Management:</strong> Used <strong>Docker</strong> for container management and <strong>systemd</strong> for maintaining service uptime.</li>
            <li><strong>Automated Provisioning:</strong> Integrated <strong>Terraform</strong> for automated cloud provisioning.</li>
            <li><strong>Security Implementations:</strong> Implemented <strong>OCI security lists, network security groups, and IAM roles</strong> for secure deployments.</li>
            <li><strong>Domain Resolution:</strong> Ensured public accessibility via <strong>OCI Internet Gateways and Route Tables</strong>.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Cost Optimization:</strong> Used auto-scaling and reserved instances to reduce cloud costs.</li>
            <li><strong>Security:</strong> Applied cloud-native security practices like encryption, IAM policies, and VPC isolation.</li>
            <li><strong>Monitoring:</strong> Set up cloud monitoring tools such as <strong>CloudWatch</strong> (AWS), and <strong>Stackdriver</strong> to ensure uptime and reliability.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8 pb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer" className="text-blue-600">AWS Training and Certification</a></li>
            {/* oci */}
            <li><a href="https://learn.oracle.com/learning/subscription.html" target="_blank" rel="noopener noreferrer" className="text-blue-600">Oracle Cloud Learning</a></li>
          </ul>
        </section>
      </div>
    </div >
  );
};

export default Cloud;