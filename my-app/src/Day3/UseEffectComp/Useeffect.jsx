import React,{useState,useEffect} from "react";

export default function Useeffect() {
    const [value, setValue] = useState(0);
  // useEffect(() => {
  //   console.log("re-render");//with no dependency it will re-render again and again.
  // });
  // useEffect(() => {
  //   console.log("re-render");//with empty [] it will re-render once
  // },[]);
  useEffect(() => {
    console.log("re-render");//It will re-render when the value will change.
  },[value]);
  return (
    <>
      <h1>{value}</h1>
      
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Inc+
      </button>
    </>
  );
}
