import React, { Component } from "react";
import "./EXERCISE07.css";
import Header from "./Header";
import Cart from "./Cart";
import ProductList from "./ProductList";

type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
};

type State = {
    showCart: boolean;
    cartCount: number;
};

const products: Product[] = [
    { id: 1, name: "Iphone 16 Pro", price: 2000000, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95" },
    { id: 2, name: "Samsung Galaxy", price: 1000000, img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25_1__2.png" },
    { id: 3, name: "Xiaomi Note", price: 1200000, img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png" },
];

export default class EXERCISE07 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        this.state = {
            showCart: false,
            cartCount: cart.length,
        };
    }

    toggleCart = () => {
        this.setState((prev) => ({ showCart: !prev.showCart }));
    };

addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cartCount: cart.length });
};


    render() {
        return (
            <div className="container07">
                {/* Header */}
                <Header cartCount={this.state.cartCount} toggleCart={this.toggleCart} />
                {/* Cart */}
                <Cart showCart={this.state.showCart} />
                {/* Product list */}
                <ProductList products={products} addToCart={this.addToCart} />
            </div>
        );
    }
}
