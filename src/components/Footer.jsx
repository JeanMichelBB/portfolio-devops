import React from 'react';
import ContactComponent from '../components/ContactComponent';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-100 opacity-90 text-center py-6 mt-auto px-4">
        <ContactComponent />
        <div className="m-4">
            <div className="text-left mx-auto max-w-4xl border-t border-gray-300">
                <h3 className="font-semibold text-sm mb-4 pt-6 ">Technologies & Services</h3>

                {/* Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-300 pb-6 pl-8">
                    {/** Technology Categories **/}
                    {[
                        {
                            title: "Linux",
                            link: "/linux-bash",
                            docs: "https://www.kernel.org/doc/html/latest/",
                            descriptions: [
                                { text: "Linux Basics & Commands", url: "https://www.kernel.org/doc/html/latest/" },
                                { text: "File System Hierarchy", url: "https://www.kernel.org/doc/html/latest/" }
                            ]
                        },
                        {
                            title: "Git",
                            link: "/git",
                            docs: "https://git-scm.com/doc",
                            descriptions: [
                                { text: "Version Control Basics", url: "https://git-scm.com/doc" },
                                { text: "Branching & Merging Strategies", url: "https://git-scm.com/doc" }
                            ]
                        },
                        {
                            title: "Python",
                            link: "/python",
                            docs: "https://docs.python.org/3/",
                            descriptions: [
                                { text: "Core Programming Concepts", url: "https://docs.python.org/3/" },
                                { text: "Object-Oriented Programming", url: "https://docs.python.org/3/tutorial/classes.html" }
                            ]
                        },
                        {
                            title: "Docker",
                            link: "/docker",
                            docs: "https://docs.docker.com/get-started/",
                            descriptions: [
                                { text: "Introduction to Containers", url: "https://docs.docker.com/get-started/" },
                                { text: "Docker Images & Containers", url: "https://docs.docker.com/get-started/part2/" }
                            ]
                        },
                        {
                            title: "Kubernetes",
                            link: "/kubernetes",
                            docs: "https://kubernetes.io/docs/",
                            descriptions: [
                                { text: "Cluster Management & Architecture", url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/" },
                                { text: "Deploying Applications", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/" }
                            ]
                        },
                        {
                            title: "Monitoring",
                            link: "/monitoring",
                            docs: "https://prometheus.io/docs/introduction/overview/",
                            descriptions: [
                                { text: "Introduction to Prometheus", url: "https://prometheus.io/docs/introduction/overview/" },
                                { text: "Setting Up Metrics & Alerts", url: "https://prometheus.io/docs/alerting/latest/alertmanager/" }
                            ]
                        },
                        {
                            title: "NGINX",
                            link: "/nginx",
                            docs: "https://www.nginx.com/resources/",
                            descriptions: [
                                { text: "Web Server & Reverse Proxy Setup", url: "https://www.nginx.com/resources/" },
                                { text: "Load Balancing & Caching", url: "https://www.nginx.com/resources/" }
                            ]
                        },
                        {
                            title: "Terraform",
                            link: "/terraform",
                            docs: "https://www.terraform.io/docs",
                            descriptions: [
                                { text: "Infrastructure as Code", url: "https://www.terraform.io/docs" },
                                { text: "Terraform Modules & Providers", url: "https://www.terraform.io/docs/modules/index.html" }
                            ]
                        },
                        {
                            title: "Cloud Computing",
                            link: "/cloud",
                            docs: "https://aws.amazon.com/documentation/",
                            descriptions: [
                                { text: "Cloud Infrastructure & Services", url: "https://aws.amazon.com/documentation/" },
                                { text: "AWS EC2 & Storage", url: "https://aws.amazon.com/ec2/" }
                            ]
                        },
                        {
                            title: "CI/CD",
                            link: "/cicd",
                            docs: "https://www.jenkins.io/doc/",
                            descriptions: [
                                { text: "Continuous Integration & Deployment", url: "https://www.jenkins.io/doc/" },
                                { text: "Building Pipelines with Jenkins", url: "https://www.jenkins.io/doc/book/pipeline/" }
                            ]
                        },
                        {
                            title: "Ansible",
                            link: "/ansible",
                            docs: "https://docs.ansible.com/ansible/latest/index.html",
                            descriptions: [
                                { text: "Automation & Configuration Management", url: "https://docs.ansible.com/ansible/latest/index.html" },
                                { text: "Playbooks & Roles", url: "https://docs.ansible.com/ansible/latest/user_guide/playbooks.html" }
                            ]
                        },
                        {
                            title: "Networking",
                            link: "/networking",
                            docs: "https://www.wireshark.org/docs/",
                            descriptions: [
                                { text: "Network Protocols & Packet Analysis", url: "https://www.wireshark.org/docs/" },
                                { text: "Wireshark for Troubleshooting", url: "https://www.wireshark.org/docs/" }
                            ]
                        }
                    ].map((item, index) => (
                        <div key={index}>
                            <ul className="list-none space-y-2">
                                <li>
                                    <Link to={item.link} className="text-sm font-semibold hover:text-blue-500" onClick={() => window.scrollTo(0, 0)}>
                                        {item.title}
                                    </Link>
                                    {item.descriptions.map((desc, idx) => (
                                        <p key={idx} className="text-xs">
                                            <Link
                                                to={desc.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-blue-500"
                                            >
                                                {desc.text}
                                            </Link>
                                        </p>
                                    ))}
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
                {["Home", "About", "Contact", "Projects"].map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="hover:text-blue-500"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/JeanMichelBB" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-500">GitHub</a>
            <a href="https://www.linkedin.com/in/jeanmichelbb" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-500">LinkedIn</a>
        </div>

        <p className="mt-4 text-xs text-gray-600">&copy; 2025 Jean-Michel. All rights reserved.</p>
    </footer>
);

export default Footer;