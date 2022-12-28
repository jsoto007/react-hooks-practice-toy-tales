import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((items) => setData(items))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddedItem(newItem) {
    setData([ ...data, newItem])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddedItem={handleAddedItem}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer data={data} setData={setData} />
    </>
  );
}

export default App;
