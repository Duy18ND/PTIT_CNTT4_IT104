import React, { Component, createRef } from 'react';
import Swal from 'sweetalert2';

type Product = {
    email: string,
    password: string,
}

type ProductList = {
    productList: Product;
}

export default class EXERCISE08 extends Component<object, ProductList> {
    emailRef = createRef<HTMLInputElement>();

    constructor(props: object) {
        super(props);
        this.state = {
            productList: {
                email: "",
                password: "",
            }
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state.productList;

        if (!email || !password) {
            Swal.fire({
                title: "Lỗi!",
                text: "Email và Mật khẩu không được để trống",
                icon: "error"
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]") as Product[];

        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            Swal.fire({
                title: "Đăng nhập thất bại!",
                text: "Email hoặc Mật khẩu không đúng",
                icon: "error"
            });
            return;
        }

        Swal.fire({
            title: "Đăng nhập thành công!",
            icon: "success",
            draggable: true
        });

        this.setState({
            productList: {
                email: "",
                password: "",
            }
        }, () => {
            this.emailRef.current?.focus();
        });
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            productList: { ...this.state.productList, [name]: value }
        });
    }

    render() {
        const { email, password } = this.state.productList;
        return (
            <div className='body05'>
                <div className='container05'>
                    <h2 className='h2_05'>Đăng nhập</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            ref={this.emailRef}
                        />

                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                        />

                        <button type='submit' className='btn05'>Đăng nhập</button>
                    </form>
                </div>
            </div>
        )
    }
}
