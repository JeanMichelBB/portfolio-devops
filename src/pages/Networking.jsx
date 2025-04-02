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
                    bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_130%]`}
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
            Networking has been a core component of my IT career. From setting up local area networks (LANs) for small businesses to troubleshooting network issues in large enterprise environments, I've gained hands-on experience in configuring routers, switches, firewalls, and VPNs. I also have experience with network security protocols and optimizing network performance.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **Small Office Network Setup**
            <strong>Description:</strong> Designed and implemented a network infrastructure for a small office, including wired and wireless networking, VPN setup, and secure file sharing.
            <strong>Link:</strong> <a href="https://github.com/your-repo" className="text-blue-600">View on GitHub</a>
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