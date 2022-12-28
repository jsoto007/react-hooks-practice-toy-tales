import React, { useState } from "react";

function ToyCard( { data, onUpdatedItem, onDeleteItem } ) {

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${data.id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDeleteItem(data))
  }

  function handleLikeClick() {

    fetch(`http://localhost:3001/toys/${data.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        likes: data.likes + 1
      })
      
    })
      .then((resp) => resp.json())
      .then((updatedItem) => onUpdatedItem(updatedItem))

   
  }
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <img
        src={data.image}
        alt={data.name}
        className="toy-avatar"
      />
      <p>{data.likes} Likes </p>
      <button  onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
