import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import banner from "../assets/banner.jpeg";
import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";

const Home = () => {
  const dishes = [dish1, dish2, dish3, dish4];
  const navigate = useNavigate(); // Hook de navegación

  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-hidden"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      {/* Top bar */}
      <div className="absolute top-0 w-full bg-black bg-opacity-50 text-white text-sm z-10">
        <div className="mx-auto w-[1280px] flex justify-between items-center py-2 px-4">
          <div>
            <span className="mr-4">📞 +123 4567 890</span>
            <span>✉️ email@example.com</span>
          </div>
          <div>Open hours: Monday - Sunday 8:00AM - 9:00PM</div>
        </div>
      </div>

      {/* Main content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-60 z-0">
        <h1 className="text-9xl font-birthstone mb-4">Chelsea</h1>
        <h2 className="text-4xl font-semibold mb-8">BEST RESTAURANT</h2>

        {/* Buttons */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => navigate('/contact')} // Redirección a Contact
            className="border border-white text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a Table
          </button>
          <button
            onClick={() => navigate('/menu')} // Redirección a Menu
            className="border border-white text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            View Menu
          </button>
        </div>

        {/* Separator */}
        <div className="w-[80%] mx-auto border-t border-gray-300 mt-20 mb-1 opacity-50"></div>

        {/* Featured dishes */}
        <div className="grid grid-cols-4 gap-4 w-[1280px] mx-auto mt-12">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-50 p-4 rounded-2xl text-black text-center shadow-md backdrop-blur-md"
            >
              <div
                className="h-16 w-16 mx-auto mb-4 bg-gray-300 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${dish})` }}
              ></div>
              <h3 className="font-bold text-lg font-oleo">
                Grilled Beef with Potatoes
              </h3>
              <p className="text-sm text-gray-600">Meat, Potatoes, Rice, Tomato</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
