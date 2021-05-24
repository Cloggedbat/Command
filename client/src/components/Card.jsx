import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <h3>Price Data</h3>
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
      <button type="button" >Save</button>
      <button type="button" >Delete</button>

    </div>
  );
}

export default Card;
