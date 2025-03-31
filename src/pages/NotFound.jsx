// src/pages/NotFound.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;