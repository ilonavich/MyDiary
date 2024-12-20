import React, { useState } from "react";
import Button from "./Button";
import NoteCard from "./NoteCard";
//suggestion Ilona
import DiaryEntriesManager from "./DiaryEntriesManager";

const MainPage = () => {
  const diaryEntries = [
    {
      id: 1,
      title: "My first diary entry",
      content: "This is the content of the first entry.",
      image: "https://via.placeholder.com/150",
      date: "2024-12-18",
    },
    {
      id: 2,
      title: "My second entry",
      content: "Here is some content for the second diary entry.",
      image: "https://via.placeholder.com/150",
      date: "2024-12-17",
    },
    {
      id: 3,
      title: "Affirmations for today",
      content: "Affirmations to boost positivity and focus.",
      image: "https://via.placeholder.com/150",
      date: "2024-12-16",
    },
  ];

  const sortedEntries = diaryEntries.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const [selectedEntry, setSelectedEntry] = useState(null);

  const openModal = (entry) => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  return (
    <div>
      <div className="h-[80vh] bg-white flex justify-between items-center text-black px-10">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-semibold ml-16 mb-4">
            Start your journaling journey today.
          </h2>
          <p className="text-lg md:text-xl ml-16 mb-4">
            Keep track of your thoughts, goals, and reflections. It's your space
            for growth.
          </p>

          <Button text="Add your note" />
        </div>

        <div className="ml-2">
          <img
            src="/bgmain.jpg"
            alt="Image"
            className="w-[400px] h-[450px] object-cover"
          />
        </div>
      </div>

      <div className="px-10 py-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEntries.map((entry) => (
            <NoteCard
              key={entry.id}
              title={entry.title}
              description={entry.content.slice(0, 100)}
              image={entry.image}
              date={entry.date}
              onClick={() => openModal(entry)}
            />
          ))}
        </div>
      </div>

      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md w-4/5 md:w-1/2">
            <h3 className="text-2xl font-semibold">{selectedEntry.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{selectedEntry.date}</p>
            <img
              src={selectedEntry.image}
              alt={selectedEntry.title}
              className="mb-4"
            />
            <p>{selectedEntry.content}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
