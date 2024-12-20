import React from "react";
import NoteCard from "./NoteCard";

const DiaryList = ({ entries, onEntryClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {entries.map((entry) => (
      <NoteCard
        key={entry.id}
        title={entry.title}
        description={entry.content.slice(0, 100)}
        image={entry.image}
        date={entry.date}
        onClick={() => onEntryClick(entry)}
      />
    ))}
  </div>
);

export default DiaryList;
