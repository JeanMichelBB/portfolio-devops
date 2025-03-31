import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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


const subjects = [
    { name: "Linux", path: "/linux-bash", description: "Deep understanding of Linux systems, terminal commands, and automation.", image: linux, bg: "bg-green-200" },
    { name: "Git", path: "/git", description: "Proficient in Git workflows, branching strategies, and collaborative development.", image: git, bg: "bg-red-200" },
    { name: "Python", path: "/python", description: "Experience in Python for scripting, automation, web development, and data processing.", image: python, bg: "bg-yellow-200" },
    { name: "Docker", path: "/docker", description: "Skilled in containerization, Docker Compose, and image optimization.", image: docker, bg: "bg-blue-200" },
    { name: "Networking", path: "/networking", description: "Strong grasp of network protocols, security, and system architecture.", image: networking, bg: "bg-purple-200" },
    { name: "Kubernetes", path: "/kubernetes", description: "Knowledge of Kubernetes for managing containerized applications at scale.", image: kubernetes, bg: "bg-teal-200" },
    { name: "Monitoring", path: "/monitoring", description: "Experience with system monitoring, metrics collection, and observability tools.", image: monitoring, bg: "bg-orange-200" },
    { name: "NGINX", path: "/nginx", description: "Expertise in NGINX for load balancing, reverse proxying, and web serving.", image: nginx, bg: "bg-gray-200" },
    { name: "Terraform", path: "/terraform", description: "Infrastructure as code (IaC) using Terraform for cloud resource management.", image: terraform, bg: "bg-indigo-200" },
    { name: "Ansible", path: "/ansible", description: "Automating system configuration and deployment with Ansible playbooks.", image: ansible, bg: "bg-pink-200" },
    { name: "Cloud", path: "/cloud", description: "Hands-on experience with cloud platforms, architecture, and scalability.", image: cloud, bg: "bg-cyan-200" },
    { name: "CI/CD", path: "/cicd", description: "Building and maintaining automated CI/CD pipelines for software deployment.", image: cicd, bg: "bg-lime-200" },
];

const SubjectsGrid = () => {
    const navigate = useNavigate();

    
    const handleLinkClick = (path) => {
        sessionStorage.setItem('scrollPosition', window.scrollY); 
        navigate(path); 
    };

    useEffect(() => {
        const savedPosition = sessionStorage.getItem('scrollPosition');

        if (window.location.hash === '' || window.location.hash === '#/') {
            window.scrollTo(0, 0);
        } else if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition)); 
            sessionStorage.removeItem('scrollPosition'); 
        }
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-[5px] border-white">
            {subjects.map((subject, index) => (
                <div key={index} className={`relative ${subject.bg} border-[5px] border-white flex`}>
                    <button
                        onClick={() => handleLinkClick(subject.path)} 
                        className="block hover:underline z-10 relative w-full h-full p-4"
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
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SubjectsGrid;