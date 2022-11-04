import React, { useState } from "react";
import Todoes from "../ToDoes";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleTodoList = () => {
    setTodoList((prev) => [
      ...prev,
      { title: inputValue, id: Date.now(), isDone: false },
    ]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditTodo = (id, newTitle) => {
    setTodoList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.title = newTitle;
        }
        return item;
      })
    );
  };

  const complateTodo = (id) => {
    setTodoList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item
      })
    );
    // console.log(todoList.isDone);
  };

  return (
    <div>
      <div className="todo">
        <input
          className="input"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button disabled={!inputValue} className="add" onClick={handleTodoList}>
          Add ToDo
        </button>
      </div>

      <div className="todoList">
        {todoList.map((item) => (
          <Todoes
            key={item.id}
            {...item}
            handleDelete={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            complateTodo = {complateTodo}
          />
        ))}
      </div>
    </div>
  );
}
