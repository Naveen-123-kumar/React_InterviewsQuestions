import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Naveen'
        }
    }
    
    // static getDerivedStateFromProps(props,state) {
    //     return {name: props.newName };
    //   }
    //   componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({name: "yellow"})
         
    //     }, 3000)
    //   }
    changeName=()=>{
        this.setState({name:'Sapna'})
    }
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
  render() {
    return (
      <>
      <h1>{this.state.name}</h1>
      <button type='button' onClick={this.changeName}>Click me</button>

      </>
    )
  }
}
