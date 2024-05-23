// import React from 'react';

import { NavLink } from "react-router-dom";

const Product = (product) => {
  console.log(product);
  return (
    <div>
      <div className="post-container">
        <div className="product-img">
          <img src={product.product.picture} alt="" />
        </div>
        <div className="post-content">
          <h1>{product.product.model}</h1>
          <p>{product.product.location}</p>
          <h3>Tk {product.product.price}</h3>
          <NavLink to={`/view-adds/${product.product.id}`}>Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
