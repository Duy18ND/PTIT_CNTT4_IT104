import React, { Component } from 'react'
import './EXERCISE02.css'
type Login = {
    isLogin: boolean
}

export default class EXERCISE02 extends Component<object, Login> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLogin: !prevState.isLogin,
        }));
    };
    render() {
        return (
            <div>
                <div className='container'>
                    <h2>{this.state.isLogin ? "Xin chào, User" : "Vui lòng đăng nhập để tiếp tục"}</h2>
                    <button onClick={this.handleClick}>{this.state.isLogin ? "Đăng xuất" : "Đăng nhập"}</button>
                </div>
            </div>
        )
    }
}
