import React, { Component, createRef } from 'react';
import Swal from 'sweetalert2';

type Product = {
    studentName: string,
    email: string,
    password: string,
    phone: string
}

type ProductList = {
    productList: Product;
}

export default class EXERCISE07 extends Component<object, ProductList> {
    studentNameRef = createRef<HTMLInputElement>(); 

    constructor(props: object) {
        super(props);
        this.state = {
            productList: {
                studentName: "",
                email: "",
                password: "",
                phone: ""
            }
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { studentName, email, password, phone } = this.state.productList;

        if (!studentName || !email || !password) {
            Swal.fire({
                title: "Lỗi!",
                text: "Tên sinh viên, Email và Mật khẩu không được để trống",
                icon: "error"
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]") as Product[];
        const isEmailExist = users.find(user => user.email === email);
        if (isEmailExist) {
            Swal.fire({
                title: "Lỗi!",
                text: "Email đã tồn tại",
                icon: "error"
            });
            return;
        }

        users.push({ studentName, email, password, phone });
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
            title: "Đăng ký thành công!",
            icon: "success",
            draggable: true
        });

        this.setState({
            productList: {
                studentName: "",
                email: "",
                password: "",
                phone: ""
            }
        }, () => {
            this.studentNameRef.current?.focus();
        });
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            productList: { ...this.state.productList, [name]: value }
        });
    }

    render() {
        const { studentName, email, password, phone } = this.state.productList;
        return (
            <div className='body05'>
                <div className='container05'>
                    <h2 className='h2_05'>Đăng ký tài khoản</h2>
                    <form onSubmit={this.handleSubmit}>

                        <label>Tên sinh viên</label>
                        <input
                            type="text"
                            name='studentName'
                            value={studentName}
                            onChange={this.handleChange}
                            ref={this.studentNameRef} // dùng ref để focus
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />

                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                        />

                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            name='phone'
                            value={phone}
                            onChange={this.handleChange}
                        />

                        <button type='submit' className='btn05'>Đăng ký</button>
                    </form>
                </div>
            </div>
        )
    }
}
