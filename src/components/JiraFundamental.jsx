import React, { useEffect, useState, useRef } from "react";

const JiraFundamental = () => {
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
                    <span>Jira & Agile Fundamentals</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        {/* Introduction */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Jira and Agile</h2>
                        <p className="text-gray-600">
                            Jira is a popular project management tool designed to support Agile methodologies. It helps teams plan, track, and manage software development projects efficiently through customizable workflows and real-time collaboration.
                        </p>

                        {/* Core Concepts */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Agile:</strong> A methodology focused on iterative development, collaboration, and continuous improvement.</li>
                            <li><strong>Scrum:</strong> An Agile framework that uses fixed-length sprints, roles, and ceremonies to deliver work incrementally.</li>
                            <li><strong>Jira Projects:</strong> Containers for issues, representing different teams or initiatives.</li>
                            <li><strong>Issues:</strong> Individual work items in Jira, such as tasks, bugs, or user stories.</li>
                            <li><strong>Boards:</strong> Visual tools in Jira to track issues through different workflow stages (e.g., Kanban or Scrum boards).</li>
                        </ul>

                        {/* Hands-On */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
                        <p className="text-gray-600">
                            Start practicing Jira and Agile with these steps:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Create a Jira project:</strong> Set up a new project tailored to your Agile framework.</li>
                            <li><strong>Create and manage issues:</strong> Add user stories, tasks, and bugs, and assign them to team members.</li>
                            <li><strong>Use boards:</strong> Visualize your workflow using Scrum or Kanban boards to track progress.</li>
                            <li><strong>Run sprints:</strong> Plan and execute sprints, managing backlog and tracking velocity.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JiraFundamental;