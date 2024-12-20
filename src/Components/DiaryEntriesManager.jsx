import React, { useState } from "react";
import DiaryList from "./DiaryList";
import AddEntryModal from "./AddEntryModal";
import ViewEntryModal from "./ViewEntryModal";

const DiaryEntriesManager = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const addEntry = (newEntry) => {
    setEntries((prev) =>
      [...prev, newEntry].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  const openAddEntryModal = () => setIsAddModalOpen(true);
  const closeAddEntryModal = () => setIsAddModalOpen(false);

  const openViewModal = (entry) => setSelectedEntry(entry);
  const closeViewModal = () => setSelectedEntry(null);

  return (
    <div>
      <button
        onClick={openAddEntryModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Entry
      </button>

      <DiaryList entries={entries} onEntryClick={openViewModal} />

      {selectedEntry && (
        <ViewEntryModal entry={selectedEntry} onClose={closeViewModal} />
      )}

      {isAddModalOpen && (
        <AddEntryModal
          isOpen={isAddModalOpen}
          closeModal={closeAddEntryModal}
          addEntry={addEntry}
        />
      )}
    </div>
  );
};

export default DiaryEntriesManager;
