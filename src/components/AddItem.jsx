import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AddItem = ({ updateItemsList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!title || !description || !price || !image) {
      return "All fields are required.";
    }

    if (price < 0) {
      return "Price cannot be negative.";
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(image)) {
      return "Please enter a valid image URL.";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    const newItem = {
      id: Date.now(),
      title,
      description,
      price,
      image,
    };

    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    storedItems.push(newItem);
    localStorage.setItem("items", JSON.stringify(storedItems));

    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setErrorMessage("");

    updateItemsList();

    navigate("/");
  };
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
  const textStyle = { fontFamily: "Raleway, sans-serif" };

  return (
    <div className="bg-[#FFFBEA] min-h-screen ">
      <Header cartItems={cart} toggleSidebar={toggleCartSidebar} />
      <div className="max-w-xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-4 font-greatVibes text-center">
          Add New Item
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md space-y-4"
        >
          {errorMessage && (
            <div className="bg-red-200 text-red-700 p-2 rounded mb-4">
              {errorMessage}
            </div>
          )}

          <div className="mb-4" style={textStyle}>
            <label className="block font-semibold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border "
              required
            />
          </div>

          <div className="mb-4" style={textStyle}>
            <label className="block font-semibold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border "
              required
            />
          </div>

          <div className="mb-4" style={textStyle}>
            <label className="block font-semibold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border "
              required
              min="0"
            />
          </div>

          <div className="mb-4" style={textStyle}>
            <label className="block font-semibold mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#5C4033] text-white py-2 px-4 rounded-full w-full"
            style={textStyle}
          >
            Add Item
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddItem;
