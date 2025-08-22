import React, { Component } from 'react'
type Product = {
    Id: string,
    Name: string,
    Price: number,
    Quantity: number
}
type ProductList = {
    productList: Product;
}
export default class EXERCISE05 extends Component<object, ProductList> {
    constructor(props: object) {
        super(props);
        this.state = {
            productList: {
                Id: "",
                Name: "",
                Price: 0,
                Quantity: 0
            }
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(this.state.productList);
        
        this.setState({
            productList: {
                Id: "",
                Name: "",
                Price: 0,
                Quantity: 0
            }
        })
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        this.setState({
            productList:{...this.state.productList, [name]: value}
        });
    }
    render() {
        return (
            <div className='body05'>
                <div className='container05'>
                    <h2 className='h2_05'>Thêm sản phẩm</h2>
                    <form action="" onSubmit={this.handleSubmit}>

                        <label htmlFor="">Mã sản phẩm</label>
                        <input type="text" onChange={this.handleChange} name='Id' value={this.state.productList.Id}/>

                        <label htmlFor="">Tên sản phẩm</label>
                        <input type="text" onChange={this.handleChange} name='Name' value={this.state.productList.Name}/>

                        <label htmlFor="">Giá</label>
                        <input type="text" onChange={this.handleChange} name='Price' value={this.state.productList.Price}/>

                        <label htmlFor="">Số lượng</label>
                        <input type="number" onChange={this.handleChange} name='Quantity' value={this.state.productList.Quantity}/>

                        <button type='submit' className='btn05'>Đăng ký</button>
                    </form>
                </div>
            </div>
        )
    }
}
