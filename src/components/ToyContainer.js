import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((items) => setData(items))
  }, [])

  console.log(data)
  return (
    <div id="toy-collection">
      { 
        data.map((item) =>
        <ToyCard 
          data={item}
          key={item.id}
        />
        
        )
      }
      </div>
  );
}

export default ToyContainer;
