import React from "react";

function ToyCard( { data, onDeleteItem } ) {
  
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${data.id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDeleteItem(data))
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
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
