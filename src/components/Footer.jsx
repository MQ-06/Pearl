import React from "react";

const Footer = () => {
  const textStyle = { fontFamily: "Raleway, sans-serif" };

  return (
    <div className="bg-[#FFFBEA] text-white py-4 mt-8 " style={textStyle}>
      <hr />
      <div className=" mx-auto text-center">
        <p className="text-lg font-medium text-black">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights
          Reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-black hover:underline transition">
            Privacy Policy
          </a>
          <a href="#" className="text-black hover:underline transition">
            Terms of Service
          </a>
          <a href="#" className="text-black hover:underline transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
