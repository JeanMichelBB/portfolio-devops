// src/components/NetworkingFundamental.jsx
import React, { useEffect, useState, useRef } from "react";

const NetworkingFundamental = () => {
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
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Networking</h2>
                        <p className="text-gray-600">
                            Networking refers to the practice of connecting computers and other devices together to share resources, communicate, and exchange data. It encompasses both the hardware (routers, switches, cables) and software (protocols, firewalls, etc.) that work together to enable communication across devices.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Key Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>IP Address:</strong> A unique identifier for a device on a network, used to route data between devices.</li>
                            <li><strong>Router:</strong> A device that forwards data packets between networks, often used to connect a local network to the internet.</li>
                            <li><strong>Switch:</strong> A device that connects devices within a local network, forwarding data based on MAC addresses.</li>
                            <li><strong>Subnetting:</strong> The practice of dividing a larger network into smaller sub-networks to improve efficiency and security.</li>
                            <li><strong>Protocols:</strong> Rules for data communication, such as TCP/IP, HTTP, and DNS, that govern how devices interact on a network.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default NetworkingFundamental;
