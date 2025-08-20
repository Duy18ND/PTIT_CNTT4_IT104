import React, { Component } from 'react'
import Child from './Child'

export default class Prent extends Component {
  render() {
    return (
      <div>
        Components Cha
        <Child name='Duy' age='20'></Child>
      </div>
    )
  }
}
