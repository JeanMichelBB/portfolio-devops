import React, { useEffect, useState } from "react";

const Ansible = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Ansible</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is Ansible?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ansible is an open-source automation platform that simplifies IT tasks such as configuration management, application deployment, and task automation. It allows system administrators and developers to define and automate the configuration of systems, services, and applications across a wide range of environments, ensuring consistency and efficiency in infrastructure management.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Features of Ansible</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Simple and Easy to Use:</strong> Ansible uses YAML syntax, which is easy to read and write, making automation accessible even to non-technical users.</li>
          <li><strong>Agentless:</strong> Ansible doesn't require agents to be installed on remote machines. It communicates over SSH or WinRM to manage systems.</li>
          <li><strong>Idempotency:</strong> Ansible ensures that the desired state of a system is achieved, regardless of how many times the same playbook is executed.</li>
          <li><strong>Scalability:</strong> Ansible can scale from managing a few servers to managing thousands of systems with minimal overhead.</li>
          <li><strong>Extensive Modules:</strong> Ansible comes with a rich set of modules to automate tasks ranging from package management to cloud provisioning and more.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">How Ansible Works</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ansible operates on the concept of "playbooks" — YAML files that define a series of tasks to be executed on a set of remote hosts. The process of using Ansible can be summarized as follows:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Define the Inventory:</strong> The inventory file lists the hosts or groups of hosts that Ansible will manage.</li>
          <li><strong>Create Playbooks:</strong> Playbooks define the tasks to be executed on the managed hosts. Tasks are written in YAML and use Ansible modules.</li>
          <li><strong>Execute the Playbook:</strong> Ansible connects to the managed hosts over SSH (or WinRM for Windows), executes the tasks, and ensures that the desired state is achieved.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Use Cases of Ansible</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Configuration Management:</strong> Automating the configuration of servers, software packages, and services to ensure consistency.</li>
          <li><strong>Application Deployment:</strong> Streamlining the process of deploying applications to multiple servers, reducing manual intervention.</li>
          <li><strong>Infrastructure as Code (IaC):</strong> Ansible allows you to treat your infrastructure as code, enabling version control and easy reproducibility.</li>
          <li><strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> Ansible can be used to automate the entire CI/CD pipeline, from code compilation to deployment.</li>
          <li><strong>Cloud Provisioning:</strong> Automating the provisioning and management of cloud resources on platforms like AWS, Azure, and Google Cloud.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Getting Started with Ansible</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To get started with Ansible, you'll need to install it on your control machine (the machine from which you'll run your playbooks). Ansible can be installed via package managers like apt, yum, or pip, or by using the official installation instructions. After installation, you'll need to set up an inventory file and create your first playbook to automate tasks.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Step 1:</strong> Install Ansible using the package manager or via pip.</li>
          <li><strong>Step 2:</strong> Create an inventory file listing the hosts you want to manage.</li>
          <li><strong>Step 3:</strong> Write your first playbook to automate a simple task, such as installing a package.</li>
          <li><strong>Step 4:</strong> Run the playbook with the "ansible-playbook" command and see the results.</li>
        </ul>
      </section>
    </div>
  );
};

export default Ansible;