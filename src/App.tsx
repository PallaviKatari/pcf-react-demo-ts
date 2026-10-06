import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { HelloWorld } from "./Components/HelloWorld";
import Datatypes from "./Components/TypeScript";
import TypeScriptClass from "./Components/TypeScriptClass";
import ConditionalRendering from "./Components/ConditionalRendering";

function App() {
  const users = new TypeScriptClass("John Doe", 30, "Software Engineer", "Engineering");
  users.develop();

  return (
    <>
      {/* <HelloWorld name="John Doe" designation="Software Engineer" project="Project Alpha"/>
      <br/> */}
      <Datatypes />
      <h1>User Details</h1>
      <p>Name: {users.name}</p>
      <p>Age: {users.age}</p>
      <p>Designation: {users.designation}</p>
      <p>Department: {users.department}</p>
      <hr></hr>
      <ConditionalRendering />
    </>
  );
}

export default App;
