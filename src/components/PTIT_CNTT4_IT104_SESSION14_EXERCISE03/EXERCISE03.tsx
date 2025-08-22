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
        this.setState({ title: "Tạm Biệt!"});
    }
  render() {
    return (
      <div>
        <h2>Company: {this.state.title}</h2>
        <button onClick={this.handleChange}>change State</button>
      </div>
    )
  }
}
