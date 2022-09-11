import React, { useContext } from "react";
import { Create_data1,Create_data2} from "./Context";

export default function Contextconsumer() {
  return (
    <>
      <Create_data1.Consumer>
        {(fname) => {
          return (
            <Create_data2.Consumer>
                {(lname)=>{
                    return (
                        <h1> My first name is {fname} last name is {lname}</h1>
                    )
                }}
            </Create_data2.Consumer>
          )
        }}
      </Create_data1.Consumer>
    </>
  );
}
