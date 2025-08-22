import React, { Component } from 'react'
type Gender = {
    gender: string,
}

export default class EXERCISE06 extends Component <object, Gender> {
    constructor(props: object){
        super(props);
        this.state = {
            gender: "",
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({
            gender: ""
        });
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({gender: e.target.value});
    }
  render() {
    return (
      <div>
        <h2>Giới tính: {this.state.gender}</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>

            <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>

            <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
        </form>
      </div>
    )
  }
}
