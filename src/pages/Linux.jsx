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
                bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_130%]`}
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

        {/* Personal Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Linux</h2>
          <p className="text-gray-600">
            I've been using Linux for years, mainly as a development environment and for managing servers. From automating deployments on Ubuntu to configuring servers with CentOS, Linux has been an essential part of my workflow. I particularly enjoy working with shell scripting and leveraging tools like Docker and Kubernetes for container management.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **Automated Backup System with Linux Shell**
            <strong>Description:</strong> Created an automated backup system for critical data using shell scripts, cron jobs, and remote server synchronization via SSH.
            <strong>Link:</strong> <a href="https://github.com/your-repo" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Tools</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Docker:</strong> Used to containerize applications and manage them on Linux systems for seamless deployment across environments.</li>
            <li><strong>Automation with Ansible:</strong> Automated server configuration and application deployment on multiple Linux machines.</li>
            <li><strong>CI/CD with Jenkins:</strong> Integrated Jenkins on Linux to automate testing, building, and deployment pipelines for various projects.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Use Shell Aliases:</strong> Define aliases for frequently used commands to improve productivity.</li>
            <li><strong>File System Structure:</strong> Follow the best practices for file system organization, like keeping config files in /etc and logs in /var/log.</li>
            <li><strong>Permissions & Security:</strong> Always check file permissions before running scripts or sharing files to ensure system security.</li>
            <li><strong>Monitoring:</strong> Leverage tools like `htop`, `journalctl`, and `netstat` to monitor system performance and troubleshoot issues.</li>
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