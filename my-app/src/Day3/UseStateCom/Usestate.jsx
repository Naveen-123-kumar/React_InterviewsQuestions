import React, { useState } from 'react'

export default function Usestate() {
    const [value,setValue]=useState(0)
    console.log('reder')
  return (
    <>
    <h1>{value}</h1>
    <button onClick={()=>{setValue(value+1)}}>Inc+</button>
    </>
  )
}
