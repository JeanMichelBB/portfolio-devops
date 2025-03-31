import React, { useEffect, useState } from "react";

const NGINX = () => {
    const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {        
            window.scrollTo(0, 0);   
            setTimeout(() => setIsVisible(true), 100);
        }, []);
        
    return (
      <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">NGINX</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            This page contains information about NGINX. Here, you can learn more about NGINX, its uses, and how it can help you in your work.
        </p>
      </div>
    );
  };
  
  export default NGINX;