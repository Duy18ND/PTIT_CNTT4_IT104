import React, { Component } from 'react'
type Task = {
    task: string,
    fount: boolean
}

export default class EXERCISE04 extends Component <object,Task>{
    constructor(props: object){
        super(props);
        this.state = {
            task: "",
            fount: false
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({fount: true});
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            task: e.target.value,
            fount: false
        })
    }
  render() {
    return (
      <div>
        <h2>Tiến độ hoàn thành {this.state.fount ? this.state.task : ""}%</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="range" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
