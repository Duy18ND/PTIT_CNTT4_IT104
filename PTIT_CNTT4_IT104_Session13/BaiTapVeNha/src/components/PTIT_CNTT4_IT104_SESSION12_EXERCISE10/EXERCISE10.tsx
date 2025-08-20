import React, { Component } from 'react'
type Message = {
    message: string
}

export default class EXERCISE10 extends Component <object,Message> {
    constructor(props:object){
        super(props);
        this.state = {
            message: ""
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({message: e.target.value});
    }
  render() {
    return (
      <div>
        <h3>Dữ liệu: {this.state.message}</h3>
        <input type="text" placeholder='Nhập nội dung ....' onChange={this.handleChange} />
      </div>
    )
  }
}
