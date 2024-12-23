import React, { useState } from "react";

const EntryCard = ({ entry }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white border rounded shadow p-4 hover:shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{entry.title}</h3>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>

      {/* Modal for Full Entry Details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-2xl font-bold">{entry.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <p>{entry.content}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EntryCard;
