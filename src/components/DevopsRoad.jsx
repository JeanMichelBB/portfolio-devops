import React from "react";
import { Link } from "react-router-dom";

const DevopsRoad = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl font-bold mb-8">DevOps Roadmap</h1>

            {/* Infinity Loop Container */}
            <div className="relative w-full max-w-4xl h-64">

                {/* Infinity Symbol (SVG) */}
                <svg
                    viewBox="0 0 200 100"
                    className="absolute inset-0 w-full h-full text-blue-500"
                >
                    <path
                        d="M20,50 C20,20 60,20 100,50 C140,80 180,80 180,50 C180,20 140,20 100,50 C60,80 20,80 20,50 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                    />
                </svg>

                {/* Roadmap Items */}
                <Link
                    to="/learning"
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                >
                    Learn
                </Link>

                <Link
                    to="/tools"
                    className="absolute left-1/3 top-12 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
                >
                    Tools
                </Link>

                <Link
                    to="/automation"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 transition"
                >
                    Automate
                </Link>

                <Link
                    to="/deploy"
                    className="absolute right-1/3 bottom-12 bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition"
                >
                    Deploy
                </Link>

                <Link
                    to="/monitor"
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
                >
                    Monitor
                </Link>
            </div>
        </div>
    );
};

export default DevopsRoad;