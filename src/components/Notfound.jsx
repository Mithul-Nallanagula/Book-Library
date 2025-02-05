import React from 'react'
import { Link } from 'react-router-dom';

function Notfound() {
    return (
        <div className="h-[86vh] flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
            Go Back to Home
          </Link>
        </div>
      );
}

export default Notfound