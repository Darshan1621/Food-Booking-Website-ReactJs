import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodMenu from './components/FoodMenu';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<FoodMenu />} />
            <Route path="/cart" element={<Cart />} />
           
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
