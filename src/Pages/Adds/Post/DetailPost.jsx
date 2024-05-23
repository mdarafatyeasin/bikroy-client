import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './DetailPost.css'
import useUser from "../../../Hooks/useUser";

const DetailPost = () => {
  const user = useUser()
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const url = `https://bikroy-server.onrender.com/adds/product/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  if(!user.user){
    navigate("/login");
  }

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
