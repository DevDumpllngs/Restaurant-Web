import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-800"
      }`}
      style={{ height: "65px" }} 
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <h1 className="text-3xl font-bold font-['Cinzel'] text-gold transition-transform duration-300 hover:scale-110 hover:text-gold-dark">
          Chelsea
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="#/" // Cambiado a HashRouter
            className="relative px-4 py-2 text-lg font-medium text-white transition-transform duration-300 hover:text-gold hover:scale-105"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#/menu" // Cambiado a HashRouter
            className="relative px-4 py-2 text-lg font-medium text-white transition-transform duration-300 hover:text-gold hover:scale-105"
          >
            Menu
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#/about" // Cambiado a HashRouter
            className="relative px-4 py-2 text-lg font-medium text-white transition-transform duration-300 hover:text-gold hover:scale-105"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#/contact" // Cambiado a HashRouter
            className="relative px-4 py-2 text-lg font-medium text-white transition-transform duration-300 hover:text-gold hover:scale-105"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold transition-all duration-300 hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
