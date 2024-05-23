import "./Navbar.css";
import { useState } from "react";
import useUser from "../../../Hooks/useUser";
import Loader from "../../Shared/Loader/Loader";
// icons
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setisMobile] = useState(true);
  const data = useUser();
  const user = data.user;
  console.log(user);
  if (data.loading) {
    return <Loader />;
  }
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Bikroy
      </NavLink>
      <ul
        onClick={() => setisMobile(true)}
        className={isMobile ? "nav-links" : "nav-links-mobile"}
      >
        <li className="link-option">
          {user ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">
              <FaUser />
              <p>Login</p>
            </NavLink>
          )}
        </li>
        <li className="link-option"></li>
        <li className="link-option">
          <NavLink to="/view-adds">Shop Now</NavLink>
        </li>
        <li className="link-option">
          <NavLink to="/ad-post">
            <button className="ad-button">POST YOUR AD</button>
          </NavLink>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setisMobile(!isMobile)}
      >
        {isMobile ? <IoMenu size={40} /> : <RxCross2 size={40} />}
      </button>
    </nav>
  );
};

export default Navbar;
