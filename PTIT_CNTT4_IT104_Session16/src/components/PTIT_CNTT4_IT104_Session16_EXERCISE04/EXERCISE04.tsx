import React, { Component } from 'react'
type Count = {
    count: number
}

export default class EXERCISE04 extends Component <object,Count> {
    constructor(props: object){
        super(props);
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState((item) => ({
            count: item.count + 1,
        }));
    }
  render() {
    return (
      <div>
        <h2>Số lần Click: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click my</button>
      </div>
    )
  }
}
