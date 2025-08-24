import React, { Component } from 'react'
type Bird = {
    bird: string
    fount: boolean
}

export default class EXERCISE03 extends Component <object, Bird>{
    constructor(props: object){
        super(props);
        this.state = {
            bird: "",
            fount: false
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({fount: true});
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            bird: e.target.value,
            fount: false
        })
    }
  render() {
    return (
      <div>
        <h2>Ngày sinh: {this.state.fount ? this.state.bird : ""}</h2>
        <form action="" onSubmit ={this.handleSubmit}>
            <input type="date" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
