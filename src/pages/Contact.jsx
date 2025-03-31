import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-400 mb-6 text-center max-w-md">
                Feel free to reach out to me through any of the platforms below. Whether it's for collaboration, networking, or just a chat, I'm always open to connecting!
            </p>

            {/* Contact Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <img
                        src={Avatar}
                        alt="Jean-Michel Bérubé"
                        className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
                    />
                    <p className="text-xl font-semibold">Jean-Michel Bérubé</p>
                    <p className="text-gray-400">Software Developer</p>
                </div>

                {/* Contact Methods */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-2xl text-gray-300" />
                        <a href="mailto:jeanmichelbberube@outlook.com" className="text-blue-400 hover:underline text-lg">
                            jeanmichelbberube@outlook.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaLinkedin className="text-2xl text-gray-300" />
                        <Link to="https://linkedin.com/in/jeanmichelbb" target="_blank" className="text-blue-400 hover:underline text-lg">
                            linkedin.com/in/jeanmichelbb
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaGithub className="text-2xl text-gray-300" />
                        <Link to="https://github.com/jeanmichelbb" target="_blank" className="text-blue-400 hover:underline text-lg">
                            github.com/jeanmichelbb
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-gray-300">📍 Location:</p>
                        <span className="text-lg text-gray-400">Montreal, QC, Canada</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;