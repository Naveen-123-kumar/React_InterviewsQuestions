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
