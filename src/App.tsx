import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      This is App component
      <Rating />
      <Accordion />
    </div>
  );

  function Rating() {
    return (
      <div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
      </div>
    );
  }
}

function Accordion() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>3</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
