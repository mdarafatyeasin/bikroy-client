import { useState, useEffect } from "react";
import useUser from "../../../Hooks/useUser";
import Loader from "../../Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";

const UserEdit = () => {
  const data = useUser();
  const userInfo = data.user;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    if (userInfo) {
      setFormData({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://bikroy-server.onrender.com/profile/user_profile/${userInfo.id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedUser = await response.json();
      console.log("User updated successfully:", updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (data.loading) {
    return <Loader />;
  }

  if (!userInfo) {
    navigate("/login");
  }

  return (
    <div>
      <h1>This is user edit form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
