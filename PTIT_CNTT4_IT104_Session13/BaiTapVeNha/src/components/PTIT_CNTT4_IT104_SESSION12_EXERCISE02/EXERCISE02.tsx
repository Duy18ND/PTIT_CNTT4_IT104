import React, { Component } from 'react'
type User = {
    id: number,
    name: string,
    date: string,
    address: string
}

export default class EXERCISE02 extends Component <object, User> {
    constructor(props: object){
        super(props);
        this.state = {
            id: 1,
            name: "Duy",
            date: "28/07/2006",
            address: "Hà Đông, Hà Nội",
        }
    }
    render() {
        return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <h4>id: {this.state.id}</h4>
            <h4>name: {this.state.name}</h4>
            <h4>date: {this.state.date}</h4>
            <h4>address: {this.state.address}</h4>
        </div>
        );
    }
}
