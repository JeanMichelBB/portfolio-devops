// src/components/CloudFundamental.jsx
import React, { useEffect, useState, useRef } from "react";

const CloudFundamental = () => {
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
            <section className="mb-8">
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
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Cloud Computing</h2>
                        <p className="text-gray-600">
                            Cloud computing provides on-demand access to computing resources like storage, processing power, and software over the internet.
                            It eliminates the need for organizations to own and maintain physical infrastructure.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Cloud Service Models</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>IaaS (Infrastructure as a Service):</strong> Provides virtualized computing resources over the internet.</li>
                            <li><strong>PaaS (Platform as a Service):</strong> Provides a platform to develop, run, and manage applications.</li>
                            <li><strong>SaaS (Software as a Service):</strong> Delivers software applications over the internet.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Cloud Providers & Tools</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>AWS:</strong> Amazon's cloud platform offering compute, storage, and various other services.</li>
                            <li><strong>Azure:</strong> Microsoft's cloud platform with a broad set of tools and services.</li>
                            <li><strong>Google Cloud:</strong> Google's suite of cloud computing services including AI, data analytics, and more.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CloudFundamental;
