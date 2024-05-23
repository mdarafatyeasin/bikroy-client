import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './DetailPost.css'

const DetailPost = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/adds/product/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  return (
    <div className="detail-container">
      <div className="product-img">
        <img src={singleProduct.picture} alt={singleProduct.model} />
      </div>
      <div className="post-content">
        <h1>{singleProduct.brand_name} - {singleProduct.model}</h1>
        <p>Condition: {singleProduct.condition}</p>
        <p>Authenticity: {singleProduct.authenticity}</p>
        <p>Description: {singleProduct.description}</p>
        <p>Price: Tk {singleProduct.price}</p>
        <p>Negotiable: {singleProduct.negotiable ? "Yes" : "No"}</p>
        <p>Contact: {singleProduct.contact}</p>
        <p>Location: {singleProduct.location}</p>
      </div>
    </div>
  );
};

export default DetailPost;
