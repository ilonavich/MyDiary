import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-10 ">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} MyPersonalDiary. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
