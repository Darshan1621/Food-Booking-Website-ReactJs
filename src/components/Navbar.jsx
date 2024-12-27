import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Food Booking App</h1>
        <ul className="flex space-x-6 gap-4">
          <Link to='/' className="hover:text-yellow-400">Home</Link>
          <Link to='/menu' className="hover:text-yellow-400">Menu</Link>
          {/* <Link to='/cart' className="hover:text-yellow-400">Cart</Link> */}
          <Link to='/contact' className="hover:text-yellow-400">Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
