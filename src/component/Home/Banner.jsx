
import React from 'react'

function Banner() {
  return (
   
          <div className="relative bg-blue-600 text-white py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
              <p className="mt-4 text-lg md:text-xl">
                Discover amazing features and take your experience to the next level.
              </p>
              <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition">
                Get Started
              </button>
            </div>
          </div>
        );
      }
    

export default Banner