import React from "react";
import { useDispatch } from "react-redux";
import bread from "../images/bread.jpg";
import pizza from "../images/pizza.jpg";
import hamburger from "../images/Hamburger.jpg";
import cake from "../images/Cake.jpg";

const Product = [
  { id: 1, title: "Pizza", image: pizza, content: "Ngon tuyệt!", price: 20 },
  { id: 2, title: "Bread", image: bread, content: "Bánh mì thơm", price: 13 },
  { id: 3, title: "Hamburger", image: hamburger, content: "Siêu ngon", price: 30 },
  { id: 4, title: "Cake", image: cake, content: "Bánh ngọt", price: 7 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product: any, quantity: number) => {
    dispatch({
      type: "ADD",
      payload: { ...product, quantity }
    });
  };

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {Product.map((item) => (
              <div key={item.id}>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object" src={item.image} alt={item.title} />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{item.title}</h4>
                    <p>{item.content}</p>

                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      defaultValue={1}
                      min={1}
                      style={{ width: "60px", marginRight: "8px" }}
                    />

                    <button
                      className="btn btn-success"
                      onClick={() => {
                        const input = document.getElementById(
                          `quantity-${item.id}`
                        ) as HTMLInputElement;
                        const quantity = parseInt(input.value) || 1;
                        handleAddToCart(item, quantity);
                      }}
                    >
                      Add to Cart
                    </button>

                    <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {item.price} USD
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
