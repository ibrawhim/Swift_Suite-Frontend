import React from 'react';
import './ErrorPage.css'; 

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div className="error-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">We apologize for the inconvenience. Please try again later.</p>
        <img src="/path/to/error-image.png" alt="Error Illustration" className="max-w-full h-auto mb-8" />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
