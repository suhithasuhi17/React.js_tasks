import React, { useState } from 'react';

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      name: "Ride More, Pay Less – Grab Exclusive Bus Offers Now!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmf91woAny7atl8TnjqmTzPvifJj9aW3QJQ&s",
    },
    {
      name: "Soar High with Low Prices – Book Your Flight Deals Today",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-international-travel-concept-blue-plane-soaring-above-the-clouds-in-3d-image_3633063.jpg",
    },
    {
      name: "Fast Tracks to Savings – Unmissable Train Offers Await!",
      image: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/5/11/0/CI_AlaskaRailroadGlennAronwits_AlaskaRailroad_TrainTrips.jpg.rend.hgtvcom.616.462.suffix/1526035106011.jpeg",
    },
    {
      name: "Hit the Road with Budget-Friendly Bus Deals!",
      image: "https://media.istockphoto.com/id/1154164634/photo/white-bus-traveling-on-the-asphalt-road-around-line-of-trees-in-rural-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=e7W4o2ajRuKWIFkrO7Imkg_azl79fOi3sJ7eacDEUNQ=",
    },
    {
      name: "Hop On and Save More – Exclusive Bus Ticket Discounts!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtvLENRJUDRaxjVMe6W5Rnh91KkxYgXi9iQ&s",
    },
    {
      name: "Fast Tracks to Savings – Unmissable Train Offers Await!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsgPO_0Vw2Z6np5Exz0RRgVfpUDORKk5EqwkrNS6jsfzCXCs_6S9gYpxSIlEhBAJOn8w&usqp=CAU",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  
    const aboutUsPoints = [
      { id: 1, text: "Passionate Travel Experts - We specialize in crafting unforgettable travel experiences tailored to your needs." },
      { id: 2, text: "Our Mission - Making travel easy, enjoyable, and accessible for everyone." },
      { id: 3, text: "Global Partnerships - Collaborating with top airlines, hotels, and tour operators for competitive pricing and exclusive deals." },
      { id: 4, text: "Travel for All - Whether you seek adventure, relaxation, or cultural exploration, we’re here to make your journey seamless." },
    ];
  
    const whyChooseUsPoints = [
      { id: 1, text: "Personalized Travel Plans - Customized itineraries that match your preferences, budget, and travel style." },
      { id: 2, text: "Seamless Booking Experience - An easy-to-use platform for booking flights, accommodations, and activities effortlessly." },
      { id: 3, text: "24/7 Customer Support - Round-the-clock assistance to handle your queries or emergencies." },
      { id: 4, text: "Best Price Guarantee - Exclusive deals and competitive pricing from leading travel providers." },
      { id: 5, text: "End-to-End Solutions - Comprehensive services, including visa assistance, local guides, and more." },
      { id: 6, text: "Sustainable Travel Options - Promoting eco-friendly travel with responsible tourism operators." },
      { id: 7, text: "Unforgettable Experiences - Luxury retreats, family vacations, solo adventures—designed to exceed your expectations." },
    ];
  return (
    <div>
      <section
        className="relative flex flex-col items-center justify-center text-center bg-cover bg-center py-16 text-white"
        style={{
          backgroundImage: "url('https://wallpapers.com/images/featured/travel-laptop-0m6r2w9ywrwtb81n.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">"Discover the World, One Click Away!"</h1>
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 text-gray-800 rounded-l-full focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-full">
            <span className="material-icons">search</span>
          </button>
        </div>
      </section>

      <section className="  py-5 bg-gray-100">
        <h2 className="text-center text-4xl font-bold mb-8">Explore</h2>
        <div className="flex items-center justify-center px-8 ">
          <button
            onClick={handlePrev}
            className="mr-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            &#8592;
          </button>
          <div className="flex space-x-4 w-full overflow-hidden ">
            {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300" 
              >
                <div className="h-40  bg-gray-300 flex items-center justify-center rounded-t-2xl border-b-4 border-purple-700">
                  <img src={item.image} alt={item.name} className="h-full " />
                </div>
                <div className="p-4 text-lg font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            &#8594;
          </button>
        </div>
      </section>

      <section className=" py-5 bg-blue-50">
        <h2 className="text-center text-4xl font-bold mb-8">Overview</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 bg-blue-100 p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Us</h2>
        <ul className="list-disc pl-6 space-y-2">
          {aboutUsPoints.map((point) => (
            <li key={point.id} className="text-gray-700">
              <span className="font-semibold">{point.text.split(" - ")[0]}</span> - {point.text.split(" - ")[1]}
            </li>
          ))}
        </ul>
          </div>
          <div className="flex-1 bg-green-100 p-8">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Why Choose Us</h2>
        <ul className="list-disc pl-6 space-y-2">
          {whyChooseUsPoints.map((point) => (
            <li key={point.id} className="text-gray-700">
              <span className="font-semibold">{point.text.split(" - ")[0]}</span> - {point.text.split(" - ")[1]}
            </li>
          ))}
        </ul> 
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
