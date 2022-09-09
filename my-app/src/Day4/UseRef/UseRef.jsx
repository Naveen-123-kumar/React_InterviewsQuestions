// What is UseRef Hook ?(Implementation)
// The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.

import React,{useRef} from 'react'
export default function UseRef() {
    let data=useRef(0)
    const handlechange=()=>{
        console.log(data.current+1)
        return data.current=data.current+1;
    }
  return (
    <>
    <h1 ref={data}>
    {data.current}
    </h1>
    <button onClick={handlechange}>Click me</button>
    </>
  )
}
