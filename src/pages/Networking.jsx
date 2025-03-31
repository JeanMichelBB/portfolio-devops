import React, { useEffect, useState } from "react";

const Networking = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Networking</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is Networking?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Networking is the practice of connecting computers, devices, and systems to share resources and data. It enables communication between devices over local area networks (LANs), wide area networks (WANs), and even the internet. Understanding networking principles is crucial for managing infrastructures and ensuring efficient, secure, and reliable communication between systems.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Types of Networks</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Local Area Network (LAN):</strong> A network that connects computers within a limited area, such as a home, office, or campus.</li>
          <li><strong>Wide Area Network (WAN):</strong> A network that covers a large geographical area, such as connecting offices in different cities or countries.</li>
          <li><strong>Virtual Private Network (VPN):</strong> A private network that uses encryption and tunneling protocols to provide secure communication over the internet.</li>
          <li><strong>Cloud Network:</strong> A network infrastructure provided and maintained by cloud providers, offering services like storage, computation, and data management remotely.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Networking Components</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Routers:</strong> Devices that route data packets between different networks and manage traffic between them.</li>
          <li><strong>Switches:</strong> Devices that manage data flow between devices within the same network, ensuring efficient data transfer.</li>
          <li><strong>Firewalls:</strong> Security devices that monitor and control incoming and outgoing network traffic, providing protection against malicious threats.</li>
          <li><strong>Cables and Connectors:</strong> Physical mediums, such as Ethernet cables, that transmit data between devices in a network.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Importance of Networking</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Networking is essential for both personal and professional communication. It enables the sharing of resources such as files, printers, and internet access. It also allows businesses to improve efficiency by integrating various software and hardware components. In the age of cloud computing, networking provides the foundation for distributed systems, big data processing, and modern IT infrastructures.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Networking Protocols</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li><strong>Transmission Control Protocol (TCP):</strong> A protocol that ensures reliable data transfer across networks.</li>
          <li><strong>Internet Protocol (IP):</strong> A protocol that defines the addressing system used to identify devices on a network.</li>
          <li><strong>Hypertext Transfer Protocol (HTTP):</strong> A protocol used for transferring web pages and resources over the internet.</li>
          <li><strong>Simple Mail Transfer Protocol (SMTP):</strong> A protocol for sending emails between servers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Setting Up a Basic Network</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Setting up a network involves configuring network devices such as routers, switches, and firewalls. A basic home network typically consists of:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Connecting devices to a router via Ethernet cables or Wi-Fi.</li>
          <li>Configuring IP addresses, DNS settings, and security features like Wi-Fi encryption.</li>
          <li>Using network monitoring tools to check connectivity and troubleshoot issues.</li>
        </ul>
      </section>
    </div>
  );
};

export default Networking;