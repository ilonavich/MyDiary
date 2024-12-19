import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300 ml-16 mt-4">
      {text}
    </button>
  );
};

export default Button;
