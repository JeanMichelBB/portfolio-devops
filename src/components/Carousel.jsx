import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yellow from "../assets/yellow.jpeg";
import red from "../assets/red.jpg";
import green from "../assets/green.jpeg";
import blue from "../assets/blue.jpeg";

const images = [
  { image: yellow, link: "/page-1" },
  { image: red, link: "/page-2" },
  { image: green, link: "/page-3" },
  { image: blue, link: "/page-4" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden flex items-center justify-center border-b-10 border-white">
      <div className="relative w-full flex items-center justify-center">
        {/* Left Image acting as Button */}
        <img
          src={images[(index - 1 + images.length) % images.length].image}
          alt="Previous Slide"
          className="absolute left-0 w-1/4 h-110 object-cover border-r-10 border-white cursor-pointer transition-opacity duration-500 opacity-70 hover:opacity-100"
          onClick={prevSlide}
        />
        {/* Center Image wrapped in Link */}
        <Link to={images[index].link} className="w-1/2 h-110">
          <img
            src={images[index].image}
            alt="Current Slide"
            className="w-full h-full object-cover z-10 transition-opacity duration-500 opacity-100"
          />
        </Link>
        {/* Right Image acting as Button */}
        <img
          src={images[(index + 1) % images.length].image}
          alt="Next Slide"
          className="absolute right-0 w-1/4 h-110 object-cover border-l-10 border-white cursor-pointer transition-opacity duration-500 opacity-70 hover:opacity-100"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;
