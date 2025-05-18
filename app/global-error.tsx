"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 p-4">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center transform transition-all hover:scale-105">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">
          Oops! Something went wrong 😞
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We encountered an unexpected error. Please try again!
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-110"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
