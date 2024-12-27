import React, { useState } from "react";
import Cart from "./Cart"; 

import SpringRolls from "../assets/foodmenu/Spring Rolls.jpg"; 
import GarlicBread from "../assets/foodmenu/Garlic Bread.jpg"; 
import Nachos from "../assets/foodmenu/Nachos.jpg"; 
import CaesarSalad from "../assets/foodmenu/Caesar Salad.jpg"; 
import MargheritaPizza from "../assets/foodmenu/Margherita-Pizza.jpg";
import GrilledChicken from "../assets/foodmenu/Grilled Chicken.jpg"; 
import PastaAlfredo from "../assets/foodmenu/Pasta Alfredo.jpg"; 
import VeggieBurger from "../assets/foodmenu/Veggie Burger.jpg"; 
import ClassicBurger from "../assets/foodmenu/Classic Burger.jpg"; 
import SpaghettiBolognese from "../assets/foodmenu/Spaghetti Bolognese.jpg"; 
import Cheesecake from "../assets/foodmenu/Cheesecake.jpg"; 
import BrownieSundae from "../assets/foodmenu/Brownie Sundae.jpg"; 
import Tiramisu from "../assets/foodmenu/Tiramisu.jpg"; 
import Lemonade from "../assets/foodmenu/Lemonade.jpg"; 
import IcedTea from "../assets/foodmenu/Iced Tea.jpg"; 
import Espresso from "../assets/foodmenu/Espresso.jpg"; 



const FoodMenu = () => {
  const [cart, setCart] = useState([]); // Track cart items
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input
  const [itemNotFound, setItemNotFound] = useState(false); // Track if the item is not found

  // Define menu items
  const menu = {
    Appetizers: [
      { id: 1, name: "Spring Rolls", price: 6.99, image: SpringRolls },
      { id: 2, name: "Garlic Bread", price: 4.99, image: GarlicBread },
      { id: 3, name: "Nachos", price: 7.99, image: Nachos },
      { id: 4, name: "Caesar Salad", price: 4.99, image: CaesarSalad },
    ],
    Mains: [
      { id: 5, name: "Pizza Margherita", price: 12.99, image: MargheritaPizza },
      { id: 6, name: "Grilled Chicken", price: 14.99, image: GrilledChicken },
      { id: 7, name: "Pasta Alfredo", price: 11.99, image: PastaAlfredo },
      { id: 8, name: "Veggie Burger", price: 9.99, image: VeggieBurger },
      { id: 9, name: "Classic Burger", price: 9.99, image: ClassicBurger  },
      { id: 10, name: "Spaghetti Bolognese", price: 10.99, image: SpaghettiBolognese },

    ],
    Desserts: [
      { id: 11, name: "Cheesecake", price: 6.99, image: Cheesecake },
      { id: 12, name: "Brownie Sundae", price: 7.99, image: BrownieSundae },
      { id: 13, name: "Tiramisu", price: 8.99, image: Tiramisu },
    ],
    Beverages: [
      { id: 14, name: "Lemonade", price: 3.99, image: Lemonade },
      { id: 15, name: "Iced Tea", price: 2.99, image: IcedTea },
      { id: 16, name: "Espresso", price: 4.99, image: Espresso },
    ],
  };

  // Add food item to the cart
  const addToCart = (food) => {
    const existingItemIndex = cart.findIndex((item) => item.id === food.id);
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { ...food, quantity: 1 };
      setCart([...cart, newItem]);
    }
    alert(`${food.name} added to the cart!`);
  };

  // Remove food item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Decrease the quantity of a food item
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Increase the quantity of a food item
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Update search term (lowercase for case insensitive)
  };

  // Filter menu items based on search term and check if item is found
  const filteredMenu = Object.keys(menu).reduce((acc, category) => {
    const filteredItems = menu[category].filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {});

  // Check if there are no items found in the entire menu
  const isItemFound = Object.keys(filteredMenu).length > 0;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Our Menu</h2>

      {/* Search bar */}
      <div className="mb-6 text-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for food..."
          className="p-2 border border-gray-300 rounded-md w-1/2 sm:w-1/2"
        />
      </div>

      {/* Show message if no items are found */}
      {!isItemFound && searchTerm && (
        <p className="text-center text-red-500">The item you are looking for is not found</p>
      )}

      {/* Display the filtered menu */}
      {Object.keys(filteredMenu).map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold mb-4">{category}</h3>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredMenu[category].map((food) => (
              <div key={food.id} className="bg-white shadow-lg rounded-lg p-4">
                <img src={food.image} alt={food.name} className="menu-images mx-auto w-full object-cover rounded-lg" />
                <h3 className="text-xl text-center font-semibold mt-4">{food.name}</h3>
                <p className="text-gray-600 text-center">${food.price.toFixed(2)}</p>
                <div className="text-center">
                <button
                  onClick={() => addToCart(food)}
                  className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Render the Cart component and pass cart data and functions for updating cart */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
    </div>
  );
};

export default FoodMenu;
