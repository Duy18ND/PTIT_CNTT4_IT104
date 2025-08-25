import React, { Component } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
};

type ProductListProps = {
    products: Product[];
    addToCart: (product: Product) => void;
};

export default class ProductList extends Component<ProductListProps> {
    render() {
        const { products, addToCart } = this.props;
        return (
            <main className="main_product">
                <ul>
                    {products.map((item) => (
                        <li key={item.id}>
                            <img className="img_main" src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price.toLocaleString()} VNĐ</p>
                            <button onClick={() => addToCart(item)}>
                                <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}
