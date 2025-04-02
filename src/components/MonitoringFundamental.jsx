import React, { useEffect, useState, useRef } from "react";

const MonitoringFundamental = () => {
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

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Metrics:</strong> Data like CPU usage, memory, and response times.</li>
                            <li><strong>Prometheus:</strong> Collects and stores system metrics.</li>
                            <li><strong>Grafana:</strong> Displays metrics in dashboards for easy viewing.</li>
                            <li><strong>Alerts:</strong> Notifies you when something goes wrong (e.g., high CPU usage).</li>
                            <li><strong>Time-Series Data:</strong> Data that is collected over time, often in regular intervals.</li>
                            <li><strong>Exporters:</strong> Tools that send metrics from systems to Prometheus.</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
                        <p className="text-gray-600">
                            Start with the following steps to work with Grafana and Prometheus:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Install Prometheus:</strong> Set up Prometheus to collect metrics from your systems.</li>
                            <li><strong>Install Grafana:</strong> Set up Grafana to visualize the metrics collected by Prometheus.</li>
                            <li><strong>Create Dashboards:</strong> Use Grafana to create dashboards that display the metrics you care about.</li>
                            <li><strong>Set Alerts:</strong> Configure alerts in Prometheus to notify you when metrics exceed certain thresholds.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MonitoringFundamental;