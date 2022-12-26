import React, { useState } from "react";

function ToyCard( { data } ) {
  
  
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <img
        src={data.image}
        alt={data.name}
        className="toy-avatar"
      />
      <p>{data.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
