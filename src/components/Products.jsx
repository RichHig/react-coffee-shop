import React from "react";
import "./Products.css";
import { data } from "../data/data.js";

const Products = () => {
  return (
    <section>
      <div className="heading">
        <h2>Our Popular Products</h2>
      </div>

      {/* container  */}
      <div className="products-container">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <div className="content">
              <span>{item.price} </span>
              <a href="/"> Add to cart</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
