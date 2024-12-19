// src/Components/NoteCard.jsx

import React from "react";

const NoteCard = ({ title, description, image, date, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-md shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-2">{date}</p>
    </div>
  );
};

export default NoteCard;
