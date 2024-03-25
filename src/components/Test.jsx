import React from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Test Page</h1>
      <div className="mt-5">
        <Link to="/" className="mr-3 px-3 py-2 bg-black text-white rounded-md">
          Home
        </Link>
        <Link to="/about" className="px-3 py-2 bg-black text-white rounded-md">
          About
        </Link>
      </div>
    </div>
  );
};

export default TestPage;
