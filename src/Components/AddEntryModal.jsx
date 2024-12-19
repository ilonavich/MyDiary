import React, { useState } from "react";

const AddEntryModal = ({ isOpen, closeModal, addEntry }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title || !date || !image || !content) {
      setError("All fields are required!");
      return;
    }

    const newEntry = { title, date, image, content };

    addEntry(newEntry);
    setError("");
    closeModal();
  };

  const handleClose = () => {
    setTitle("");
    setDate("");
    setImage("");
    setContent("");
    setError("");
    closeModal();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-md w-4/5 md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Add New Entry</h3>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-lg">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-lg">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-lg">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              Add Entry
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md ml-2"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default AddEntryModal;
