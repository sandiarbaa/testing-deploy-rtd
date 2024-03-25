import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="mt-5">
        <Link to="/about" className="px-3 py-2 bg-black text-white rounded-md">
          About
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
