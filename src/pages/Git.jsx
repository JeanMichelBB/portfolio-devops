import React, { useEffect, useState } from "react";

const Git = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Git</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 ">Version Control</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Git is an essential tool for tracking changes in projects, allowing for efficient collaboration and rollback when needed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Branching & Merging</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I use Git branches to isolate features and bug fixes, ensuring a smooth development workflow. Merging strategies like fast-forward and rebase help maintain a clean history.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Collaboration</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Working with GitHub and GitLab, I handle pull requests, code reviews, and CI/CD pipelines to automate deployments.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Advanced Usage</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          My Git workflow includes rebasing, cherry-picking, and using hooks to automate repetitive tasks, improving efficiency.
        </p>
      </section>
    </div>
  );
};

export default Git;