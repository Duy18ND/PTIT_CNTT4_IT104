import React, { Component } from 'react'

type User = {
  user: {
    email: string,
    password: string; // đổi đúng tên
  }
}

export default class Controll extends Component<object, User> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""  
      }
    }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Giá trị khi nhập:", this.state.user);
    this.setState({
      user: {
        email: "",
        password: ""
      }
    });
    
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value } 
    });
  }

  render() {
    return (
      <div>
        Form dùng kỹ thuật Controlled Component
        <form onSubmit={this.handleSubmit}>

          <label>Email:</label>
          <input
            type="text"
            placeholder="email"
            onChange={this.handleChange}
            name="email" 
            value={this.state.user.email}
          /><br />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Pass"
            onChange={this.handleChange}
            name="password"
            value={this.state.user.password}
          /><br />

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
