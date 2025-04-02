import React, { useEffect, useState } from "react";
import LinuxFundamental from "../components/LinuxFundamental";
import linux from "../assets/linux.jpg"; // Adjust the path as necessary

const Linux = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
                bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
                bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_115%]`}
      style={{
        backgroundImage: `url(${linux})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Linux</h1>

        <LinuxFundamental />

        {/* Linux Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Linux?</h2>
          <p className="text-gray-600">
            Linux is the backbone of modern infrastructure, powering everything from cloud servers to developer workstations.
            Whether managing an Ubuntu server over SSH, deploying apps on an OCI instance, orchestrating workloads with Kubernetes CLI,
            or automating tasks from a Mac terminal, Linux provides a reliable and flexible environment for real-world DevOps and
            development projects. It’s the ultimate entry point to any high-performance, scalable system. 🚀
          </p>
        </section>

        {/* Personal Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Linux</h2>
          <p className="text-gray-600">
            I've been using Linux for years, mainly as a development environment and for managing servers. From automating deployments
            and configuring servers on Ubuntu, Linux has been an essential part of my workflow. I particularly enjoy working with shell scripting
            and leveraging tools like Docker and Kubernetes for container management.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Linux Server SSH Management</h3>
            <p className="text-gray-700 mt-2">
              Managed and secured SSH access for Linux servers, implementing key-based authentication, firewall rules, and monitoring tools
              to enhance security and streamline remote management.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">SSH Configuration for Oracle Cloud</h3>
            <p className="text-gray-700 mt-2">
              Configured SSH access for virtual machines on Oracle Cloud Infrastructure (OCI), ensuring seamless connectivity
              and secure remote management for cloud-hosted applications.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Kubernetes Cluster Management</h3>
            <p className="text-gray-700 mt-2">
              Deployed and managed Kubernetes clusters, optimizing container orchestration, automating deployments,
              and ensuring high availability for cloud-native applications.
            </p>
          </div>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Tools</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Docker:</strong> Used to containerize applications and manage them on Linux systems for seamless deployment across environments.</li>
            <li><strong>Automation with Ansible:</strong> Automated server configuration and application deployment on multiple Linux machines.</li>
            <li><strong>CI/CD:</strong> Integrated Jenkins on Linux to automate testing, building, and deployment pipelines for various projects.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Use Shell Aliases:</strong> Define aliases for frequently used commands to improve productivity.</li>
            <li><strong>File System Structure:</strong> Follow the best practices for file system organization, like keeping config files in <code>/etc</code> and logs in <code>/var/log</code>.</li>
            <li><strong>Permissions & Security:</strong> Always check file permissions before running scripts or sharing files to ensure system security.</li>
            <li><strong>Monitoring:</strong> Leverage tools like <code>htop</code>, <code>journalctl</code>, and <code>netstat</code> to monitor system performance and troubleshoot issues.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8 pb-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Linux.org</a></li>
            <li><a href="https://www.tutorialspoint.com/unix/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600">Linux/Unix Tutorial</a></li>
            <li><a href="https://www.udemy.com/course/linux-for-beginners/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Linux for Beginners - Udemy</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Linux;