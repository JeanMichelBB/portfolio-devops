import React, { useEffect, useState } from "react";
import JiraFundamental from "../components/JiraFundamental";
import jira from "../assets/jira.png";

const Jira = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    return (
        <div
            className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
                bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
                bg-[position:101%_101%] sm:bg-[position:85%_130%] md:bg-[position:85%_110%]`}
            style={{
                backgroundImage: `url(${jira})`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Jira & Agile</h1>

                <JiraFundamental />

                {/* Personal Experience */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Jira</h2>
                    <p className="text-gray-600">
                        During my hands-on experience with Jira, I managed the creation and organization of project issues, tasks, and backlogs, implementing structured planning and tracking similar to GitHub’s project management functionality. By leveraging Jira’s Agile boards and customizable workflows, I was able to plan sprints, assign tasks, and monitor progress effectively. This approach allowed me to save significant time, maintain consistency across projects, and stay organized while ensuring all team activities were properly tracked and documented.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Alongside my Jira experience, I actively applied Agile principles such as iterative development, sprint planning, and daily stand-ups. I collaborated with team members to refine backlogs, prioritize tasks, and adapt plans based on feedback. This Agile approach helped improve team communication, enhance flexibility in project execution, and ensure continuous delivery of value.
                    </p>
                </section>

                {/* Real-World Projects */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">BotWhy</h3>
                        <p className="text-gray-700 mt-2">
                            A chatbot integrating OpenAI’s GPT-4o Mini and FastAPI. It provides an interactive experience where users can ask questions
                            and receive AI-generated responses in real time.
                        </p>
                        <a href="https://github.com/JeanMichelBB/BotWhy" className="text-blue-600 font-semibold mt-2 inline-block">
                            View on GitHub →
                        </a>
                        <a href="https://botwhy.sacenpapier.org/" className="text-blue-600 font-semibold ml-4 inline-block">
                            Live Demo →
                        </a>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Twitter Clone</h3>
                        <p className="text-gray-700 mt-2">
                            A Twitter clone built with React, FastAPI, and MySQL. It features user authentication, tweet posting, and a responsive design.
                            The backend is powered by FastAPI, and MySQL ensures data persistence and reliability.
                        </p>
                        <a href="https://github.com/JeanMichelBB/twitterclone" className="text-blue-600 font-semibold mt-2 inline-block">
                            View on GitHub →
                        </a>
                        <a href="https://twitterclone.sacenpapier.org" className="text-blue-600 font-semibold ml-4 inline-block">
                            Live Demo →
                        </a>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Apercu</h3>
                        <p className="text-gray-700 mt-2">
                            A web application showcasing my services and work. It serves as a portfolio, highlighting my skills and projects in an easy-to-navigate
                            and visually appealing way.
                        </p>
                        <a href="https://github.com/JeanMichelBB/apercu" className="text-blue-600 font-semibold mt-2 inline-block">
                            View on GitHub →
                        </a>
                        <a href="https://apercu.sacenpapier.org/" className="text-blue-600 font-semibold ml-4 inline-block">
                            Live Demo →
                        </a>
                    </div>
                </section>

                {/* Remaining sections (Kubernetes Home Lab, Integration, Proxmox, Best Practices, Resources) remain unchanged */}
            </div>
        </div>
    );
};

export default Jira;