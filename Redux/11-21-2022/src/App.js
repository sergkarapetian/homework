import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import ACTION_TYPES from "./components/ACTION_TYPES";
import TodoList from "./components/TodoList";

function App() {
  const [showItems, setShowItems] = useState(false);
  const [isAll, handleIsAll] = useState(true);

  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddInput = () => {
    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: { todo: input, isDone: false, id: Date.now() },
    });
    setInput("");
  };

  const handleShowItems = (status) => {
    handleIsAll(false);
    setShowItems(status);
  };

  const handleShowAll = () => {
    handleIsAll(true);
  };

  return (
    <div className="App">
      <input
        value={input}
        className="AppInput"
        type="Text"
        onChange={(e) => handleChangeInput(e)}
      />
      <button onClick={handleAddInput}>Add Todo</button>
      {isAll
        ? todoList.map((item) => <TodoList key={item.id} {...item} />)
        : todoList.map((item) => {
            if (item.isDone === showItems) {
              return <TodoList key={item.id} {...item} />;
            }
          })}
      <button onClick={handleShowAll}>All</button>
      <button onClick={() => handleShowItems(false)}>Active</button>
      <button onClick={() => handleShowItems(true)}>Done</button>
    </div>
  );
}

export default App;
