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
        bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_130%]`}
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
            I have used Terraform for **____ (describe your project, e.g., provisioning AWS infrastructure, automating multi-cloud deployments, managing Kubernetes clusters, etc.)**.
            This included **____ (technologies used: AWS, Azure, GCP, Kubernetes, Docker, etc.)**.
          </p>
          <p className="text-gray-600">
            One major challenge I solved was **____ (describe a problem: handling state files, managing dynamic resources, automating large-scale deployments, etc.)**.
            I addressed it by **____ (solution: using remote state with S3, Terraform modules, implementing CI/CD for Terraform automation, etc.)**.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Implementation (Projects)</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **____ (Project Name, e.g., "Automated Cloud Infrastructure with Terraform")**
            <strong>Description:</strong> **____ (How you used Terraform in this project)**
            <strong>Link:</strong> <a href="____ (GitHub or Live Demo URL)" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Automated infrastructure deployment using **____ (Jenkins, GitHub Actions, Terraform Cloud, etc.)**.</li>
            <li><strong>Cloud Infrastructure:</strong> Used Terraform to configure **____ (AWS, Azure, GCP, Kubernetes clusters, etc.)**.</li>
            <li><strong>State Management:</strong> Implemented **remote state storage (S3, Terraform Cloud, etc.)** to manage infrastructure consistency.</li>
            <li><strong>Security & Compliance:</strong> Used **____ (IAM roles, security groups, Terraform Sentinel, etc.)**.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Infrastructure Modularity:</strong> Used **Terraform modules** to keep configurations reusable and maintainable.</li>
            <li><strong>State Management:</strong> Ensured **secure and consistent state handling** using remote backends.</li>
            <li><strong>Optimizing Performance:</strong> Applied **resource dependencies** and `terraform plan` before applying changes.</li>
            <li><strong>Debugging:</strong> Used **`terraform fmt`, `terraform validate`, and `terraform apply -auto-approve`** for streamlined debugging.</li>
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