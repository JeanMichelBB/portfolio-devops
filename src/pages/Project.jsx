// src/pages/Project.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Project = () => {
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
        </div>
    );
}
export default Project;