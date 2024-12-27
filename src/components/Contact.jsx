import React from "react";
import ContactImg2 from "../assets/contact-img2.jpg";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact flex justify-center items-center min-h-screen bg-gray-200">
      <div className="mx-auto text-2xl mt-4 max-w-4xl p-6 my-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        
        <div className="flex justify-center items-center">
          {/* Left side - Restaurant Image */}
          <div className="flex">
            <img
              src={ContactImg2}
              alt="Restaurant"
              className="w-[200px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Contact Details */}
          <div className="flex-1 ml-6">
            <p className="text-xl mb-2">
              <span className="font-semibold">Owner:</span> John Doe
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Email:</span> contact@restaurant.com
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Contact No:</span> (123) 456-7890
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Address:</span> 123 Food Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
