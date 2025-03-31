import React, { useEffect, useState } from "react";

const NGINX = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">NGINX</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is NGINX?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          NGINX is a high-performance web server, reverse proxy server, and load balancer. It is known for its speed, scalability, and efficiency in serving static content and handling a large number of concurrent connections. It is often used to serve dynamic content, reverse proxy requests, and balance loads across servers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Uses of NGINX</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Serving static files with high efficiency.</li>
          <li>Load balancing for distributed applications.</li>
          <li>Reverse proxying for applications and web services.</li>
          <li>SSL termination to offload SSL encryption from backend servers.</li>
          <li>URL rewriting and redirection to improve website structure and SEO.</li>
          <li>Providing security through rate-limiting and IP filtering.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose NGINX?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          NGINX is chosen for its flexibility and performance. It's designed to handle thousands of simultaneous connections without consuming a lot of system resources, making it ideal for high-traffic websites and applications. Additionally, NGINX is lightweight, fast, and has a minimalistic configuration, allowing it to be highly customizable for various use cases.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Setting Up NGINX</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Setting up NGINX involves installing the server, configuring the server block (virtual hosts), setting up SSL certificates, and configuring reverse proxy rules. It can be installed on most Linux distributions using the package manager or compiled from source.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Example configuration for a basic web server:
        </p>
        <pre className="bg-gray-200 p-4 text-sm text-gray-800 rounded">
          {`server {
  listen 80;
  server_name example.com;
  
  location / {
    root /var/www/html;
    index index.html;
  }

  # Redirect HTTP to HTTPS
  return 301 https://$server_name$request_uri;
}`}
        </pre>
      </section>
    </div>
  );
};

export default NGINX;