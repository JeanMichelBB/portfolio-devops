import React, { useEffect, useState } from "react";

const Monitoring = () => {
    const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
          window.scrollTo(0, 0);
            setTimeout(() => setIsVisible(true), 100);
        }, []);
        
    return (
      <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Monitoring</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            This page contains information about Monitoring. Here, you can learn more about Monitoring, its uses, and how it can help you in your work.
        </p>
      </div>
    );
  };
  
  export default Monitoring;