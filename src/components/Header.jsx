import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the menu toggle
import avatar from "../assets/avatar.jpg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu when a link is clicked
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:flex items-center justify-center sticky top-0 z-50 bg-white opacity-92">
                <nav className="flex items-center zpx-4 py-2 max-w-4xl">
                    {/* Logo / Avatar */}
                    <Link to="/" className="flex items-center space-x-2 mr-4" onClick={handleLinkClick}>
                        <img src={avatar} alt="Avatar" className="w-6 h-6 object-cover rounded-full" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="flex space-x-6 ml-auto">
                        <li><Link to="/linux-bash" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Linux</Link></li>
                        <li><Link to="/git" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Git</Link></li>
                        <li><Link to="/python" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Python</Link></li>
                        <li><Link to="/kubernetes" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Kubernetes</Link></li>
                        <li><Link to="/terraform" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Terraform</Link></li>
                        <li><Link to="/docker" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Docker</Link></li>
                        <li><Link to="/cloud" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Cloud</Link></li>
                        <li><Link to="/monitoring" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>Monitoring</Link></li>
                        <li><Link to="/about" className="text-sm hover:text-blue-500" onClick={handleLinkClick}>About</Link></li>
                        <li><Link to="/contact" className="text-sm bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Mobile Header */}
            <header className="md:hidden sticky top-0 z-50 bg-white opacity-92">
                <nav className="flex items-center justify-between px-4 py-2">
                    {/* Logo / Avatar */}
                    <Link to="/" className="flex items-center space-x-2 mr-4" onClick={handleLinkClick}>
                        <img src={avatar} alt="Avatar" className="w-8 h-8 object-cover rounded-full" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                <ul
                    className={`flex flex-col items-end space-y-4 py-4 bg-white shadow-md pr-10 w-full h-screen absolute transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <li><Link to="/linux-bash" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Linux</Link></li>
                    <li><Link to="/git" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Git</Link></li>
                    <li><Link to="/python" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Python</Link></li>
                    <li><Link to="/kubernetes" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Kubernetes</Link></li>
                    <li><Link to="/terraform" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Terraform</Link></li>
                    <li><Link to="/docker" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Docker</Link></li>
                    <li><Link to="/cloud" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Cloud</Link></li>
                    <li><Link to="/monitoring" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Monitoring</Link></li>
                    <li><Link to="/about" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/contact" className="text-lg font-semibold bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition text-right" onClick={handleLinkClick}>Contact</Link></li>
                </ul>
            </header>
        </>
    );
};

export default Header;