import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";

const ContactComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center">
            {/* Avatar Image */}
            <div className="flex justify-center items-center">
                <img
                    src={Avatar}
                    alt="Jean-Michel Bérubé"
                    className="w-32 h-32 rounded-full border-4 border-gray-300"
                />
            </div>
            {/* mailto */}
            <div className="flex justify-center items-center">
                <a href="mailto:jeanmichelbberube@outlook.com" className="text-gray-300 hover:text-white text-9xl">
                    <FaEnvelope />
                </a>
            </div>
            {/* linkedin */}
            <div className="flex justify-center items-center">
                <Link to="https://linkedin.com/in/jeanmichelbb" target="_blank" className="text-gray-300 hover:text-white text-9xl">
                    <FaLinkedin />
                </Link>
            </div>
            {/* github */}
            <div className="flex justify-center items-center">
                <Link to="https://github.com/jeanmichelbb" target="_blank" className="text-gray-300 hover:text-white text-9xl">
                    <FaGithub />
                </Link>
            </div>
        </div>
    );
};

export default ContactComponent;