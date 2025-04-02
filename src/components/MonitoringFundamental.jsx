import React, { useEffect, useState, useRef } from "react";

const MonitoringFundamental = () => {
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
                    <span>Fundamental Concepts</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">What is Monitoring?</h2>
                        <p className="text-gray-600">
                            Monitoring helps you track how your systems and apps are performing.
                            It gives you alerts when something goes wrong so you can fix issues fast.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Key Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Metrics:</strong> Data like CPU usage, memory, and response times.</li>
                            <li><strong>Prometheus:</strong> Collects and stores system metrics.</li>
                            <li><strong>Grafana:</strong> Displays metrics in dashboards for easy viewing.</li>
                            <li><strong>Alerts:</strong> Notifies you when something goes wrong (e.g., high CPU usage).</li>
                            <li><strong>Time-Series Data:</strong> Data that is collected over time, often in regular intervals.</li>
                            <li><strong>Exporters:</strong> Tools that send metrics from systems to Prometheus.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MonitoringFundamental;