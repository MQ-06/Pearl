 import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartItems, toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-[#FFFBEA] text-[#101010] font-sans">
      <div className="text-5xl font-greatVibes italic">Pearl</div>
      <ul className="flex space-x-8 text-sm font-medium">
        <li className="hover:text-black hover:underline text-[#5C4033]">
          <a href="/">HOME</a>
        </li>
        <li className="hover:text-black hover:underline text-[#5C4033]">
          <a href="/list-items">ITEMS LIST</a>
        </li>
        <li className="hover:text-black hover:underline text-[#5C4033]">
          <a href="/add-item">ADD ITEM</a>
        </li>
      </ul>
      <ul className="flex space-x-4 text-sm">
        <li>
          <button
            onClick={toggleSidebar} // Trigger sidebar toggle when clicked
            className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            <FaShoppingCart className="text-[#5C4033]" />
            <span className="text-gray-800 font-medium">
              My Cart ({cartItems.length})
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
