import { useEffect, useState } from "react";
import Loader from "../../Shared/Loader/Loader";
import useAdditionalData from "../../../Hooks/useAdditionalData";
import { useNavigate } from "react-router-dom";
import useUser from "../../../Hooks/useUser";

const AdditionalEdit = () => {
  const user = useUser();
  const data = useAdditionalData();
  const additionalInfo = data.additionalData;

  const usenavigete = useNavigate();

  const [formData, setFormData] = useState({
    about: "",
    annual_income: "",
    uv_name: "",
    linkedin: "",
    facebook: "",
  });

  useEffect(() => {
    if (additionalInfo) {
      setFormData({
        about: additionalInfo.about || "",
        annual_income: additionalInfo.annual_income || "",
        uv_name: additionalInfo.uv_name || "",
        linkedin: additionalInfo.linkedin || "",
        facebook: additionalInfo.facebook || ""
      });
    }
  }, [additionalInfo]);

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
        `https://bikroy-server.onrender.com/profile/additional_info/${user.user.id}/`,
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
      // const updatedBasicInfo = await response.json();
      usenavigete("/profile-info");
      // console.log("Basic information updated successfully:", updatedBasicInfo);
    } catch (error) {
      console.error("Error updating basic information:", error);
    }
  };

  if (data.loading) {
    return <Loader />;
  }

  if (!user.user) {
    usenavigete("/login");
  }

  return (
    <div>
      <h1>Edit Additional Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="about"
            value={formData.about}
            placeholder="About"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="annual_income"
            value={formData.annual_income}
            placeholder="Annual Income"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="uv_name"
            value={formData.uv_name}
            placeholder="University Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            placeholder="LinkedIn"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            placeholder="Facebook"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default AdditionalEdit;
