import React, { Component } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity?: number;
};

type CartProps = {
    showCart: boolean;
};

type CartState = {
    cart: Product[];
};

export default class Cart extends Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart") || "[]"),
        };
    }

    updateCart = (cart: Product[]) => {
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
    };

    increaseQuantity = (index: number) => {
        const cart = [...this.state.cart];
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        this.updateCart(cart);
    };

    decreaseQuantity = (index: number) => {
        const cart = [...this.state.cart];
        if ((cart[index].quantity || 1) > 1) {
            cart[index].quantity = (cart[index].quantity || 1) - 1;
            this.updateCart(cart);
        }
    };

    deleteProduct = (index: number) => {
        const cart = [...this.state.cart];
        cart.splice(index, 1);
        this.updateCart(cart);
    };

    render() {
        const { showCart } = this.props;
        if (!showCart) return null;

        const { cart } = this.state;
        const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

        return (
            <section className="PayCart">
                <h2>Cart</h2>
                <div className="quantity">
                    {cart.map((item, index) => (
                        <div key={index} className="container_product">
                            <div className="containerImgProduct">
                                <img className="img_product" src={item.img} alt={item.name} />
                            </div>
                            <p>{item.name}</p>
                            <div className="quantity_Pay">
                                <button onClick={() => this.increaseQuantity(index)}>+</button>
                                <span>{item.quantity || 1}</span>
                                <button onClick={() => this.decreaseQuantity(index)}>-</button>
                            </div>
                            <p className="delete_btn" onClick={() => this.deleteProduct(index)}>
                                <i className="fa-solid fa-trash"></i>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="total_Pay">
                    Tổng tiền: {total.toLocaleString()} VNĐ
                </div>
            </section>
        );
    }
}
