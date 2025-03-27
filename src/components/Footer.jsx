import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-100 opacity-90 text-center py-6 mt-auto px-4">
        <div className="m-4">
            <div className="text-left mx-auto max-w-4xl">
                <h3 className="font-semibold text-lg mb-4 text-center">Technologies & Services</h3>
                
                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-300 pb-6">
                    {/** Technology Categories **/}
                    {[
                        {
                            title: "Git",
                            link: "/git",
                            docs: "https://git-scm.com/doc",
                            description: "Version Control"
                        },
                        {
                            title: "Python",
                            link: "/python",
                            docs: "https://www.python.org/doc/",
                            description: "Programming"
                        },
                        {
                            title: "Docker",
                            link: "/docker",
                            docs: "https://www.docker.com/resources/what-container",
                            description: "Containers"
                        },
                        {
                            title: "Kubernetes",
                            link: "/kubernetes",
                            docs: "https://kubernetes.io/docs/",
                            description: "Orchestration"
                        },
                        {
                            title: "Monitoring",
                            link: "/monitoring",
                            docs: "https://prometheus.io/docs/",
                            description: "Monitoring"
                        },
                        {
                            title: "NGINX",
                            link: "/nginx",
                            docs: "https://www.nginx.com/resources/",
                            description: "Web Server"
                        },
                        {
                            title: "Terraform",
                            link: "/terraform",
                            docs: "https://www.terraform.io/docs",
                            description: "Infrastructure"
                        },
                        {
                            title: "Ansible",
                            link: "/ansible",
                            docs: "https://docs.ansible.com/ansible/latest/index.html",
                            description: "Automation"
                        },
                        {
                            title: "CI/CD",
                            link: "/cicd",
                            docs: "https://www.jenkins.io/doc/",
                            description: "CI/CD"
                        },
                        {
                            title: "Cloud",
                            link: "/cloud",
                            docs: "https://aws.amazon.com/documentation/",
                            description: "Cloud Services"
                        },
                        {
                            title: "Networking",
                            link: "/networking",
                            docs: "https://www.wireshark.org/docs/",
                            description: "Packet Analysis"
                        }
                    ].map((item, index) => (
                        <div key={index}>
                            <ul className="list-none space-y-2">
                                <li>
                                    <Link to={item.link} className="text-sm font-semibold hover:text-blue-500" onClick={() => window.scrollTo(0, 0)}>
                                        {item.title}
                                    </Link>
                                    <p className="text-xs">
                                        <a href={item.docs} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                            {item.description}
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
            <ul className="flex flex-wrap justify-center gap-4 p-2 text-sm">
                {["Home", "About", "Contact", "Services", "Blog", "Portfolio"].map((item, index) => (
                    <li key={index}>
                        <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500">{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-500">GitHub</a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-500">LinkedIn</a>
        </div>

        <p className="mt-4 text-xs text-gray-600">&copy; 2025 Jean-Michel. All rights reserved.</p>
    </footer>
);

export default Footer;