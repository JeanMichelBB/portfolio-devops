import React, { useEffect, useState } from "react";
import NetworkingFundamental from "../components/NetworkingFundamental";
import networking from "../assets/networking.jpg"; // Adjust the path as necessary

const Networking = () => {
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
        backgroundImage: `url(${networking})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Networking</h1>

        <NetworkingFundamental />

        {/* Personal Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Networking</h2>
          <p className="text-gray-600">
            Networking has been a core component of my IT career. I possess extensive expertise in network architecture, having designed and implemented robust network infrastructures. My experience includes troubleshooting complex network issues in large enterprise environments, where I have effectively resolved connectivity problems and optimized performance. Additionally, I have a strong background in network security protocols, ensuring the integrity and confidentiality of data. I have also focused on optimizing network performance through careful configuration and monitoring, leading to improved efficiency and reliability.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> <strong>Home Lab Infrastructure</strong>
            <br />
            <strong>Description:</strong> Built a comprehensive home lab environment featuring:
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Synology NAS:</strong> Serves as a robust storage solution, configured for backups and media hosting, allowing for easy access to files across the network.</li>
              <li><strong>Proxmox Nodes:</strong> Facilitates Kubernetes deployment and virtualization, enabling efficient container management and resource allocation.</li>
              <li><strong>Managed Switch:</strong> Configured for VLAN management and traffic prioritization, ensuring efficient data flow and quality of service (QoS) across the network.</li>
              <li><strong>DDNS and VPN:</strong> Utilized for secure remote access, allowing for safe connections to the home lab environment from anywhere.</li>
            </ul>
          </p>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Tools</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Network Monitoring with Nagios:</strong> Integrated Nagios to monitor network health, track uptime, and alert for failures.</li>
            <li><strong>Firewall Configuration:</strong> Configured firewall rules to secure network boundaries and ensure safe communication between systems.</li>
            <li><strong>Wi-Fi Optimization:</strong> Utilized tools like Wireshark and Aircrack-ng to monitor wireless network performance and enhance signal strength.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Network Segmentation:</strong> Divide large networks into smaller, manageable segments to improve performance and security.</li>
            <li><strong>Use Strong Encryption:</strong> Always encrypt sensitive data in transit using protocols like HTTPS or VPNs to protect against interception.</li>
            <li><strong>Regular Updates:</strong> Keep network devices updated with the latest firmware and security patches to prevent vulnerabilities.</li>
            <li><strong>Troubleshooting Tools:</strong> Leverage network diagnostic tools like ping, traceroute, nslookup, and Wireshark for troubleshooting network issues.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8 pb-30">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://www.networkworld.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Network World</a></li>
            <li><a href="https://www.coursera.org/courses?query=networking" target="_blank" rel="noopener noreferrer" className="text-blue-600">Networking Courses - Coursera</a></li>
            <li><a href="https://www.udemy.com/course/the-complete-networking-fundamentals-course/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Complete Networking Fundamentals - Udemy</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Networking;