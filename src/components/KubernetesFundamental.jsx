import React, { useEffect, useState, useRef } from "react";

const KubernetesFundamental = () => {
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
            {/* Fundamental Concepts (Collapsible with Animation) */}
            <section className="mb-8" ref={sectionRef}>
                <button
                    onClick={() => setShowBasics(!showBasics)}
                    className="w-full text-left bg-gray-200 p-3 rounded-md font-semibold hover:bg-gray-300 transition flex justify-between items-center"
                >
                    <span>Kubernetes Fundamentals</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        {/* Introduction */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Kubernetes</h2>
                        <p className="text-gray-600">
                            Kubernetes is a powerful platform for automating the deployment, scaling, and management of containerized applications. It helps run applications efficiently at scale, making it a key tool for microservices and cloud-native architectures.
                        </p>

                        {/* Core Concepts */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Cluster:</strong> A set of machines (nodes) that Kubernetes manages for running containers.</li>
                            <li><strong>Pod:</strong> The smallest unit of deployment in Kubernetes, which holds one or more containers.</li>
                            <li><strong>Node:</strong> A machine (virtual or physical) that runs containers as part of the Kubernetes cluster.</li>
                            <li><strong>Deployment:</strong> Manages the scaling and updates of pods in a cluster, ensuring the desired state is maintained.</li>
                            <li><strong>Service:</strong> A way to expose pods to access from other applications or networks, providing a stable IP and DNS name.</li>
                        </ul>

                        {/* Hands-On */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
                        <p className="text-gray-600">
                            Start with the following steps to work with Kubernetes:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Set up a Kubernetes cluster:</strong> Use tools like Minikube or cloud providers to create a test cluster.</li>
                            <li><strong>Create a Pod:</strong> Define and deploy a Pod using `kubectl run`.</li>
                            <li><strong>Deploy an application:</strong> Use Kubernetes deployments to manage apps with `kubectl apply`.</li>
                            <li><strong>Expose services:</strong> Expose your app using a Kubernetes Service to access it externally.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KubernetesFundamental;