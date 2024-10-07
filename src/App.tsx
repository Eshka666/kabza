import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
    </div>
  );

  function AppTitle() {
    return <>This is App component</>;
  }
}

function  Rating() {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Star() {
  return <div>Star</div>;
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
