import React, { Component } from 'react'
type  Message = {
    message: string,
};

export default class EXERCISE09 extends Component <object, Message> {
    constructor(props: object){
        super(props);
        this.state = {
            message: "Xin Chào Duy"
        };
    }
    handleChange = () => {
        this.setState({
            message: "Tạm biệt Duy"
        })
    }
    
  render() {
    return (
      <div>
            <h2>{this.state.message}</h2>
            <button onClick={this.handleChange}>click</button>
      </div>
    )
  }
}
