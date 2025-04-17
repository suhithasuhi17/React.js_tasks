import React, { useState } from "react";
const Header = () => {
  const [showLocations, setShowLocations] = useState(false);
  const locations = ["chennai", "bangalore", "coimbatore", "US"];
    return(
<div >
<header className="bg-blue-400 text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50">
  <div className="flex items-center space-x-4">
    <div className="text-2xl font-bold font-weight: 800">TripTales</div>
    <nav className="space-x-4 pl-30">
      <a href="#" className="hover:text-gray-400">Home</a>
      <a href="#" className="hover:text-gray-400">About</a>
   
      <div className="relative inline-block">
        <button
          onClick={() => setShowLocations(!showLocations)}
          className="hover:text-gray-400 focus:outline-none"
        >
          Location
        </button>
        {showLocations && (
          <ul className="absolute bg-white text-gray-800 shadow-lg mt-2 rounded">
            {locations.map((location, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>
      <a href="#" className="hover:text-gray-400">Contact</a>
    </nav>
  </div>
  <div className="space-x-4">
    
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
  </div>
            </header>
            </div>
            )}

export default Header;
