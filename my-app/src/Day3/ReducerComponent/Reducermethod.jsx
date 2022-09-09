import React,{useReducer} from 'react'

const initialState=0;

const reducer=(state,action)=>{
    if(action.type1==='Increment1'){
        return state+1
    }
    if(action.type1==='Increment2'){
        return state+2
    }
    if(action.type1==='Decrement1'){
        return state-1
    }
    if(action.type1==='Decrement2'){
        return state-2
    }
    else{
        return state;

    }
}
export default function Reducermethod() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <h1> {state}</h1>
    <button onClick={()=>{dispatch({type1:'Increment1'})}}>Inc +1</button>
    <button onClick={()=>{dispatch({type1:'Increment2'})}}>Inc +2</button>
    <button onClick={()=>{dispatch({type1:'Decrement1'})}}>Dec -1</button>
    <button onClick={()=>{dispatch({type1:'Decrement2'})}}>Dec -2</button>
    </>
  )
}
