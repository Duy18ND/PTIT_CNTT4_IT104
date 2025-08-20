import React, { Component } from 'react'
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  product: Product[];
}

export default class Children extends Component<Props> {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h3>Children Component</h3>
        {product.map((item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    );
  }
}