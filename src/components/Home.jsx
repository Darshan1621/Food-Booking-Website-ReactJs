import React from "react";
import { Link } from "react-router-dom";
// import homeimg from "../assets/home-img.avif";
import MargheritaPizza from "../assets/foodmenu/Margherita-Pizza.jpg";
import ClassicBurger from "../assets/foodmenu/Classic Burger.jpg"; 
import SpaghettiBolognese from "../assets/foodmenu/Spaghetti Bolognese.jpg"; 
import CaesarSalad from "../assets/foodmenu/Caesar Salad.jpg"; 

import '../App.css';

const Home = () => {
  const popularDishes = [
    { id: 1, name: "Margherita Pizza", price: 12.99, image: MargheritaPizza },
    { id: 2, name: "Classic Burger", price: 9.99, image:ClassicBurger  },
    { id: 3, name: "Spaghetti Bolognese", price: 14.99, image: SpaghettiBolognese },
    { id: 4, name: "Caesar Salad", price: 8.99, image: CaesarSalad },
  ];

  return (
    <div className="home">
        {/* <img src={homeimg} className="w-full" height={50}/> */}
      {/* Hero Section */}
      <section className="text-white py-16">
        <div className="container mx-auto  px-6 text-center py-4 ">
          <h1 className="flex-1 text-2xl font-bold mb-4">Delicious Food Delivered to You</h1>
          <p className="text-lg mb-6">
            Explore a variety of cuisines and order your favorite meals online.
          </p>
          <Link to='/menu' className="">
          <button className="bg-white text-yellow-400 font-bold py-3 px-6 rounded hover:bg-gray-100 mb-4">
            Order Now
          </button>
          </Link>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 ">
          <h2 className="text-2xl font-bold text-center my-8 pt-4">Popular Dishes</h2>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
            {popularDishes.map((dish) => (
                <div
                key={dish.id}
                className="bg-white mx-4 mb-5 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
               
                  <img src={dish.image} alt={dish.name} className="menu-images mx-auto mt-3 px-[20px] object-cover" />
                
                <div className="p-4">
                    <h3 className="text-xl font-bold text-center">{dish.name}</h3>
                    <p className="text-gray-600 text-center">${dish.price.toFixed(2)}</p>
                    <div className="pt-4 text-center">
                    <Link to='/menu' className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                        View
                    </Link>
                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-10  text-white ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="flex-1 text-2xl font-bold mb-4">Experience the Taste of Excellence</h2>
          <p className="text-lg mb-6">
            Get exclusive discounts on your first order.
          </p>
          <Link to='/menu'>
          <button className="bg-white hover:bg-yellow-400 hover:text-white text-yellow-400 font-bold py-3 px-6 rounded mb-4">
            Get Started
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
