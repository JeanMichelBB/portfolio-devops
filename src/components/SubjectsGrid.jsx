import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import git from '../assets/git.jpg';
import linux from '../assets/linux.jpg';
import python from '../assets/python.jpg';
import docker from '../assets/docker.jpg';
import networking from '../assets/networking.jpg';
import kubernetes from '../assets/kubernetes.jpg';
import monitoring from '../assets/monitoring.jpg';
import nginx from '../assets/nginx.jpg';
import terraform from '../assets/terraform.jpg';
import ansible from '../assets/ansible.jpg';
import cloud from '../assets/cloud.jpg';
import cicd from '../assets/cicd.jpg';

// Subject data
const subjects = [
    { name: "Linux", path: "/linux-bash", description: "Learn about Linux and its powerful command-line interface.", image: linux, bg: "bg-green-200" },
    { name: "Git", path: "/git", description: "Version control with Git for collaborative development.", image: git, bg: "bg-red-200" },
    { name: "Python", path: "/python", description: "Explore the Python programming language for various use cases.", image: python, bg: "bg-yellow-200" },
    { name: "Docker", path: "/docker", description: "Containerization with Docker for easier deployment.", image: docker, bg: "bg-blue-200" },
    { name: "Networking", path: "/networking", description: "Understand networking and internet protocols.", image: networking, bg: "bg-purple-200" },
    { name: "Kubernetes", path: "/kubernetes", description: "Container orchestration with Kubernetes for scalable apps.", image: kubernetes, bg: "bg-teal-200" },
    { name: "Monitoring", path: "/monitoring", description: "Learn about monitoring tools to track system performance.", image: monitoring, bg: "bg-orange-200" },
    { name: "NGINX", path: "/nginx", description: "Web server and reverse proxy with NGINX.", image: nginx, bg: "bg-gray-200" },
    { name: "Terraform", path: "/terraform", description: "Infrastructure as code with Terraform.", image: terraform, bg: "bg-indigo-200" },
    { name: "Ansible", path: "/ansible", description: "Automation with Ansible for configuration management.", image: ansible, bg: "bg-pink-200" },
    { name: "Cloud", path: "/cloud", description: "Cloud computing technologies for modern applications.", image: cloud, bg: "bg-cyan-200" },
    { name: "CI/CD", path: "/cicd", description: "Continuous integration and delivery workflows.", image: cicd, bg: "bg-lime-200" },
];

const SubjectsGrid = () => {
    const location = useLocation();

    const handleClick = (path) => {
        // Save current scroll position
        sessionStorage.setItem("scrollPosition", window.scrollY);
        sessionStorage.setItem("previousPath", location.pathname);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-[5px] border-white">
            {subjects.map((subject, index) => (
                <div key={index} className={`relative ${subject.bg} border-[5px] border-white flex`}>
                    <Link 
                        to={subject.path} 
                        className="block hover:underline z-10 relative w-full h-full p-4" 
                        onClick={() => handleClick(subject.path)}
                    >
                        <div className="flex w-full flex-col md:flex-row">
                            {/* Image */}
                            <div className="relative w-full md:w-2/3 h-60">
                                <img
                                    src={subject.image}
                                    alt={subject.name}
                                    className="w-full h-60 object-cover"
                                    style={{ objectPosition: 'top' }}
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center p-4 w-full md:w-1/3 bg-white/50">
                                <h3 className="text-xl font-semibold">{subject.name}</h3>
                                <p className="text-lg mt-2">{subject.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SubjectsGrid;