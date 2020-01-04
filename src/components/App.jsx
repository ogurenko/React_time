import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("en-GB");
  const [vreme, setCount] = useState(time);

  function update() {
    setCount(new Date().toLocaleTimeString("en-GB"));
  }

  setInterval(update, 1000);

  return (
    <div className="container">
      <h1>{vreme}</h1>
    </div>
  );
}

export default App;
