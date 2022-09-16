import React from "react";
import "./ListItem.css";

function ListItem() {
  return (
    <div className="list_item">
      <p className="list_info">
        <span>Buy a new gaming laptop </span>
        <button className="delete_btn">Delete</button>
      </p>
    </div>
  );
}

export default ListItem;
