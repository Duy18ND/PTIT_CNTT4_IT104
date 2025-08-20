import React, { Component } from 'react'
import Children_Comp from './Children_Comp';
type user = {
    name: string
}

export default class Parent_Comp extends Component <object, user> {
    constructor(props: object){
        super(props);
        this.state = {
            name: "Doan Manh Duy"
        }
    }
  render() {
    return (
      <h2>
        Họ và tên bên component cha: {this.state.name}
        <Children_Comp name ={this.state.name} />
      </h2>
    )
  }
}
