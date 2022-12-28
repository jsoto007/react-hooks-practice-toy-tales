import React from "react";
import ToyCard from "./ToyCard";


function ToyContainer( { data, setData } ) {


  function handleDeleteItem(deletedItem) {
    const updatedItems = data.filter((item) => item.id !== deletedItem.id)
    setData(updatedItems)
  }

  return (
    <div id="toy-collection">
      { 
        data.map((item) =>
        <ToyCard 
          data={item}
          key={item.id}
          onDeleteItem={handleDeleteItem}
        />
        
        )
      }
      </div>
  );
}

export default ToyContainer;
