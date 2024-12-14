import React from "react";

const ItemCard = ({ item, onAddToCart, viewMode }) => {
  return (
    <div
      className={`border rounded-lg p-4 ${
        viewMode === "grid" ? "w-full" : "flex items-center space-x-4"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`${
          viewMode === "grid" ? "w-full h-64" : "w-96 h-64"
        } object-cover rounded-md`}
      />

      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-lg font-semibold text-[#5C4033]">${item.price}</p>
        <button
          onClick={onAddToCart}
          className="mt-2 bg-[#5C4033] text-white py-2 px-4 rounded-md max-w-44"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
