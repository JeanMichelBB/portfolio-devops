import React, { useEffect, useState, useRef } from "react";

const AnsibleFundamental = () => {
    const [showBasics, setShowBasics] = useState(false);
    const [height, setHeight] = useState(0);
    const basicsRef = useRef(null);
    const sectionRef = useRef(null);


    // Adjust the height for the animation of the collapsible content
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
            <section ref={sectionRef} className="mb-8">
                <button
                    onClick={() => setShowBasics(!showBasics)}
                    className="w-full text-left bg-gray-200 p-3 rounded-md font-semibold hover:bg-gray-300 transition flex justify-between items-center"
                >
                    <span>Fundamental Concepts</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                {/* Collapsible Content */}
                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Ansible</h2>
                        <p className="text-gray-600">
                            Ansible is an open-source IT automation tool that helps with <strong>configuration management</strong>,
                            <strong>application deployment</strong>, and <strong>infrastructure as code</strong>. It uses <strong>YAML-based playbooks</strong>
                            and works over <strong>SSH (agentless)</strong>.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Playbooks:</strong> YAML files defining automation tasks.</li>
                            <li><strong>Modules:</strong> Predefined tasks that Ansible can run.</li>
                            <li><strong>Inventory:</strong> List of managed hosts.</li>
                            <li><strong>Roles:</strong> Structured way to organize playbooks.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On Commands</h2>
                        <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
                            {`# Run a playbook
ansible-playbook -i inventory.ini site.yml

# Check system information on remote hosts
ansible all -m setup

# Execute a command on all hosts
ansible all -m command -a "uptime"`}
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnsibleFundamental;