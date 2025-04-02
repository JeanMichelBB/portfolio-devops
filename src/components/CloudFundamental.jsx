// src/components/CloudFundamental.jsx
import React, { useEffect, useState, useRef } from "react";

const CloudFundamental = () => {
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
                            <li><strong>OCI:</strong> Oracle's cloud infrastructure providing a range of cloud services.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CloudFundamental;
