import React, { useEffect, useState, useRef } from "react";

const PythonFundamental = () => {
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
                    <span>Python Fundamentals</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        {/* Introduction */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Python</h2>
                        <p className="text-gray-600">
                            Python is a versatile, high-level programming language known for its readability and simple syntax. It is widely used in web development, data analysis, automation, machine learning, and more. Python's extensive library ecosystem makes it a powerful tool for developers.
                        </p>

                        {/* Key Concepts */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Key Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Variables:</strong> Containers for storing data values, such as numbers, strings, and more.</li>
                            <li><strong>Data Types:</strong> The classification of data such as integers, strings, floats, lists, dictionaries, etc.</li>
                            <li><strong>Functions:</strong> Reusable blocks of code that perform specific tasks.</li>
                            <li><strong>Loops:</strong> Structures like `for` and `while` loops that allow for repeating actions multiple times.</li>
                            <li><strong>Conditionals:</strong> Statements like `if`, `else`, and `elif` to make decisions in the program.</li>
                        </ul>

                        {/* Hands-On */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
                        <p className="text-gray-600">
                            Get started with Python using these basic steps:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Install Python:</strong> Download and install Python from the official website (https://www.python.org/).</li>
                            <li><strong>Write Code:</strong> Use any text editor or IDE (like VSCode or PyCharm) to write Python code.</li>
                            <li><strong>Run Python Scripts:</strong> Open a terminal or command prompt and run a Python script using `python script_name.py`.</li>
                            <li><strong>Learn Libraries:</strong> Explore Python libraries such as NumPy, Pandas, Flask, or Django to enhance your development experience.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PythonFundamental;