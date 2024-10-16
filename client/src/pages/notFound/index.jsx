import React from 'react'

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 sm:text-8xl">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4 sm:text-3xl">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-gray-500 mt-2 sm:text-xl">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  )
}

export default NotFound;
