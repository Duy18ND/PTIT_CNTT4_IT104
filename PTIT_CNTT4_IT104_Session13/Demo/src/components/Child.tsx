import React, { Component } from 'react'
type Props = {
    name:string
    age:string
}
export default class Child extends Component <Props>{
  render() {
    console.log("Nhan ve tu components Cha ", this.props);
    const {name, age} = this.props;
    return (
      <div>
        Components Con
        <p>Gia tri Fullname tu components cha: {this.props.name}</p>
        <p>Tuoi: {age}</p>
        <p></p>
      </div>
    )
  }
}
