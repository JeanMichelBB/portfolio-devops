// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto p-3">
                This page showcases my projects. Here, you can learn more about the work I've done and the technologies I've used.
            </p>
            <Carousel />
            <Link to="/" className="mt-6 text-blue-500 hover:text-blue-700">
                Go back to Home
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-10">
                {/* Project 1 */}
                <div className="project-card p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        alt="GitHub logo"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 1</h3>
                    <p className="text-sm text-gray-600 mb-4">Short description of the project.</p>
                    <Link to="/project-1" className="text-blue-500 hover:text-blue-700">View Project</Link>
                </div>

                {/* Project 2 */}
                <div className="project-card p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub logo"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 2</h3>
                    <p className="text-sm text-gray-600 mb-4">Short description of the project.</p>
                    <Link to="/project-2" className="text-blue-500 hover:text-blue-700">View Project</Link>
                </div>

                {/* Project 3 */}
                <div className="project-card p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub logo"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 3</h3>
                    <p className="text-sm text-gray-600 mb-4">Short description of the project.</p>
                    <Link to="/project-3" className="text-blue-500 hover:text-blue-700">View Project</Link>
                </div>

                {/* Project 4 */}
                <div className="project-card p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub logo"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 4</h3>
                    <p className="text-sm text-gray-600 mb-4">Short description of the project.</p>
                    <Link to="/project-4" className="text-blue-500 hover:text-blue-700">View Project</Link>
                </div>

                {/* Project 5 */}
                <div className="project-card p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub logo"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 5</h3>
                    <p className="text-sm text-gray-600 mb-4">Short description of the project.</p>
                    <Link to="/project-5" className="text-blue-500 hover:text-blue-700">View Project</Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;