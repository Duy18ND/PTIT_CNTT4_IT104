import React, { Component } from "react";

type HeaderProps = {
    cartCount: number;
    toggleCart: () => void;
};

export default class Header extends Component<HeaderProps> {
    render() {
        const { cartCount, toggleCart } = this.props;
        return (
            <header>
                <div className="title1_header">
                    <p>Trang chủ</p>
                    <p>Danh sách sản phẩm</p>
                </div>
                <button className="title2_header" onClick={toggleCart}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>{cartCount}</p>
                </button>
            </header>
        );
    }
}
