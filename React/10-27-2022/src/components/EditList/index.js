import React, { useState } from "react";

export default function EditList({
  handleData,
  status,
  setCurrentData,
  setStatus,
  current,
}) {
  const [newData, setNewData] = useState({
    title: current.title,
    category: current.category,
    description: current.description,
    status: current.status,
  });



  const handleSave = () => {
    console.log(current.id);
    handleData(current.id, current.status)
    setCurrentData(newData);
    setStatus(!status);
  };

  const handleReset = () => {
    setStatus(!status);
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={newData.title}
        onChange={(e) => setNewData({ ...newData, title: e.target.value })}
      />
      <input
        placeholder="Category"
        value={newData.category}
        onChange={(e) => setNewData({ ...newData, category: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newData.description}
        onChange={(e) => setNewData({ ...newData, description: e.target.value })
        }
      />
      <input
        placeholder="Status"
        value={newData.status}
        onChange={(e) => setNewData({ ...newData, status: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
