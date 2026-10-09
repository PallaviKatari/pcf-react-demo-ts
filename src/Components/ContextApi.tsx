//useContext
//Aviod prop drilling using Context API

//Create UserContext.tsx

import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function ContextParent() {
  return (
    <>
      <h3>ContextParent</h3>
      <ContextChild />
    </>
  );
}

function ContextChild() {
  return (
    <>
      <h3>ContextChild</h3>
      <ContextGrandChild />
    </>
  );
}

function ContextGrandChild() {
  const user = useContext(UserContext);
  return (
    <>
      <h3>ContextGrandChild - Context API Demo - {user.username}-{user.email}-{user.role}</h3>
    </>
  );
}
