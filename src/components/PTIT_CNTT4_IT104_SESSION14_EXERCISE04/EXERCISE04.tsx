import React, { Component } from 'react'
type Message = {
    title: string
}

export default class EXERCISE03 extends Component <object, Message>{
    constructor(props: object){
        super(props);
        this.state = {
            title: "Học Code đi Bro"
        }
    }
    handleChange = () =>{
        this.setState({ title: "Cố lên nào!"});
    }
    shouldComponentUpdate(nextProps: object, nextState: Readonly<Message>, nextContext: any): boolean {
        console.log("State New: ", nextState.title);
        return false;
    }
  render() {
    return (
      <div>
        <h2>Slogan: {this.state.title}</h2>
        <button onClick={this.handleChange}>change State</button>
      </div>
    )
  }
}
