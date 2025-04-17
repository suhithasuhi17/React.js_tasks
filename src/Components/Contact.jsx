
import React, { useState } from 'react';
import tickett from '../assets/tickett.svg';

const Contact = () => {
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your trip booking request has been submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      date: '',
      message: '',
    });
  };

  return (
    <div className="flex  flex-row gap-15 min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className=" ml-10 bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Plan Your Adventure</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-semibold text-gray-700">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter your destination"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share any specific requirements or details"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-none"
          >
            Submit Request
          </button>
        </form>
      </div>

     
      
    <div className="flex items-center justify-center  mb-30">
      <div className="  rounded-2xl  text-center relative">
      
        <div className="relative flex items-center justify-center">
            <img src={tickett} alt="ticket"/>
        </div>

        
        <h1 className="text-xl  font-bold  text-gray-800 animate-fade-in">
          Your Gateway to Seamless Trip Booking!
        </h1>
        <p className="text-gray-600 ">
          Book tickets, explore destinations, and create unforgettable memories.
        </p>
      </div>
    </div>
  </div>
    
  );
};

 export default Contact;
