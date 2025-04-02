// src/components/CICDFundamental.jsx
import React, { useEffect, useState, useRef } from "react";

const CICDFundamental = () => {
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
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to CI/CD</h2>
                        <p className="text-gray-600">
                            CI/CD stands for Continuous Integration and Continuous Deployment. It is a set of practices to automate the processes of integration and deployment in software development.
                            With CI, developers frequently commit code to a shared repository, and with CD, code is automatically deployed to production or staging environments.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Continuous Integration (CI):</strong> Regularly merging code changes into a shared repository and automatically running tests.</li>
                            <li><strong>Continuous Deployment (CD):</strong> Automating the deployment of code to staging/production environments.</li>
                            <li><strong>Version Control:</strong> Tools like Git to track and manage code changes.</li>
                            <li><strong>Automated Testing:</strong> Running tests automatically to catch bugs early.</li>
                            <li><strong>Build Pipeline:</strong> The sequence of automated steps that prepare your code for production.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On Commands</h2>
                        <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
                            {`# Example CI/CD Pipeline using GitHub Actions
name: CI Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Deploy to production
        run: npm run deploy`}
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CICDFundamental;
