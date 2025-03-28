import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Terraform = () => {
        const location = useLocation();
    
        useEffect(() => {
            const previousPath = sessionStorage.getItem("previousPath");
            const savedPosition = sessionStorage.getItem("scrollPosition");
            window.scrollTo(0, 0);
            
            if (savedPosition && previousPath && location.pathname !== previousPath) {
                window.scrollTo(0, parseInt(savedPosition, 10));
                sessionStorage.removeItem("scrollPosition"); // Clear after applying
                sessionStorage.removeItem("previousPath"); 
            }
        }, [location]);
        
    return (
      <div className="min-h-screen text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Terraform</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            This page contains information about Terraform. Here, you can learn more about Terraform, its uses, and how it can help you in your work
        </p>
      </div>
    );
  };
  
  export default Terraform;