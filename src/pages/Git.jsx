import React, { useEffect, useState } from "react";
import GitFundamental from "../components/GitFundamental";
import git from "../assets/git.jpg";

const Git = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
    bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
    bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_115%]`}
      style={{
        backgroundImage: `url(${git})`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Git</h1>

        <GitFundamental />

        {/* Personal Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Git</h2>
          <p className="text-gray-600">
            I have used Git extensively in both personal and team projects. For example, in my <strong>Twitter Clone</strong> project, I utilized Git for version control, collaborating with a team of developers and ensuring smooth code integration. This allowed us to track changes effectively and revert if necessary.
          </p>
          <p className="text-gray-600">
            One of the key features that helped was <strong>branching and merging</strong>. By creating separate branches for new features, I was able to work independently without disrupting the main codebase. Once a feature was completed and reviewed, merging it back ensured a seamless integration process.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Twitter Clone</h3>
            <p className="text-gray-700 mt-2">
              A Twitter clone built with React, FastAPI, and MySQL. It features user authentication, tweet posting, and a responsive design.
              The backend is powered by FastAPI, and MySQL ensures data persistence and reliability.
            </p>
            <a href="https://github.com/JeanMichelBB/twitterclone" className="text-blue-600 font-semibold mt-2 inline-block">
              View on GitHub →
            </a>
            <a href="https://twitterclone.sacenpapier.org" className="text-blue-600 font-semibold ml-4 inline-block">
              Live Demo →
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">BotWhy</h3>
            <p className="text-gray-700 mt-2">
              A chatbot integrating OpenAI’s GPT-4o Mini and FastAPI. It provides an interactive experience where users can ask questions
              and receive AI-generated responses in real time.
            </p>
            <a href="https://github.com/JeanMichelBB/BotWhy" className="text-blue-600 font-semibold mt-2 inline-block">
              View on GitHub →
            </a>
            <a href="https://botwhy.sacenpapier.org/" className="text-blue-600 font-semibold ml-4 inline-block">
              Live Demo →
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Apercu</h3>
            <p className="text-gray-700 mt-2">
              A web application showcasing my services and work. It serves as a portfolio, highlighting my skills and projects in an easy-to-navigate
              and visually appealing way.
            </p>
            <a href="https://github.com/JeanMichelBB/apercu" className="text-blue-600 font-semibold mt-2 inline-block">
              View on GitHub →
            </a>
            <a href="https://apercu.sacenpapier.org/" className="text-blue-600 font-semibold ml-4 inline-block">
              Live Demo →
            </a>
          </div>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Tools</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>GitHub Actions:</strong> Automated workflows integrated with GitHub repositories to perform continuous integration and continuous deployment (CI/CD).</li>
            <li><strong>GitLab CI:</strong> CI/CD pipelines integrated with GitLab repositories for testing, building, and deploying code.</li>
            <li><strong>Git with Docker:</strong> Used Git to version control Dockerfiles and manage deployments to cloud platforms.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Commit Frequently:</strong> Commit small, incremental changes to make code review and debugging easier.</li>
            <li><strong>Write Meaningful Commit Messages:</strong> Describe the purpose and context of changes in clear, concise messages.</li>
            <li><strong>Resolve Merge Conflicts Early:</strong> Don’t leave merge conflicts unresolved for long. Address them as soon as they appear.</li>
            <li><strong>Use Branching for Features:</strong> Create a new branch for each feature or bug fix to keep the main branch clean.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="text-blue-600">Official Git Documentation</a></li>
            <li><a href="https://try.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Git Tutorials (Interactive)</a></li>
            <li><a href="https://www.atlassian.com/git/tutorials" target="_blank" rel="noopener noreferrer" className="text-blue-600">Atlassian Git Tutorials</a></li>
          </ul>
        </section>
      </div>
    </div>

  );
};

export default Git;