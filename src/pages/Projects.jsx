import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import botwhyImage from "../assets/botwhy.png"; // Importing images
import twitterImage from "../assets/x.png";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);



    return (
        <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
            {/* hidden ipint auto focus */}
            <input type="text" id="hidden-input" className="hidden" autoFocus />

            <article id="projects" className="article mx-auto px-4 sm:px-8 md:px-20 text-left">
                {/* Twitter Clone Project */}
                <section className="mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900">Twitter Clone</h3>
                    <iframe id="embedded-website-twitter" src="https://twitterclone.sacenpapier.org" title="Twitter Clone" className="w-full h-164 border mt-3"></iframe>
                    <img className="w-full mt-3 rounded-md" src={twitterImage} alt="Twitter Clone" />
                    <ul className="mt-3">
                        <li><a className="text-blue-500 hover:underline" href="https://twitterclone.sacenpapier.org" target="_blank" rel="noopener noreferrer">Website</a></li>
                        <li><a className="text-blue-500 hover:underline" href="https://github.com/JeanMichelBB/twitterclone" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        A Twitter clone built with React, FastAPI, and MySQL, featuring tweet creation, deletion, following, and liking functionalities. Hosted on an Ubuntu server.
                    </p>
                </section>
                {/* BotWhy Project */}
                <section className="mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900">BotWhy</h3>
                    <iframe id="embedded-website-botwhy" src="https://botwhy.sacenpapier.org/" title="BotWhy Website" className="w-full h-164 border mt-3"></iframe>
                    <img className="w-full mt-3 rounded-md" src={botwhyImage} alt="BotWhy" />
                    <ul className="mt-3">
                        <li><a className="text-blue-500 hover:underline" href="https://botwhy.sacenpapier.org/" target="_blank" rel="noopener noreferrer">Website</a></li>
                        <li><a className="text-blue-500 hover:underline" href="https://github.com/JeanMichelBB/BotWhy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        BotWhy is a chatbot integrating OpenAI’s GPT-4o Mini, Google Authentication, React with Vite, and FastAPI powered by MySQL. The application is Dockerized for scalability.
                    </p>
                </section>



                {/* apercu Project */}
                <section className="mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900">Apercu</h3>
                    <iframe id="embedded-website-apercu" src="https://apercu.sacenpapier.org/" title="apercu Website" className="w-full h-164 border mt-3"></iframe>
                    {/* <img className="w-full mt-3 rounded-md" src={apercuImage} alt="apercu" /> */}
                    <ul className="mt-3">
                        <li><a className="text-blue-500 hover:underline" href="https://apercu.sacenpapier.org/" target="_blank" rel="noopener noreferrer">Website</a></li>
                        <li><a className="text-blue-500 hover:underline" href="https://github.com/JeanMichelBB/apercu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        Aperçu is a web application designed to give clients an insight into my work, services, and expertise. This app offers an easy-to-navigate interface where clients can learn more about the services I provide, view pricing details, and find out more about my background and skills.</p>
                </section>

                {/* Grafana Dashboard */}
                <section className="mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900">Grafana Dashboard</h3>
                    <div className="grafana-container w-full mt-3">
                        <iframe id="embedded-website-grafana" src="https://snapshots.raintank.io/dashboard/snapshot/zcU3p7u4s6hH6T29bOku2VeEIYazaKaY" className="w-full h-164 border"></iframe>
                    </div>
                    <p className="text-gray-700 mt-2">
                        A comprehensive Grafana dashboard monitoring my Linux Ubuntu server, tracking CPU usage, memory consumption, disk I/O, and deployed Docker projects.
                    </p>
                </section>
            </article>

            <Link to="/" className="text-blue-500 hover:underline mt-6 inline-block">
                Go back to Home
            </Link>
        </div>
    );
};

export default Projects;