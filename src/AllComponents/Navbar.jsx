import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <div className="w-full flex flex-col">
      {/* Top Contact Info */}
      <ul className="flex justify-center items-center py-6  gap-10">
        <li className=" text-green-400 font-bold text-xl">8799841461</li>
        <li className=" text-green-400 font-bold text-xl">pratham@gmail.com</li>
      </ul>

      {/* Navbar */}
      <div
        className={`w-full h-16 fixed  z-10 bg-white shadow-inner transition-all duration-300 ${
          isScrolled ? "shadow-lg bg-green-50 top-0" : " top-16"
        } flex justify-between items-center px-12`}
      >
        <ul>
          <p>icon</p>
        </ul>

        <ul className="flex justify-center items-center space-x-6 group">
          <li className="hover:text-green-400 cursor-pointer transition-all">
            Home
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-all">
            About
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-all">
            Our Services
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-all">
            Our Packages
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-all">
            Portfolio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
