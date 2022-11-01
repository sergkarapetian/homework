import React from "react";
// import Data from "../API";
import Item from "../Item";

export default function Lists({ data, handleData, children, status }) {
  
  return (
    <div className="mainDiv">
      {children}
      {data.filter((item) => item.status === status).map((item) => (
        <Item handleData = {handleData} key={item._id} item={item} />
      ))}
    </div>
  );
}
