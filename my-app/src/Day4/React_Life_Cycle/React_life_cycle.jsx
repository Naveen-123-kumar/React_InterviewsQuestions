import React from 'react'
export default function React_life_cycle(){
  return (
    <>
    <div>What are React Life cycles?Explain each one with Example</div>
    <div>Every react component has life cycle method and has three phases mounting ,updating,unmounting</div>
    <p>In mounting,there are four phases-----</p>
    <p>✔ Constructor()</p>
    <p>✔ getDerivedStateFromProps()</p>
    <p>✔ render()</p>
    <p>✔ componentDidMount()</p>
    <br /><br />
    <p>In updating,there are five phases----</p>
    <p>✔ getDerivedStateFromProps()</p>
    <p>✔ shouldComponentUpdate()</p>
    <p>✔ render()</p>
    <p>✔ getSnapshotBeforeUpdate()</p>
    <p>✔ componentDidUpdate()</p>
    <br /><br />
    <p>unmounting,there are one phases-----</p>
    <p>✔componentWillUnmount()</p>
    </>
  )
}