import { NavLink } from "react-router-dom";
import "./Post.css";

const Post = (product) => {
  console.log(product);
  return (
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
  );
};

export default Post;
