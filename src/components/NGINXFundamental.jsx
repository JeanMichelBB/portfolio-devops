import React, { useEffect, useState, useRef } from "react";

const NGINXFundamental = () => {
    const [showBasics, setShowBasics] = useState(false);
    const [height, setHeight] = useState(0);
    const basicsRef = useRef(null);
    const sectionRef = useRef(null);

    // Detect visibility of the section using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    // Close the section when it's not visible, but don't affect the page's animation
                    setShowBasics(false);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (showBasics && basicsRef.current) {
            setHeight(basicsRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [showBasics]);

    return (
        <div>
            {/* Introduction (Collapsible with Animation) */}
            <section className="mb-8" ref={sectionRef}>
                <button
                    onClick={() => setShowBasics(!showBasics)}
                    className="w-full text-left bg-gray-200 p-3 rounded-md font-semibold hover:bg-gray-300 transition flex justify-between items-center"
                >
                    <span>NGINX Fundamentals</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        {/* Introduction */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to NGINX</h2>
                        <p className="text-gray-600">
                            NGINX is a high-performance web server, reverse proxy, and load balancer. It is widely used for serving static content, handling HTTP/HTTPS traffic, and acting as a proxy to backend services like application servers.
                        </p>

                        {/* Core Concepts */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Web Server:</strong> Serves static content like HTML, CSS, JavaScript, and images.</li>
                            <li><strong>Reverse Proxy:</strong> Forwards client requests to backend servers.</li>
                            <li><strong>Load Balancer:</strong> Distributes incoming traffic across multiple servers to balance the load.</li>
                            <li><strong>Configuration:</strong> Uses simple text-based configuration files for setup and management.</li>
                        </ul>

                        {/* Hands-On */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
                        <p className="text-gray-600">
                            Try these basic steps to work with NGINX:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Install NGINX:</strong> Use package managers like `apt` or `yum` to install NGINX.</li>
                            <li><strong>Start NGINX:</strong> Run `nginx` to start the service, or `nginx -s reload` to reload its configuration.</li>
                            <li><strong>Configure NGINX:</strong> Edit configuration files, typically located in `/etc/nginx/nginx.conf`, to set up server blocks and reverse proxies.</li>
                            <li><strong>Test Configuration:</strong> Run `nginx -t` to test configuration files before applying changes.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NGINXFundamental;