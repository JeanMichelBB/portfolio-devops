// src/components/LinuxFundamental.jsx
import React, { useEffect, useState, useRef } from "react";

const LinuxFundamental = () => {
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
                    <span>Linux Fundamental</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Linux</h2>
                        <p className="text-gray-600">
                            Linux is a family of open-source Unix-like operating systems based on the Linux kernel. It is widely used for server environments, development workstations, and even on mobile devices with Android. One of the main benefits of Linux is its flexibility, stability, and large community support.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Key Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Kernel:</strong> The core part of the Linux operating system, responsible for managing hardware and system resources.</li>
                            <li><strong>Shell:</strong> A command-line interface used to interact with the operating system, such as Bash, Zsh, or Fish.</li>
                            <li><strong>Package Manager:</strong> Tools like APT, YUM, or Pacman that manage the installation and maintenance of software packages.</li>
                            <li><strong>File System:</strong> Linux uses a hierarchical file system structure starting from the root (/) directory, including directories like /home, /bin, and /etc.</li>
                            <li><strong>Permissions:</strong> Linux uses file permissions (read, write, execute) to control access to files and directories.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default LinuxFundamental;
