import React, { useEffect, useState, useRef } from "react";
const GitFundamental = () => {
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
          <span>Git Fundamentals</span>
          <span>{showBasics ? "↑" : "↓"}</span>
        </button>

        <div
          ref={basicsRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height: `${height}px` }}
        >
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            {/* Introduction */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Git</h2>
            <p className="text-gray-600">
              Git is a powerful version control system that helps developers track and manage code changes. It's essential for collaboration, allowing multiple developers to work on the same project without overwriting each other's work.
            </p>

            {/* Core Concepts & Components */}
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Core Concepts & Components</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Repository (Repo):</strong> A project folder that contains all files and version history.</li>
              <li><strong>Commit:</strong> A snapshot of your project, representing a change or addition made.</li>
              <li><strong>Branch:</strong> A separate line of development allowing you to work on different features simultaneously.</li>
              <li><strong>Merge:</strong> The process of integrating changes from different branches into one.</li>
              <li><strong>Remote:</strong> A cloud-based version of your repository, like GitHub or GitLab.</li>
            </ul>

            {/* Hands-On */}
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Hands-On</h2>
            <p className="text-gray-600">
              To get started with Git, follow these basic steps:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Initialize a Git repository:</strong> Run `git init` in your project folder.</li>
              <li><strong>Check the status:</strong> Use `git status` to see changes.</li>
              <li><strong>Stage changes:</strong> Add changes with `git add .` to include all files.</li>
              <li><strong>Commit changes:</strong> Save changes using `git commit -m "message"`, adding a descriptive message.</li>
              <li><strong>Push to remote:</strong> Upload your changes with `git push` to share your work on GitHub or GitLab.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GitFundamental;