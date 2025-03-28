// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
        const location = useLocation();
     const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
            const previousPath = sessionStorage.getItem("previousPath");
            const savedPosition = sessionStorage.getItem("scrollPosition");
            
            if (savedPosition && previousPath && location.pathname !== previousPath) {
                window.scrollTo(0, parseInt(savedPosition, 10));
                sessionStorage.removeItem("scrollPosition"); 
                sessionStorage.removeItem("previousPath"); 
              } else {
                  setTimeout(() => {
                      window.scrollTo(0, 0);
                  }, 0); 
            }
            setTimeout(() => setIsVisible(true), 100);
        }, [location]);
        
  return (
    <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Feel free to reach out to me for any inquiries or collaboration opportunities. I would love to hear from you!
      </p>

      <div className="max-w-xl mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;