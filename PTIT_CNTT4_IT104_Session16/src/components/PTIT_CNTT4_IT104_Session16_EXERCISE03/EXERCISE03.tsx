import React, { Component } from 'react'
import './EXERCISE03.css'
type Btn = {
    content: string,
    color: string
}
type BtnList = {
    btnList: Btn[];
}
export default class EXERCISE03 extends Component<object, BtnList> {
    constructor(props: object) {
        super(props);
        this.state = {
            btnList: [
                {
                    content: "Primary",
                    color: "#0d6efd"
                },
                {
                    content: "Secondary",
                    color: "#6c757d"
                },
                {
                    content: "Success",
                    color: "#198754"
                },
                {
                    content: "Warning",
                    color: "#ffc107"
                },
                {
                    content: "Danger",
                    color: "#dc3545"
                },
                {
                    content: "Info",
                    color: "#0dcaf0"
                },
                {
                    content: "Light",
                    color: "#f8f9fa"
                },
                {
                    content: "Dark",
                    color: "#212529"
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className='container03'>
                    {this.state.btnList.map((item, index) => (
                        <button key={index} style={{backgroundColor: item.color, color: item.color === "#f8f9fa" ? "#000" : "#fff"}}>{item.content}</button>
                    ))}
                    <a href="#">Link</a>
                </div>
            </div>
        )
    }
}
