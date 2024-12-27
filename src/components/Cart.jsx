import React from "react";

const Cart = ({ cart, removeFromCart, decreaseQuantity, increaseQuantity }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>

      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 mb-4 shadow-lg rounded-lg">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-8" />
                <div>
                  <h3 className="font-semibold ml-5">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-red-600 text-2xl font-bold px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="hover:text-white hover:bg-green-600 font-bold text-green-600 text-xl px-2 py-1 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-bold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
