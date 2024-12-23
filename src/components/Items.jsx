import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import CartSideBar from "./CartSideBar";
import Header from "./Header";

const Items = () => {
  const defaultItems = [
    
    {
      id: 1734200204188,
      title: "Blue diamond",
      description: "My most fav!",
      price: 100,
      image:"https://i.pinimg.com/736x/d5/24/42/d52442ed27304dea8a4c306121801c17.jpg",
    },
  ];

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));

    if (!storedItems || storedItems.length === 0) {
      localStorage.setItem("items", JSON.stringify(defaultItems));
      setItems(defaultItems);
    } else {
      setItems(storedItems);
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const toggleCartSidebar = () => setCartVisible(!cartVisible);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  const textStyle = { fontFamily: "Raleway, sans-serif" };

  return (
    <div className="bg-[#FFFBEA] min-h-screen">
      <Header cartItems={cart} toggleSidebar={toggleCartSidebar} />

      <div className="flex justify-between p-4">
        <button
          className="bg-[#5C4033] text-white px-4 py-3 rounded "
          style={textStyle}
          onClick={toggleViewMode}
        >
          Toggle View
        </button>
      </div>

      <div
        className={`grid gap-6 px-8 py-4 ${
          viewMode === "grid" ? "grid-cols-3" : "grid-cols-1"
        }`}
        style={textStyle}
      >
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onAddToCart={() => handleAddToCart(item)}
            viewMode={viewMode}
          />
        ))}
      </div>

      {cartVisible && (
        <CartSideBar
          cartItems={cart}
          toggleSidebar={toggleCartSidebar}
          updateCart={updateCart}
        />
      )}
    </div>
  );
};

export default Items;
