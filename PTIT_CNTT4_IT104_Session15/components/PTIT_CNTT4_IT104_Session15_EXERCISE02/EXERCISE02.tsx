import React, { Component } from 'react'
type pickColor = {
    color: string,
    fount: boolean
}
export default class EXERCISE02 extends Component <object, pickColor> {
    constructor(props: object){
        super(props);
        this.state = {
            color: "",
            fount: false
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({fount: true});
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({color: e.target.value});
        this.setState({fount: false})
    }

  render() {
    return (
      <div>
        <h2>Color: {this.state.fount ? this.state.color : ""}</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="color" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
