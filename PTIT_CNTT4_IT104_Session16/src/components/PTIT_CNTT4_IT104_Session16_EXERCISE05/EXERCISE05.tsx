import React, { Component } from 'react'
import './EXERCISE05.css'
type User = {
    name: string,
    email: string,
    age: number
}

type UserList = {
    userList: User[],
    isSubmit: boolean
}

export default class EXERCISE05 extends Component<object, UserList> {
    constructor(props: object) {
        super(props);
        this.state = {
            userList: [
                {
                    name: "",
                    email: "",
                    age: 0
                }
            ],
            isSubmit: false
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = this.state.userList[0];

        if (!newUser.name || !newUser.email || !newUser.age) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!newUser.email.includes("@")) {
            alert("Email không hợp lệ! Phải có ký tự '@'.");
            return;
        }
        if (newUser.age <= 0) {
            alert("Age phải lớn hơn 1");
            return;
        }
        this.setState({ isSubmit: true });
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const updatedUser = {
            ...this.state.userList[0],
            [name]: name === "age" ? Number(value) : value
        };

        this.setState({
            userList: [updatedUser], isSubmit: false
        });
    }

    handleDelete = () => {
        this.setState({
            userList: [{ name: "", email: "", age: 0 }], isSubmit: false
        });
    }

    render() {
        return (
            <div className='container05'>
                <h2>Nhập thông tin người dùng</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder='Họ tên'
                        onChange={this.handleChange}
                        name='name'
                        value={this.state.userList[0].name}
                    />

                    <input
                        type="text"
                        placeholder='Email'
                        onChange={this.handleChange}
                        name='email'
                        value={this.state.userList[0].email}
                    />

                    <input
                        type="text"
                        placeholder='Tuổi'
                        onChange={this.handleChange}
                        name='age'
                        value={this.state.userList[0].age || ""}
                    />

                    <div className='btn05'>
                        <button>Gửi</button>
                        <button type='button' onClick={this.handleDelete}>Xóa</button>
                    </div>
                </form>
                <div className='info' style={{ display: this.state.isSubmit ? 'block' : 'none' }}>
                    <h2>Thông tin người dùng</h2>
                    <div>
                        <p>Họ tên: {this.state.isSubmit ? this.state.userList[0].name : ""}</p>
                        <p>email: {this.state.isSubmit ? this.state.userList[0].email : ""}</p>
                        <p>age: {this.state.isSubmit ? this.state.userList[0].age : ""}</p>
                    </div>
                </div>
            </div>
        )
    }
}
