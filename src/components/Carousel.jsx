import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apercuMobile from "../assets/apercumobile.jpg";
import apercuWeb from "../assets/apercuweb.jpg";
import botwhyMobile from "../assets/botwheymobile.jpg";
import botwhyWeb from "../assets/botwhyweb.jpg";
import grafanaMobile from "../assets/grafanamobile.jpg";
import grafanaWeb from "../assets/grafanaweb.jpg";
import twitterCloneMobile from "../assets/twitterclonemobile.jpg";
import twitterCloneWeb from "../assets/twittercloneweb.jpg";

const images = [
  {
    title: "Aperçu",
    mobileImage: apercuMobile,
    webImage: apercuWeb,
    link: "/projects/apercu",
    description: "Aperçu is a personal portfolio web app showcasing my services, experience, and pricing with a clean, user-friendly interface and secure client login.",
    otherLinks: [
      { label: "GitHub", url: "https://github.com/JeanMichelBB/apercu" },
      { label: "Live Demo", url: "https://apercu.sacenpapier.org" },
      { label: "More details", url: "/projects/apercu", isInternal: true }
    ]
  },
  {
    title: "BotWhy",
    mobileImage: botwhyMobile,
    webImage: botwhyWeb,
    link: "/projects/botwhy",
    description: "BotWhy is a full-stack chatbot app using GPT-4o Mini, Google Auth, FastAPI, and MySQL, offering a smart conversational experience in a modern React interface.",
    otherLinks: [
      { label: "GitHub", url: "https://github.com/JeanMichelBB/BotWhy" },
      { label: "Live Demo", url: "https://botwhy.sacenpapier.org" },
      { label: "More details", url: "/projects/botwhy", isInternal: true }
    ]
  },
  {
    title: "Grafana Dashboard",
    mobileImage: grafanaMobile,
    webImage: grafanaWeb,
    link: "/projects/grafana",
    description: "A Grafana-powered monitoring dashboard deployed with Docker and Prometheus, visualizing system metrics from my Ubuntu server and Docker containers.",
    otherLinks: [
      { label: "Live Demo", url: "https://snapshots.raintank.io/dashboard/snapshot/zcU3p7u4s6hH6T29bOku2VeEIYazaKaY" },
      { label: "More details", url: "/projects/grafana", isInternal: true }
    ]
  },
  {
    title: "Twitter Clone",
    mobileImage: twitterCloneMobile,
    webImage: twitterCloneWeb,
    link: "/projects/twitter-clone",
    description: "A full-stack Twitter clone with React, FastAPI, and MySQL, supporting tweeting, following, messaging, and responsive design for all devices.",
    otherLinks: [
      { label: "GitHub", url: "https://github.com/JeanMichelBB/twitterclone" },
      { label: "Live Demo", url: "https://twitterclone.sacenpapier.org" },
      { label: "More details", url: "/projects/twitter-clone", isInternal: true }
    ]
  }
];
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // new state
  const location = useLocation();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setProgress(0); // reset interval progress
  };
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0); // reset interval progress
  };

  // Scroll to section
  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Progress & auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) { // only update if not paused
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + 2;
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center">

      {/* Left Arrow */}
      <button
        className={`absolute ${isMobile ? "left-2 top-1/2 -translate-y-1/2 text-3xl p-2" : "md:-left-1 h-[600px] px-6 text-5xl"} font-bold text-white bg-blue-400 rounded-r-lg hover:bg-blue-500 z-20`}
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Main content */}
      <div className="flex w-full max-w-[1200px] flex-col md:flex-row relative">
        {/* Project Image */} 
        <div className={`${isMobile ? "h-full w-full  md:w-3/4"
           : "w-full md:w-3/4 h-[600px]"} relative`}>
          <Link to={images[index].link} className="block w-full h-full">
            <img
              src={isMobile ? images[index].mobileImage : images[index].webImage}
              alt={images[index].description}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>

          {/* Description overlay for mobile */}
          {isMobile && (
            <div className="absolute bottom-0 left-0 w-full p-2 bg-white/60 backdrop-blur-md rounded-t-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{images[index].title}</h3>
              <p className="text-xs font-medium text-gray-800">{images[index].description}</p>
            </div>
          )}

          {/* Pause/Play Button in botton-left corner */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className={`${isMobile ? "absolute bottom-25 left-5 bg-white/70 backdrop-blur-md rounded-full p-2 text-gray-800 hover:bg-white/90 transition-colors"
               : "absolute bottom-5 left-5 bg-white/70 backdrop-blur-md rounded-full p-2 text-gray-800 hover:bg-white/90 transition-colors"} font-bold`}
          >
            {isPaused ? "►" : "❚❚"}
          </button>
        </div>

        {/* Description for desktop */}
        {!isMobile && (
          <div className="w-1/4 p-6 flex flex-col bg-white/50 backdrop-blur-md rounded-lg shadow-lg my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{images[index].title}</h3>
            <p className="text-lg font-semibold text-gray-800">{images[index].description}</p>
            <div className="mt-4">
              {images[index].otherLinks.map((link, idx) =>
                link.isInternal ? (
                  <Link key={idx} to={link.url} className="text-blue-600 font-semibold hover:underline block mb-2">
                    {link.label} →
                  </Link>
                ) : (
                  <a key={idx} href={link.url} className="text-blue-600 font-semibold hover:underline block mb-2">
                    {link.label} →
                  </a>
                )
              )}
              </div>
          </div>
        )}
      </div>

      {/* Right Arrow */}
      <button
        className={`absolute ${isMobile ? "right-2 top-1/2 -translate-y-1/2 text-3xl p-2" : "md:-right-1 h-[600px] px-6 text-5xl"} font-bold text-white bg-blue-400 rounded-l-lg hover:bg-blue-500 z-20`}
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Progress bar */}
      <div className={`absolute bottom-0 left-0 w-full px-4 md:px-60`}>
        <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;