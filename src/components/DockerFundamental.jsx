// src/components/DockerFundamental.jsx
import React, { useEffect, useState, useRef } from "react";

const DockerFundamental = () => {
    const [showBasics, setShowBasics] = useState(false);
    const [height, setHeight] = useState(0);
    const basicsRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (showBasics && basicsRef.current) {
            setHeight(basicsRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [showBasics]);

    return (
        <div>
            {/* Fundamental Concepts (Collapsible with Animation) */}
            {/* Fundamental Concepts (Collapsible with Animation) */}
            <section className="mb-8" ref={sectionRef}>
                <button
                    onClick={() => setShowBasics(!showBasics)}
                    className="w-full text-left bg-gray-200 p-3 rounded-md font-semibold hover:bg-gray-300 transition flex justify-between items-center"
                >
                    <span>Fundamental Concepts</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Docker</h2>
                        <p className="text-gray-600">
                            Docker is a containerization platform that packages applications and dependencies into portable containers.
                            It allows developers to run applications consistently across different environments.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Images:</strong> Pre-packaged application environments.</li>
                            <li><strong>Containers:</strong> Running instances of images.</li>
                            <li><strong>Dockerfile:</strong> Instructions to build custom images.</li>
                            <li><strong>Volumes:</strong> Persistent storage for containers.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On Commands</h2>
                        <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
                            {`# Run a container
docker run -d -p 8080:80 nginx

# List running containers
docker ps

# Stop a container
docker stop <container_id>`}
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default DockerFundamental;
