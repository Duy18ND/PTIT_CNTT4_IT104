import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../interface/interface";

export default function ShoppingCart() {
  const result = useSelector((data: any) => data.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {result.length > 0 ? (
                  result.map((item: CartItem, index: number) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price} USD</td>
                      <td style={{ display: "flex", gap: "8px" }}>
                        <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
                        <div>{item.quantity}</div>
                        <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>-</button>
                      </td>
                      <td>
                        <button
                          className="cart-btn delete"
                          onClick={() => dispatch({ type: "DELETE", payload: item.id })}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center", fontStyle: "italic", fontWeight: "bold" }}>
                      Empty product in your cart
                    </td>
                  </tr>
                )}
              </tbody>

              {result.length > 0 && (
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>{result.length}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      {result.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0)} USD
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
        {result.length > 0 && (
          <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
        )}
      </div>
    </div>
  );
}
