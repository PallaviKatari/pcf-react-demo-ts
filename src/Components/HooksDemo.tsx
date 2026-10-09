import { useRef, useState } from "react";

//useRef
//ref -> attributes -> React Components
function Reference() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  function clearInput() {
    inputRef.current.value = "";
    inputRef1.current.value = "";
    inputRef1.current.focus();
  }

  function changeColor()
  {
    document.body.style.background=inputRef1.current.value;
  }

  return (
    <form>
      <h1 style={{ marginBottom: 40 }}>React useRef</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Text"
        style={{
          marginTop: 30,
          width: 200,
          marginLeft: 250,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      />
      <button type="button" onClick={clearInput}>Clear Input</button>
      <hr/>
      <input
        type="text"
        ref={inputRef1}
        placeholder="Enter Text"
        style={{
          marginTop: 30,
          width: 200,
          marginLeft: 250,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      />
      <button type="button" onClick={changeColor}>Change Background Color</button>
    </form>
  );
}

export default Reference;
