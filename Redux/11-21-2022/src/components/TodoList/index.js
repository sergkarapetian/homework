import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ACTION_TYPES from "../ACTION_TYPES";

export default function TodoList({ todo, id, isDone }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editInput, setEditInput] = useState(todo);

  const handleRemove = (id) => {
    dispatch({ type: ACTION_TYPES.REMOVE_TODO, payload: { id: id } });
  };

  const handleEditMode = () => {
    setIsEdit(!isEdit);
    setEditInput(todo)
  };

  const handleEditInput = (e) => {
    setEditInput(e.target.value);
  };
  const handleSave = (id) => {
    dispatch({
      type: ACTION_TYPES.EDIT_TODO,
      payload: { todo: editInput, id: id },
    });
    handleEditMode();
  };

  const handleIsDone = (id) => {
dispatch({type: ACTION_TYPES.DONE, payload: {id: id}})
  }

  return (
    <div className="container">
      {isEdit ? (
        <>
          <input
            type="text"
            value={editInput}
            className="editInput"
            onChange={handleEditInput}
          />
          <button onClick={() => handleSave(id)}>Save</button>
          <button onClick={handleEditMode}>Reset</button>
        </>
      ) : (
        <>
          <div className={isDone ? "DoneTodo" : "TodoList"} onClick={() => handleIsDone(id)}>{todo}</div>
          <button onClick={handleEditMode}>Edit</button>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </>
      )}
    </div>
  );
}
