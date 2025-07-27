import React, { useEffect, useState } from "react";
import PythonFundamental from "../components/PythonFundamental";
import python from "../assets/python.jpg"; // Adjust the path as necessary

const Python = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
        bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
        bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_110%]`}
      style={{
        backgroundImage: `url(${python})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Full-Stack Developer</h1>

        {/* 🎓 Python Fundamental Concepts (Collapsible) */}
        <PythonFundamental />

        {/* 🚀 My Experience with Python */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Full-Stack Developer</h2>
          <p className="text-gray-600">
            I have used Python alongside various technologies, including <strong>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React, SQL,</strong> and <strong>FastAPI</strong>.
            Python has been my go-to language for building backend applications, and I have integrated it seamlessly with frontend technologies like React for dynamic and responsive web applications.
          </p>
          <p className="text-gray-600">
            A significant part of my work involved creating APIs with <strong>FastAPI</strong>, which is known for its speed and modern features.
            I also leveraged Python’s powerful libraries, including <strong>Pandas</strong> and <strong>NumPy</strong>, for data manipulation and scientific computing.
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

        {/* 🔗 Python & Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Programming Languages & Frameworks:</strong> HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React, FastAPI, Python</li>
            <li><strong>Databases:</strong> MS SQL, PL/SQL, MySQL</li>
            <li><strong>Containerization & DevOps:</strong> Docker, Networking, Git, GitHub, Command Line</li>
          </ul>
          <p className="text-gray-600 mt-4">
            I have used a mix of these technologies to take projects from start to finish. Whether it's building dynamic web applications with React and FastAPI, managing databases with MySQL, or automating deployments using Docker and GitHub Actions, I have a holistic approach to development that spans both frontend and backend.
          </p>
        </section>

        {/* ⚡ Best Practices & Debugging */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Optimizing Performance:</strong> Used <strong>async programming and caching mechanisms</strong>.</li>
            <li><strong>Security:</strong> Managed API security using <strong>OAuth2 and JWT tokens</strong>.</li>
            <li><strong>Code Quality:</strong> Followed <strong>PEP 8 and type hints for maintainability</strong>.</li>
            <li><strong>Debugging:</strong> Used <strong>logging, profiling tools, and unit tests</strong>.</li>
          </ul>
        </section>

        {/* 📚 Full-Stack Developer Learning Resources */}
        <section className="mb-8 pb-30">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              <a href="https://roadmap.sh/full-stack" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                Full-Stack Developer Roadmap
              </a>
            </li>
            <li>
              <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                The Odin Project (Free Full-Stack Curriculum)
              </a>
            </li>
            <li>
              <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                Python Official Documentation
              </a>
            </li>
            <li>
              <a href="https://realpython.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                Real Python (Tutorials & Guides)
              </a>
            </li>
            <li>
              <a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                Full-Stack Open (University of Helsinki)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Python;