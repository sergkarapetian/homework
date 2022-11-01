import "./App.css";
import React, { useState } from "react";
import API from "./components/API";
import List from "./components/Lists";

function App() {
  const [mainData, setMainData] = useState(API);

  const handleData = (id, status) => {
    setMainData(
      mainData.map((item) => {
        console.log(id)
        if (item._id === id) {
          item.status = status
          return item
        }
        return item
      })
    );
  };


  // console.log(mainData)

  return (
    <div className="App">
      <List data = {mainData} handleData = {handleData} status="blocked">Blocked</List>
      <List data = {mainData} handleData = {handleData} status="todo">ToDo</List>
      <List data = {mainData} handleData = {handleData} status="in_progress">In Progress</List>
      <List data = {mainData} handleData = {handleData} status="done">Done</List>
    </div>
  );
}

export default App;
