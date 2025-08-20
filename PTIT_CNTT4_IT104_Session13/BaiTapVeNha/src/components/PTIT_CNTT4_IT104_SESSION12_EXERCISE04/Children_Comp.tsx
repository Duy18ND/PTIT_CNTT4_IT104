import React, { Component } from 'react'
type PropsType = {
    name: string;
}
export default class Children_Comp extends Component <PropsType> {
  render() {
    return (
      <div>
        Họ và tên bên components con: {this.props.name}
      </div>
    )
  }
}
