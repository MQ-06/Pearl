 import React from "react";

const CartSidebar = ({ cartItems, toggleSidebar, updateCart }) => {
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const totalAmount = cartItems.length
    ? cartItems
        .reduce((total, item) => {
          const price =
            typeof item.price === "string"
              ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
              : item.price;

          const quantity = parseInt(item.quantity, 10);
          if (!isNaN(price) && !isNaN(quantity)) {
            return total + price * quantity;
          }
          return total;
        }, 0)
        .toFixed(2)
    : "0.00";

  return (
    <div className="fixed top-0 right-0 bg-[#FFFBEA] w-1/3 h-full shadow-lg p-6 border-l-4 border-[#5C4033]">
      <button
        className="absolute top-4 right-4 text-2xl text-[#5C4033] hover:text-black transition"
        onClick={toggleSidebar}
      >
        ×
      </button>
      <h2 className="text-3xl text-[#5C4033] mb-6 font-greatVibes">
        Shopping Cart
      </h2>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center mb-6 p-4 border-b border-gray-200"
          >
            <div className="flex-1">
              <span className="text-lg font-medium">{item.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleDecreaseQuantity(item.id)}
                className="px-4 py-2 bg-[#5C4033] text-white rounded-full hover:bg-[#3E2A27] transition"
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => handleIncreaseQuantity(item.id)}
                className="px-4 py-2 bg-[#5C4033] text-white rounded-full hover:bg-[#3E2A27] transition"
              >
                +
              </button>
            </div>
            <div className="flex-1 text-right">
              <span className="text-lg font-medium">
                $
                {(typeof item.price === "string"
                  ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                    item.quantity
                  : item.price * item.quantity
                ).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="ml-4 text-red-500 hover:text-red-700 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <strong className="text-xl text-[#5C4033]">Total:</strong>
        <span className="text-xl font-semibold text-[#5C4033]">
          ${totalAmount}
        </span>
      </div>
    </div>
  );
};

export default CartSidebar;
