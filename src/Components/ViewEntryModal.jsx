import React from "react";

const ViewEntryModal = ({ entry, onClose }) =>
  entry && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md w-4/5 md:w-1/2">
        <h3 className="text-2xl font-semibold">{entry.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
        <img src={entry.image} alt={entry.title} className="mb-4" />
        <p>{entry.content}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );

export default ViewEntryModal;
