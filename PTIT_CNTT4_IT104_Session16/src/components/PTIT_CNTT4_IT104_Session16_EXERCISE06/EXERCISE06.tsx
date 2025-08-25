import React, { Component } from 'react'
import './EXERCISE06.css'

type ThemeSwitcher = {
    background: string,
    color: string,
    title: string
}

export default class EXERCISE06 extends Component<object, ThemeSwitcher> {
    constructor(props: object) {
        super(props)
        this.state = {
            background: "white",
            color: "black",
            title: "Sáng"
        }
    }

    handleClick = () => {
        this.setState(prev => ({
            background: prev.background === "black" ? "white" : "black",
            color: prev.color === "white" ? "black" : "white",
            title: prev.title === "Sáng" ? "Tối" : "Sáng"
        }))
    }

    render() {
        return (
            <div className='container06' style={{ background: this.state.background}}>
                <h2 style={{color: this.state.color}}>Chế độ {this.state.title} đang bật</h2>
                <button onClick={this.handleClick}>Chuyển Theme</button>
            </div>
        )
    }
}
