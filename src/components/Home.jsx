import React from "react";
import Header from "./Header";
import necklace from "../assets/necklaces.jpg";
import person from "../assets/a girl.jpg";
import bracelette from "../assets/Classy watch.jpg";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const toggleCartSidebar = () => setCartVisible(!cartVisible);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };
  return (
    <div className="bg-[#FFFBEA]">
      <Header cartItems={cart} toggleSidebar={toggleCartSidebar} />

      <div className="grid grid-cols-3 gap-8 px-8 py-12 relative bg-[#FFFBEA]">
        <div className="col-span-0 flex flex-col space-y-4">
          <img
            src={necklace}
            alt="Earrings"
            className="w-[240px] h-50 object-cover shadow-sm ml-20"
          />
        </div>

        <div className="col-span-1 relative">
          <img
            src={person}
            alt="Person"
            className="w-full h-full object-cover shadow-sm"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-6">
            <p
              className="absolute text-[80px] font-serif leading-none -bottom-28 -left-80"
              style={{
                fontFamily: "Raleway, serif",
                color: "#1C2A3A",
                whiteSpace: "nowrap",
              }}
            >
              Crafting
            </p>
            <p
              className="relative text-[80px] font-bold leading-none top-40"
              style={{
                fontFamily: "Raleway, serif",
                color: "white",
                marginLeft: "-10px",
              }}
            >
              memories
            </p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-evenly">
          <img
            src={bracelette}
            alt="Bracelet"
            className="w-[140px] h-40 object-cover shadow-sm ml-44"
          />
          <div className="px-8 mt-6">
            <p className="text-left text-lg font-light text-gray-800 max-w-64">
              Elevate your style game with our just-in trendsetting collection
              <span className="font-bold italic"> "Mystical Mirage"</span>
            </p>
            <div className="text-left mt-4">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 transition text-left"
              >
                Discover →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
