import React, { Component } from 'react';

type Message = {
    message: string;
}

export default class EXERCISE01 extends Component<object, Message> {
    constructor(props: object) {
        super(props);
        this.state = {
            message: ""
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(this.state.message); 
        this.setState({ message: "" }); 
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ message: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Form Email</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        placeholder="User1@gmail.com"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                    /><br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
