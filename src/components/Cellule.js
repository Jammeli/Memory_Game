import React from "react";

function Cellule({ url, id, HandelChange, item }) {
  const itemClass = item.stat ? " active " + item.stat : "";
  return (
    <div className={"cell" + itemClass} onClick={() => HandelChange(id)}>
      <img src={url} className={item.stat === "active" ? "active" : ""} />
    </div>
  );
}

export default Cellule;
