import React, { useEffect, useState, useRef } from "react";

const PythonFundamental = () => {
    const [showBasics, setShowBasics] = useState(false);
    const [height, setHeight] = useState(0);
    const basicsRef = useRef(null);
    
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
                    <span>Programming Fundamentals</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        {/* Introduction */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Programming</h2>
                        <p className="text-gray-600">
                            Programming is the process of writing instructions for a computer to execute. 
                            It is used in software development, automation, web applications, data analysis, and more.
                        </p>

                        {/* Key Concepts */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Key Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Variables:</strong> Containers for storing data values.</li>
                            <li><strong>Data Types:</strong> Integers, strings, floats, lists, dictionaries, objects.</li>
                            <li><strong>Functions:</strong> Reusable blocks of code that perform specific tasks.</li>
                            <li><strong>Loops:</strong> Structures like `for` and `while` loops for iteration.</li>
                            <li><strong>Conditionals:</strong> `if`, `else`, and `elif` statements for decision-making.</li>
                        </ul>

                        {/* Frontend Development */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Frontend Development</h2>
                        <p className="text-gray-600">
                            The frontend is what users interact with. It includes:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>HTML:</strong> Structure of web pages.</li>
                            <li><strong>CSS:</strong> Styling and layout.</li>
                            <li><strong>JavaScript:</strong> Adds interactivity.</li>
                            <li><strong>React/Vue/Angular:</strong> Frameworks for building complex UIs.</li>
                        </ul>

                        {/* Backend Development */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Backend Development</h2>
                        <p className="text-gray-600">
                            The backend handles business logic, databases, and APIs:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Python:</strong> (Flask, Django) for APIs and web applications.</li>
                            <li><strong>JavaScript:</strong> (Node.js, Express) for backend services.</li>
                            <li><strong>PHP, Java, Go:</strong> Other backend languages.</li>
                            <li><strong>REST & GraphQL:</strong> API communication standards.</li>
                        </ul>

                        {/* Databases & SQL */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Databases & SQL</h2>
                        <p className="text-gray-600">
                            Databases store and retrieve application data:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>SQL:</strong> (MySQL, PostgreSQL, SQLite) for structured data.</li>
                            <li><strong>NoSQL:</strong> (MongoDB, Firebase) for flexible, document-based storage.</li>
                            <li><strong>ORMs:</strong> SQLAlchemy, Prisma, or Sequelize to interact with databases in code.</li>
                        </ul>

                        {/* Hands-On */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
                        <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
                            {`# Python: Simple function
def greet(name):
    return f"Hello, {name}!"

# JavaScript: Event listener
document.querySelector("button").addEventListener("click", () => {
    alert("Button clicked!");
});

# SQL: Retrieve users
SELECT * FROM users WHERE active = 1;
`}
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PythonFundamental;