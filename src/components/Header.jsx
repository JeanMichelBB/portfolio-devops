import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons
import avatar from "../assets/avatar.jpg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Refs for dropdown menus
    const moreRef = useRef(null);
    const projectsRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip effect on mobile

        const handleClickOutside = (event) => {
            if (
                moreRef.current && !moreRef.current.contains(event.target) &&
                projectsRef.current && !projectsRef.current.contains(event.target)
            ) {
                setMoreOpen(false);
                setProjectsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobile]);

    const handleLinkClick = () => {
        setMenuOpen(false); // Close mobile menu
        setMoreOpen(false); // Close "More" dropdown
        setProjectsOpen(false); // Close "Projects" dropdown
        window.scrollTo(0, 0); // Scroll to top
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:flex items-center justify-center sticky top-0 z-50 bg-white opacity-92">
                <nav className="flex items-center px-4 py-4 max-w-4xl">
                    {/* Logo / Avatar */}
                    <Link to="/" className="flex items-center space-x-2 mr-4" onClick={handleLinkClick}>
                        <img src={avatar} alt="Avatar" className="w-6 h-6 object-cover rounded-full" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="flex space-x-6 ml-auto relative items-center">
                        <li className="flex items-center h-full">
                            <Link to="/linux-bash" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                Linux
                            </Link>
                        </li>
                        <li className="flex items-center h-full">
                            <Link to="/git" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                Git
                            </Link>
                        </li>
                        <li className="flex items-center h-full">
                            <Link to="/python" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                Full-Stack
                            </Link>
                        </li>
                        <li className="flex items-center h-full">
                            <Link to="/kubernetes" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                Kubernetes
                            </Link>
                        </li>
                        <li className="flex items-center h-full">
                            <Link to="/terraform" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                Terraform
                            </Link>
                        </li>
                        <li className="flex items-center h-full">
                            <Link to="/docker" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                Docker
                            </Link>
                        </li>

                        {/* More Dropdown */}
                        <li className="relative flex items-center h-full" ref={moreRef}>
                            <button
                                className="text-sm hover:text-blue-500 flex items-center leading-none"
                                onClick={() => setMoreOpen(!moreOpen)}
                            >
                                More <ChevronDown size={16} className="ml-1" />
                            </button>
                            {moreOpen && (
                                <ul className="absolute top-6 left-0 bg-white rounded-md py-2 w-40 shadow-lg transform transition-all duration-300 opacity-100">
                                    <li><Link to="/cloud" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Cloud</Link></li>
                                    <li><Link to="/monitoring" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Monitoring</Link></li>
                                    <li><Link to="/networking" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Networking</Link></li>
                                    <li><Link to="/nginx" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>NGINX</Link></li>
                                    <li><Link to="/ansible" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Ansible</Link></li>
                                    <li><Link to="/cicd" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>CICD</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Projects Dropdown */}
                        <li className="relative flex items-center h-full" ref={projectsRef}>
                            <button
                                className="text-sm hover:text-blue-500 flex items-center leading-none"
                                onClick={() => setProjectsOpen(!projectsOpen)}
                            >
                                Projects <ChevronDown size={16} className="ml-1" />
                            </button>
                            {projectsOpen && (
                                <ul className="absolute top-6 left-0 bg-white rounded-md py-2 w-40 shadow-lg transform transition-all duration-300 opacity-100">
                                    <li><Link to="/projects/twitter-clone" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Twitter Clone</Link></li>
                                    <li><Link to="/projects/botwhy" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>BotWhy</Link></li>
                                    <li><Link to="/projects/apercu" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Apercu</Link></li>
                                    <li><Link to="/projects/grafana" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={handleLinkClick}>Grafana</Link></li>
                                </ul>
                            )}
                        </li>

                        <li className="flex items-center h-full">
                            <Link to="/about" className="text-sm hover:text-blue-500 leading-none" onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>
                        <li className="flex items-center h-full">
                            <Link to="/contact" className="text-sm bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition leading-none" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
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
                {menuOpen && (
                    <ul className="flex flex-col items-end space-y-4 py-4 bg-white shadow-md pr-10 w-full h-screen absolute">
                        <li><Link to="/linux-bash" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Linux</Link></li>
                        <li><Link to="/git" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Git</Link></li>
                        <li><Link to="/python" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Python</Link></li>
                        <li><Link to="/kubernetes" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Kubernetes</Link></li>
                        <li><Link to="/terraform" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Terraform</Link></li>
                        <li><Link to="/docker" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>Docker</Link></li>

                        {/* More Dropdown */}
                        <li className="text-lg font-medium text-right hover:text-blue-500">
                            <button onClick={() => setMoreOpen(!moreOpen)}>More ↓</button>
                            {moreOpen && (
                                <ul className="bg-gray-100 rounded-md mt-2 p-2 transform transition-all duration-300 opacity-100">
                                    <li><Link to="/cloud" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Cloud</Link></li>
                                    <li><Link to="/monitoring" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Monitoring</Link></li>
                                    <li><Link to="/networking" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Networking</Link></li>
                                    <li><Link to="/nginx" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>NGINX</Link></li>
                                    <li><Link to="/ansible" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Ansible</Link></li>
                                    <li><Link to="/cicd" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>CICD</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Projects Dropdown */}
                        <li className="text-lg font-medium text-right hover:text-blue-500">
                            <button onClick={() => setProjectsOpen(!projectsOpen)}>Projects ↓</button>
                            {projectsOpen && (
                                <ul className="bg-gray-100 rounded-md mt-2 p-2 transform transition-all duration-300 opacity-100">
                                    <li><Link to="/projects/twitter-clone" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Twitter Clone</Link></li>
                                    <li><Link to="/projects/botwhy" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>BotWhy</Link></li>
                                    <li><Link to="/projects/apercu" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Apercu</Link></li>
                                    <li><Link to="/projects/grafana" className="block px-4 py-1 hover:bg-gray-200" onClick={handleLinkClick}>Grafana</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/about" className="text-lg font-medium text-right hover:text-blue-500" onClick={handleLinkClick}>About</Link></li>
                        <li><Link to="/contact" className="text-lg font-medium bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                )}
            </header>
        </>
    );
};

export default Header;