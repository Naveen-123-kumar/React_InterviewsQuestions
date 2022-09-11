import React, { useRef, useState } from 'react'

export default function UseRef() {
  const value1=useRef("")
  console.log(value1.current.value)
  const [name,setName]=useState('')

 
  return (
    <>
      <h1>{name}</h1>
      <input type='text' ref={value1} />
      <button onClick={()=>{setName(value1.current.value)}}>Click me</button>
    </>
  )
}
