import React, { useState } from "react";
import editBtn from "../../assets/editBtn.svg";
import deleteBtn from "../../assets/deleteBtn.svg";

export default function Todoes({
  title,
  id,
  isDone,
  handleDelete,
  handleEditTodo,
  complateTodo,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedToto, setEditedTodo] = useState(title);

  const handleComplateTodo = (e) => {
    e.stopPropagation();
    handleEditTodo(id, editedToto);
    handleResetTodo(e);
  };

  const handleResetTodo = (e) => {
    e.stopPropagation();
    setEditedTodo(title);
    setIsEditMode(false);
  };

  return (
    <div
      onClick={() => complateTodo(id)}
      className={`todo ${isDone ? "done" : ""}`}
    >
      {isEditMode ? (
        <div>
          <input
            value={editedToto}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button className="complate" onClick={handleComplateTodo}>
            V
          </button>
          <button className="reset" onClick={handleResetTodo}>
            X
          </button>
        </div>
      ) : (
        <div>
          {title}
          <img
            onClick={() => setIsEditMode(true)}
            className="edit"
            src={editBtn}
          />
        </div>
      )}
      <img
        className="delete"
        src={deleteBtn}
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
