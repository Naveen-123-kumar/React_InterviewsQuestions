import React, { useMemo, useState } from "react";
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default function Memo() {
  const [count, setCount] = useState(0);
  const [show,setShow]=useState(false);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  
console.log('hi')
  return (
    <>
      <div>
      <button onClick={()=>{setShow(!show)}}>{show ? "you clicked me":"plz click"}</button>

       <h2>Expensive submittion  of number</h2>
        <h1>Count: {count}</h1>
        <button onClick={setCount((count)=>count+1)}>Inc+</button>
      </div>
    </>
  );
}
