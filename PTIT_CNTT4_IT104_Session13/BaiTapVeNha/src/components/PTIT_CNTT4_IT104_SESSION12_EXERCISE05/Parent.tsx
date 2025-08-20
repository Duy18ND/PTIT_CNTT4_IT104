import React, {Component } from 'react'
import Children from './Children'
type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number
}
type ProductList = {
  product: Product[];
}
export default class Parent extends Component <object, ProductList>{
  constructor(props: object){
    super(props);
    this.state = {
      product: [
        {
          id: 1,
          name: "Hello World",
          price: 12000,
          quantity: 6
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <Children product={this.state.product}/>
      </div>
    )
  }
}
