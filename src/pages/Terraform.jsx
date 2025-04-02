import React, { useEffect, useState } from "react";
import TerraformFundamental from "../components/TerraformFundamental";
import terraform from "../assets/terraform.jpg"; // Adjust the path as necessary  

const Terraform = () => {
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
        backgroundImage: `url(${terraform})`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Terraform</h1>

        {/* 🎓 Fundamental Concepts (Collapsible with Animation) */}
        <TerraformFundamental />

        {/* 🚀 Essential for Recruiters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Terraform</h2>
          <p className="text-gray-600">
            I have used Terraform in conjunction with GitOps for automating the deployment of infrastructure and services. 
            This includes managing Terraform configurations for network setup, instances, and services, all stored and version-controlled in Git repositories.
          </p>
          <p className="text-gray-600">
            The following GitHub repositories showcase my work:
            <ul className="list-disc pl-5 text-gray-600">
              <li><a href="https://github.com/JeanMichelBB/fem-eci-terraform-github.git" className="text-blue-600">fem-eci-terraform-github</a></li>
              <li><a href="https://github.com/JeanMichelBB/fem-eci-terraform-tfe.git" className="text-blue-600">fem-eci-terraform-tfe</a></li>
              <li><a href="https://github.com/JeanMichelBB/oci-terraform-network.git" className="text-blue-600">oci-terraform-network</a></li>
              <li><a href="https://github.com/JeanMichelBB/oci-product-service.git" className="text-blue-600">oci-product-service</a></li>
            </ul>
          </p>
          <p className="text-gray-600">
            Terraform is used to structure the projects from start to finish, automating the entire deployment process. 
            Additionally, I use Ansible for managing instances, ensuring proper configuration and automation.
          </p>
        </section>

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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Automated infrastructure deployment using <strong>GitHub Actions</strong> and <strong>Terraform Cloud</strong>.</li>
            <li><strong>Cloud Infrastructure:</strong> Used Terraform to configure <strong>AWS</strong>, <strong>GCP</strong>, and <strongstrong>Kubernetes clusters</strongstrong>.</li>
            <li><strong>State Management:</strong> Implemented <strong>remote state storage on Terraform Cloud</strong> to manage infrastructure consistency.</li>
            <li><strong>Security & Compliance:</strong> Used <strong>IAM roles</strong>, <strong>security groups</strong>, and <strong>Terraform Sentinel</strong>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Infrastructure Modularity:</strong> Used <strong>Terraform modules</strong> to keep configurations reusable and maintainable.</li>
            <li><strong>State Management:</strong> Ensured <strong>secure and consistent state handling</strong> using remote backends like Terraform Cloud.</li>
            <li><strong>Optimizing Performance:</strong> Applied <strong>resource dependencies</strong> and ran `terraform plan` before applying changes.</li>
            <li><strong>Debugging:</strong> Used <strong>`terraform fmt`, `terraform validate`, and `terraform apply -auto-approve`</strong> for streamlined debugging.</li>
          </ul>
        </section>

        <section className="mb-8 pb-30">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://developer.hashicorp.com/terraform/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600">Terraform Official Documentation</a></li>
            <li><a href="https://developer.hashicorp.com/terraform/tutorials" target="_blank" rel="noopener noreferrer" className="text-blue-600">Terraform Tutorials</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terraform;