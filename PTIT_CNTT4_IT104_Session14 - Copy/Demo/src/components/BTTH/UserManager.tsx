import React, { Component } from 'react'
type User = {
    Id: string,
    NameSP: string,
    Price: number,
    Quantity: number
}
type TodoList = {
    todo: User;
}
export default class UserManager extends Component <object,TodoList>{
    constructor(props:object){
        super(props);
        this.state = {
            todo: {
            Id: "",
            NameSP: "",
            Price: 0,
            Quantity: 0
            }
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            console.log("Gia tri khi nhap: ",this.state.todo);
            this.setState({
                todo: {
                    Id: "",
                    NameSP: "",
                    Price: 0,
                    Quantity: 0
                }
            })
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        this.setState({
            todo: {...this.state.todo, [name]: value}
        })


    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h2>Thêm sản phẩm </h2>
                <form action = "" onSubmit={this.handleSubmit}>

                <label htmlFor="">Mã sản phẩm</label>
                <input type="text" name='Id' onChange={this.handleChange} value={this.state.todo.Id}/><br />

                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" name='NameSP' onChange={this.handleChange} value={this.state.todo.NameSP}/> <br />

                <label htmlFor="">Giá</label>
                <input type="text" name='Price' onChange={this.handleChange} value={this.state.todo.Price}/> <br />

                <label htmlFor="">Số lượng</label>
                <input type="number" name='Quantity' onChange={this.handleChange} value={this.state.todo.Quantity}/> <br />

                <button type='submit'>Đăng Ký</button>
            </form>
            </div >
        )
    }
}
