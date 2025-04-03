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
  { mobileImage: apercuMobile, webImage: apercuWeb, link: "/projects/apercu" },
  { mobileImage: botwhyMobile, webImage: botwhyWeb, link: "/projects/botwhy" },
  { mobileImage: grafanaMobile, webImage: grafanaWeb, link: "/projects/grafana" },
  { mobileImage: twitterCloneMobile, webImage: twitterCloneWeb, link: "/projects/twitter-clone" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();

  // Auto-scroll to the correct section based on the URL hash
  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check if the screen size is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative w-full mx-auto overflow-hidden flex items-center justify-center border-b-10 border-white">
      <div className="relative w-full flex items-center justify-center">
        {/* Left Image acting as Button */}
        <img
          src={isMobile ? images[(index - 1 + images.length) % images.length].mobileImage : images[(index - 1 + images.length) % images.length].webImage}
          alt="Previous Slide"
          className="absolute left-0 w-1/4 h-full object-cover border-r-10 border-white cursor-pointer"
          onClick={prevSlide}
        />
        {/* Center Image wrapped in Link */}
        <Link to={images[index].link} className="w-1/2 h-100 sm:h-120 md:h-130">
          <img
            src={isMobile ? images[index].mobileImage : images[index].webImage}
            alt="Current Slide"
            className="w-full h-full object-cover z-10"
          />
        </Link>
        {/* Right Image acting as Button */}
        <img
          src={isMobile ? images[(index + 1) % images.length].mobileImage : images[(index + 1) % images.length].webImage}
          alt="Next Slide"
          className="absolute right-0 w-1/4 h-full object-cover border-l-10 border-white cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;