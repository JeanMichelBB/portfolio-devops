import React from 'react';
import { Link } from 'react-router-dom';
import linuxImage from '../assets/linuximage.jpg';
import gitImage from '../assets/gitimage.jpg';
import pythonImage from '../assets/pythonimage.jpg';
import dockerImage from '../assets/dockerimage.jpg';
import networkingImage from '../assets/networkingimage.jpg';
import kubernetesImage from '../assets/kubernetesimage.jpg';
import monitoringImage from '../assets/monitoringimage.jpg';
import nginxImage from '../assets/nginximage.jpg';
import terraformImage from '../assets/terraformimage.jpg';
import ansibleImage from '../assets/ansibleimage.jpg';
import cloudImage from '../assets/cloudimage.jpg';
import cicdImage from '../assets/cicdimage.jpg';

// Subject data
const subjects = [
    { name: "Linux", path: "/linux-bash", description: "Learn about Linux and its powerful command-line interface.", image: linuxImage, bg: "bg-green-200" },
    { name: "Git", path: "/git", description: "Version control with Git for collaborative development.", image: gitImage, bg: "bg-red-200" },
    { name: "Python", path: "/python", description: "Explore the Python programming language for various use cases.", image: pythonImage, bg: "bg-yellow-200" },
    { name: "Docker", path: "/docker", description: "Containerization with Docker for easier deployment.", image: dockerImage, bg: "bg-blue-200" },
    { name: "Networking", path: "/networking", description: "Understand networking and internet protocols.", image: networkingImage, bg: "bg-purple-200" },
    { name: "Kubernetes", path: "/kubernetes", description: "Container orchestration with Kubernetes for scalable apps.", image: kubernetesImage, bg: "bg-teal-200" },
    { name: "Monitoring", path: "/monitoring", description: "Learn about monitoring tools to track system performance.", image: monitoringImage, bg: "bg-orange-200" },
    { name: "NGINX", path: "/nginx", description: "Web server and reverse proxy with NGINX.", image: nginxImage, bg: "bg-gray-200" },
    { name: "Terraform", path: "/terraform", description: "Infrastructure as code with Terraform.", image: terraformImage, bg: "bg-indigo-200" },
    { name: "Ansible", path: "/ansible", description: "Automation with Ansible for configuration management.", image: ansibleImage, bg: "bg-pink-200" },
    { name: "Cloud", path: "/cloud", description: "Cloud computing technologies for modern applications.", image: cloudImage, bg: "bg-cyan-200" },
    { name: "CI/CD", path: "/cicd", description: "Continuous integration and delivery workflows.", image: cicdImage, bg: "bg-lime-200" },
];

const SubjectsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-[5px] border-white">
            {subjects.map((subject, index) => (
                <div key={index} className={`relative ${subject.bg} border-[5px] border-white flex`}>
                    <Link to={subject.path} className="block hover:underline z-10 relative w-full h-full p-4" onClick={() => window.scrollTo(0, 0)}>
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