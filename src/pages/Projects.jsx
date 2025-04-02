import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { 
    id: "twitter-clone", 
    name: "→ Twitter Clone",
    description: "A Twitter clone built with React, FastAPI, and MySQL."
  },
  { 
    id: "botwhy", 
    name: "→ BotWhy",
    description: "A chatbot integrating OpenAI’s GPT-4o Mini and FastAPI."
  },
  { 
    id: "apercu", 
    name: "→ Apercu",
    description: "A web application showcasing my services and work."
  },
  { 
    id: "grafana", 
    name: "→ Grafana Monitoring",
    description: "A real-time monitoring dashboard using Prometheus, Node Exporter, and Grafana."
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
      
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              className="text-3xl font-semibold text-gray-900 hover:underline"
            >
              {project.name}
            </Link>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </li>
        ))}
      </ul>

      <Link to="/" className="text-blue-500 hover:underline mt-6 inline-block">
        Go back to Home
      </Link>
    </div>
  );
};

export default Projects;