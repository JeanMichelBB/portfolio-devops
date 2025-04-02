import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import botwhyImage from "../assets/botwhy.png";
import twitterImage from "../assets/x.png";
import { details } from "framer-motion/client";

// Sample project data (this could be moved to a separate file)
const projects = {
  "twitter-clone": {
    title: "Twitter Clone",
    description: "A Twitter clone built with React, FastAPI, and MySQL.",
    url: "https://twitterclone.sacenpapier.org",
    github: "https://github.com/JeanMichelBB/twitterclone",
    iframeSrc: "https://twitterclone.sacenpapier.org",
    image: twitterImage,
    longDescription: "This is a Twitter clone built with React, FastAPI, and MySQL. It features user authentication, tweet posting, and a responsive design. The backend is powered by FastAPI, providing a RESTful API for the frontend to interact with. The database is managed using MySQL, ensuring data persistence and reliability. The frontend is built with React, offering a dynamic and interactive user experience. The project showcases my skills in full-stack development and my ability to create scalable web applications.",
  },
  "botwhy": {
    title: "BotWhy",
    description: "A chatbot integrating OpenAI’s GPT-4o Mini and FastAPI.",
    url: "https://botwhy.sacenpapier.org/",
    github: "https://github.com/JeanMichelBB/BotWhy",
    iframeSrc: "https://botwhy.sacenpapier.org/",
    image: botwhyImage,
    longDescription: "This project features a chatbot that integrates OpenAI's GPT-4o Mini with FastAPI. The chatbot is designed to provide users with an interactive experience, allowing them to ask questions and receive answers in real-time. The backend is built with FastAPI, which provides a fast and efficient way to handle requests and responses. The frontend is designed to be user-friendly, ensuring that users can easily interact with the chatbot. This project demonstrates my ability to integrate advanced AI technologies into web applications.",
  },
  "apercu": {
    title: "Apercu",
    description: "A web application showcasing my services and work.",
    url: "https://apercu.sacenpapier.org/",
    github: "https://github.com/JeanMichelBB/apercu",
    iframeSrc: "https://apercu.sacenpapier.org/",
    image: null, // Add an image later if needed
    longDescription: "Apercu is a web application that showcases my services and work. It serves as a portfolio, highlighting my skills and projects. The application is designed to be visually appealing and easy to navigate, allowing potential clients to quickly find the information they need. The project demonstrates my ability to create professional and polished web applications that effectively communicate my brand and services.",
  },
  "grafana": {
    title: "Grafana Monitoring",
    description: "A real-time monitoring dashboard using Prometheus, Node Exporter, and Grafana.",
    url: "https://grafana.sacenpapier.org/",
    github: "https://github.com/JeanMichelBB/grafana-setup",
    iframeSrc: "https://snapshots.raintank.io/dashboard/snapshot/zcU3p7u4s6hH6T29bOku2VeEIYazaKaY",
    image: null, // Add an image later if needed
    longDescription: "This project features a real-time monitoring dashboard using Prometheus, Node Exporter, and Grafana. The dashboard provides insights into system performance and health, allowing users to monitor key metrics in real-time. The setup includes Prometheus for data collection, Node Exporter for system metrics, and Grafana for visualization. This project showcases my skills in system monitoring and my ability to create effective dashboards for data analysis.",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects[projectId];
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  if (!project) {
    return <h2 className="text-center text-2xl text-red-500">Project not found</h2>;
  }

  return (
    <div className={`min-h-screen text-center p-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}> 
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>

      {/* Embedded Website */}
      <div className="w-full mx-auto border rounded-md overflow-hidden">
        <iframe src={project.iframeSrc} title={project.title} className="w-full h-160 border"></iframe>
      </div>

      {/* Image (if available) */}
      {project.image && (
        <img className="w-full mx-auto mt-4 rounded-md " src={project.image} alt={project.title} />
      )}

      {/* Links */}
      <div className="mt-4">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block">
          View Project
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block">
          GitHub Repository
        </a>
      </div>
      {/* Long Description */}
      <div className="mt-4 text-gray-700">
        <h2 className="text-2xl font-bold mb-2">Project Details</h2>
        <p>{project.longDescription}</p>
      </div>
      {/* Back Link */}
      <p className="text-gray-500 mt-4">
        <strong>Note:</strong> This project is a work in progress and may not be fully functional.
      </p>
      <p className="text-gray-500 mt-4">
        Feel free to explore the code and contribute!
      </p>


      <Link to="/projects" className="text-gray-500 hover:underline mt-6 inline-block">
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;