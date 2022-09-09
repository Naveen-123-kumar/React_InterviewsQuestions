// What is Context api?
// The React Context API is a way for a React app to effectively produce global variables that can be passed around.In this process first we mention createContext after that we use provider and consumer.
import React, { createContext, useContext } from "react";
let name='Anu_Naveen';
const Create_data=createContext()
export default function Context() {
  return (
    <>
    <Create_data.Provider value={name}>
    <h1>Hii</h1>
      <Comp4/>
    </Create_data.Provider>
   
    </>
  );
}

const Comp1 = (props) => {
  return (
    <>
      <Comp2 name={props.name} />
    </>
  );
};
const Comp2 = (props) => {
  return (
    <>
      <Comp3 name={props.name} />
    </>
  );
};

const Comp3 = (props) => {
  return (
    <>
      <Comp4 name={props.name} />
    </>
  );
};
const Comp4 = (props) => {
  let data=useContext(Create_data)
  return (
    <>
      <h1>Component4</h1>
      <h3>{data}</h3>
    </>
  );
};
