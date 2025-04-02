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
            I have used Ansible in **____ (describe your project, e.g., provisioning servers, configuring databases, automating deployments)**.
            This included **____ (technologies used: Nginx, PostgreSQL, Docker, Kubernetes, etc.)**.
          </p>
          <p className="text-gray-600">
            One major challenge I solved was **____ (describe a problem: managing secrets, setting up Ansible vault, automating multi-server deployments, etc.)**.
            I addressed it by **____ (solution: using dynamic inventories, modular roles, optimizing playbooks, etc.)**.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Implementation (Projects)</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **____ (Project Name, e.g., "Automated Server Provisioning with Ansible")**
            <strong>Description:</strong> **____ (How you used Ansible in this project)**
            <strong>Link:</strong> <a href="____ (GitHub or Live Demo URL)" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>CI/CD Pipelines:</strong> Automated infrastructure deployment using **____ (Jenkins, GitHub Actions, etc.)**.</li>
            <li><strong>Cloud Infrastructure:</strong> Used Ansible to configure **____ (AWS EC2, Azure VMs, GCP Compute Engine, etc.)**.</li>
            <li><strong>Container Orchestration:</strong> Deployed Kubernetes clusters with **____ (Kubeadm, Helm, etc.)**.</li>
            <li><strong>Security & Compliance:</strong> Used **____ (Ansible Vault, automated security hardening, etc.)**.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Optimizing Playbooks:</strong> Used **loops and conditionals** to avoid redundant tasks.</li>
            <li><strong>Security:</strong> Managed secrets using **Ansible Vault**.</li>
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