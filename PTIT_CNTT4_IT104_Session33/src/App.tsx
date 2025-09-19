import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import ShoppingCart from './components/ShoppingCart'
import ProductList from './components/ProductList'
export default function App() {
  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          {/* Gio hang */}
          <ProductList></ProductList>
          {/* Danh sach san pham */}
          <ShoppingCart></ShoppingCart>
        </div>
      </div>

    </div>
  )
}
