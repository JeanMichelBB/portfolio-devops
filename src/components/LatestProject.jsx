import React from "react";

const LatestProject = () => {
  return (
    <div className="bg-gray-800 p-6 shadow-lg py-5">
      <h2 className="text-white text-xl font-bold mb-5">Latest Project</h2>
      <div className="w-full h-[700px] rounded-md overflow-hidden">
        <iframe
          id="embedded-website-botwhy"
          src="https://botwhy.sacenpapier.org/"
          title="Embedded Website"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default LatestProject;