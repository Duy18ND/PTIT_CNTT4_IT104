import React, { Component } from 'react'
type User = {
    name: string
}

export default class EXERCISE01 extends Component <object, User> {
    constructor(props: object){
        super(props);
        this.state = {
            name: "Đoàn Mạnh Duy"
        }
    }

  render() {
    return (
      <div>
        <h2>Xin chào, tôi tên là: {this.state.name}</h2>
      </div>
    )
  }
}
