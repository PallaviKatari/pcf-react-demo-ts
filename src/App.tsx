import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { HelloWorld } from "./Components/HelloWorld";
import Datatypes from "./Components/TypeScript";
import TypeScriptClass from "./Components/TypeScriptClass";
import ConditionalRendering from "./Components/ConditionalRendering";
import SpreadSyntax from "./Components/SpreadSyntax";
import RestOperator from "./Components/RestOperator";
import ConditionalStyling from "./Components/ConditionalStylying";
import StyledComponents from "./Components/StyledComponents";
import FluentUIStyle from "./Components/FluentUIStyle";
import CondStyle from "./Components/FluentUICondStyle"
import Reference from "./Components/HooksDemo"
import Parent from './Components/PropDrilling'

import { UserContext } from "./Components/UserContext";
import ContextParent from "./Components/ContextApi";
import AxiosDemo from "./Components/AxiosHookDemo";
import AxiosHookDemo from "./Components/AxiosHookDemo";
import UseAxiosDemo from "./Components/AxiosHookDemo";

import UseMemoDemo from "./Components/OptimizationHooks"
import UseMemoProducts from "./Components/UseMemoDemo"
import Callback from "./Components/UseCallbackHook";

function App() {
  // const users = new TypeScriptClass("John Doe", 30, "Software Engineer", "Engineering");
  // users.develop();

  //const username="Jane Doe";

  // const user={
  //   username:"admin",
  //   email:"admin@mailinator.com",
  //   role:"Administrator"
  // };

  return (
    <>
      {/* <HelloWorld name="John Doe" designation="Software Engineer" project="Project Alpha"/>
      <br/> */}
      {/* <Datatypes />
      <h1>User Details</h1>
      <p>Name: {users.name}</p>
      <p>Age: {users.age}</p>
      <p>Designation: {users.designation}</p>
      <p>Department: {users.department}</p>
      <hr></hr>
      <ConditionalRendering /> */}
      {/* <SpreadSyntax />
      <hr/>
      <RestOperator />
      <hr/> */}
      {/* <ConditionalStyling/>
      <hr/> */}
      {/* <Parent/> */}
      {/* <UserContext.Provider value={user}>
        <ContextParent/>
      </UserContext.Provider> */}
      <Callback/>
    </>
  );
}

export default App;
