import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white mb-12 py-4 px-4 sm:px-4 lg:px-12">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl tracking-widest font-bold">LOGO</h1>
          </div>
          <div className="flex items-center space-x-6 lg:space-x-12">
            <div className="hover:text-red-500 hover:cursor-pointer">Home</div>
            <div className="hover:text-red-500 hover:cursor-pointer">Shop</div>
            <div className="hover:text-red-500 hover:cursor-pointer">About</div>
            <div className="hover:text-red-500 hover:cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
