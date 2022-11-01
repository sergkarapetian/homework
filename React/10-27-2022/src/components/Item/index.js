import React, { useState } from "react";
import EditList from "../EditList";

export default function Item({ handleData, item}) {
  const [currentData, setCurrentData] = useState({
    id: item._id,
    title: item.title,
    category: item.category,
    description: item.description,
    status: item.status,
  });
  const [status, setStatus] = useState(false);

  // console.log(currentData.id);

  return (
    <div className="list" key = {item.id}>
      Title: {currentData.title} <br />
      Category: {currentData.category} <br />
      Description: {currentData.description} <br />
      <button
        className="btn"
        disabled={status ? true : false}
        // id={item._id}
        onClick={() => setStatus(!status)}
      >
        Edit
      </button>
      {status ? (
        <EditList
          handleData={handleData}
          current={currentData}
          setCurrentData={setCurrentData}
          status={status}
          setStatus={setStatus}
        />
      ) : null}
    </div>
  );
}
