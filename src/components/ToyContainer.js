import React from "react";
import ToyCard from "./ToyCard";


function ToyContainer( { data, setData } ) {


  function handleDeleteItem(deletedItem) {
    const updatedItems = data.filter((item) => item.id !== deletedItem.id)
    setData(updatedItems)
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = data.map((item) => {
      if (item.id === updatedItem.id) {
      return updatedItem;
    } else {
      return item
    }
  })
  setData(updatedItems)
}

  return (
    <div id="toy-collection">
      { 
        data.map((item) =>
        <ToyCard 
          data={item}
          key={item.id}
          onUpdatedItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
        />
        
        )
      }
      </div>
  );
}

export default ToyContainer;
