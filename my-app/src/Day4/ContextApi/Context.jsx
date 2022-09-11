// What is Context api?
// The React Context API is a way for a React app to effectively produce global variables that can be passed around.In this process first we mention createContext after that we use provider and consumer.
import React, { createContext } from "react";
import Contextconsumer from "./Contextconsumer";
const Fname = "Anu_Naveen";
const Lname='Prepbytes'
 const Create_data1 = createContext();
 const Create_data2=createContext()
export default function Context() {
  return (
    <>
      <h1>Hii</h1>
      <Create_data1.Provider value={Fname}>
        <Create_data2.Provider value={Lname}>
        <Contextconsumer />
        </Create_data2.Provider>
      </Create_data1.Provider>
    </>
  );
}
export {Create_data1,Create_data2}