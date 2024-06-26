import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import useUser from "../../Hooks/useUser";
import Loader from "../Shared/Loader/Loader";
import { useState } from "react";
import useUserProducts from "../../Hooks/useUserProducts";
import Product from "./Product";

const Profile = () => {
  const user = useUser();
  const userProduct = useUserProducts();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLogoutLoading(true);
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const url = `https://bikroy-server.onrender.com/account/logout/${id}/${token}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          localStorage.removeItem("id");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          setLogoutLoading(false);
          navigate("/");
          window.location.reload();
        }
      });
  };

  if (!user.user) {
    navigate("/login");
  }

  if (user.loading || logoutLoading || userProduct.loading) {
    return <Loader />;
  }

  // console.log(userProduct.userProduct);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-title">
          <h1>Account</h1>
          <h2>
            {user.user.first_name} {user.user.last_name}
          </h2>
        </div>
        <div className="profile-sidebar">
          <ul>
            <li>
              <strong>My Account</strong>
            </li>
            <li>
              <Link to="/profile-info">Profile Info</Link>
            </li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Log out
              </button>
            </li>
          </ul>
          <div className="profile-dashboard">
            {Array.isArray(userProduct.userProduct) && userProduct.userProduct.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
