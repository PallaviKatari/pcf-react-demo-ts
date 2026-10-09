//useMemo

import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [num, setNumber] = useState(10);
  const [counter, setCounter] = useState(0);

  //Calculation
  const calculateSum=(n:number)=>
  {
    console.log("Calculating sum....");
    let sum =0;

    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    console.log(sum);
    return sum;
  }

  //Recalculate only when num changes
  const sum=useMemo(()=>{
    return calculateSum(num);
  },[num])

//   const sum=()=>{
//     return calculateSum(num);
//   }

  return (
    <>
      <h1>useMemo</h1>
      <label>Enter the number:</label>
      <input type="number" value={num} onChange={(e)=>setNumber(Number(e.target.value))} />
      <hr/>
      <h1>Counter:{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
    </>
  );
}

export default UseMemoDemo;
