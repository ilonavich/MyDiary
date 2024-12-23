import React from "react";

function HeroSection({ openAddEntryModal }) {
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
          {/* <Button text="Add your note" /> */}
          <button
            className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300 ml-16 mt-4"
            onClick={openAddEntryModal}
          >
            Add Entry
          </button>
        </div>

        <div className="ml-2">
          <img
            src="/bgmain.jpg"
            alt="Image"
            className="w-[400px] h-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
