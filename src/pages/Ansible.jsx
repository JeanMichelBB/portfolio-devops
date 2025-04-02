import React, { useEffect, useState, useRef } from "react";
import AnsibleFundamental from "../components/AnsibleFundamental";
import ansible from "../assets/ansible.jpg"; // Adjust the path as necessary  

const Ansible = () => {
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
        backgroundImage: `url(${ansible})`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Ansible</h1>

        {/* 🎓 Fundamental Concepts (Collapsible with Animation) */}
        <AnsibleFundamental />

        {/* 🚀 Essential for Recruiters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Ansible</h2>
          <p className="text-gray-600">
            I use Ansible to manage an instance of OCI, install dependencies, and manage Dockerfiles for the deployment of my project BotWhy. 
          </p>
          <p className="text-gray-600">
            I also automate the creation of system files needed for my instance and integrate CI/CD using GitHub Actions to upload my project automatically.
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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Used GitHub Actions to automatically deploy and manage my BotWhy project on OCI.</li>
            <li><strong>Cloud Infrastructure:</strong> Managed an OCI instance using Ansible for provisioning and configuration.</li>
            <li><strong>Container Orchestration:</strong> Used Ansible to manage Dockerfiles and streamline deployments.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Optimizing Playbooks:</strong> Used <strong>loops and conditionals</strong> to avoid redundant tasks.</li>
            <li><strong>Security:</strong> Managed secrets using <strong>Ansible Vault</strong>.</li>
            <li><strong>Idempotency:</strong> Ensured playbooks are repeatable and only make necessary changes.</li>
            <li><strong>Debugging:</strong> Used `-vvvv` verbosity for detailed logs when troubleshooting.</li>
          </ul>
        </section>

        <section className="mb-8 pb-30">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://docs.ansible.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Ansible Official Documentation</a></li>
            <li><a href="https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html" target="_blank" rel="noopener noreferrer" className="text-blue-600">Best Practices for Ansible Playbooks</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Ansible;