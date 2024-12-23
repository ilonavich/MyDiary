import React, { useState, useEffect } from "react";

const Affirmation = () => {
  const [affirmation, setAffirmation] = useState("");

  const affirmations = [
    "You are capable of achieving great things.",
    "Every day is a new beginning.",
    "You deserve to be happy and successful.",
    "Believe in yourself and all that you are.",
    "Challenges are opportunities in disguise.",
    "Your potential is limitless.",
    "Focus on progress, not perfection.",
    "You are loved, valued, and appreciated.",
  ];

  // Fetch a random affirmation
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  }, []);

  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-900 p-4 rounded-md my-6">
      <p className="text-lg font-semibold">{affirmation}</p>
    </div>
  );
};

export default Affirmation;
