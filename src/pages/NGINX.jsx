import React, { useEffect, useState } from "react";
import NGINXFundamental from "../components/NGINXFundamental";
import nginx from "../assets/nginx.jpg"; // Adjust the path as necessary

const NGINX = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);


  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
                    bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
                    bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_110%]`}
      style={{
        backgroundImage: `url(${nginx})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">NGINX</h1>
        <NGINXFundamental />

        {/* My Experience with NGINX */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with NGINX</h2>
          <p className="text-gray-600">
            I have configured NGINX for a variety of use cases, including web serving, reverse proxy setups, and load balancing. It has been particularly useful for handling high volumes of traffic and serving static assets with minimal overhead. Additionally, I have used NGINX in conjunction with SSL/TLS certificates to secure websites and optimize site performance through caching.
          </p>
        </section>

        {/* NGINX Use Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Use Cases of NGINX</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Web Server:</strong> NGINX can serve static files (like HTML, CSS, and JavaScript) efficiently and handle high traffic loads.</li>
            <li><strong>Reverse Proxy:</strong> It can forward client requests to a backend server (such as a Node.js or Python app) and return the server's response to the client.</li>
            <li><strong>Load Balancing:</strong> NGINX can distribute incoming traffic across multiple backend servers to ensure availability and improve performance.</li>
            <li><strong>SSL Termination:</strong> NGINX can handle SSL/TLS encryption, offloading this work from backend servers and improving performance.</li>
            <li><strong>API Gateway:</strong> NGINX can act as a gateway for APIs, managing traffic and routing requests to different microservices.</li>
          </ul>
        </section>

        {/* Configuration Example */}
        <section className="mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            NGINX Configuration Example
          </h2>
          <pre className="bg-gray-100 p-3 sm:p-4 md:p-6 rounded-md text-gray-800 text-sm sm:text-base overflow-auto">
            <code>
              {`
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
      `}
            </code>
          </pre>
          <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
            This is a basic configuration for using NGINX as a reverse proxy. It listens on port 80 and forwards requests to a backend service running on port 3000.
          </p>
        </section>

        {/* NGINX Performance Tuning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Performance Tuning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Worker Processes:</strong> Adjust the number of worker processes based on the CPU cores available for optimal performance.</li>
            <li><strong>Connection Timeout:</strong> Configure connection timeouts to improve server responsiveness.</li>
            <li><strong>Gzip Compression:</strong> Enable gzip compression to reduce the size of responses sent to clients, improving load times and bandwidth usage.</li>
            <li><strong>Caching:</strong> Set up caching headers to reduce the load on backend servers and improve response times for frequently requested resources.</li>
          </ul>
        </section>

        {/* Troubleshooting NGINX */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Troubleshooting NGINX</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Error Logs:</strong> Check the NGINX error logs for issues such as misconfigurations or connection failures. Logs are typically located in `/var/log/nginx/error.log`.</li>
            <li><strong>Access Logs:</strong> Review the access logs to monitor incoming traffic and identify any abnormal requests. Logs are usually located in `/var/log/nginx/access.log`.</li>
            <li><strong>Configuration Testing:</strong> Use the `nginx -t` command to test the NGINX configuration for syntax errors before reloading.</li>
          </ul>
        </section>

        {/* Resources for Learning NGINX */}
        <section className="mb-8 pb-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://www.nginx.com/resources/" target="_blank" rel="noopener noreferrer" className="text-blue-600">NGINX Official Resources</a></li>
            <li><a href="https://www.udemy.com/course/nginx-for-beginners/" target="_blank" rel="noopener noreferrer" className="text-blue-600">NGINX for Beginners - Udemy</a></li>
            <li><a href="https://www.digitalocean.com/community/tags/nginx" target="_blank" rel="noopener noreferrer" className="text-blue-600">NGINX Tutorials - DigitalOcean</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NGINX;