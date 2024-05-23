import axios from "axios";
import useUser from '../../Hooks/useUser'
import { useNavigate } from "react-router-dom";
import "./AdPost.css"; // Import custom CSS file

// Define the choices for dropdown/select fields
const CONDITION_CHOICES = [
  { value: "Used", label: "Used" },
  { value: "New", label: "New" },
];

const AUTHENTICITY_CHOICES = [
  { value: "Original", label: "Original" },
  { value: "Refurbished", label: "Refurbished" },
];

const LOCATIONS_CHOICES = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Barishal", label: "Barishal" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Kumilla", label: "Kumilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Khulna", label: "Khulna" },
  { value: "Rajshahi", label: "Rajshahi" },
];

const AdPost = () => {
  // const userId = localStorage.getItem("id");
  const user = useUser()
  const navigate = useNavigate()

  const handleAd = async (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.description.value;
    const condition = form.condition.value || null;
    const authenticity = form.authenticity.value || null;
    const brand_name = form.brand_name.value || "";
    const model = form.model.value || "";
    const price = form.price.value ? parseFloat(form.price.value) : null;
    const negotiable = form.negotiable.checked || false;
    const contact = form.contact.value || "";
    const location = form.location.value || null;
    const picture = form.picture.value || ""; // Add picture field
    const author = user.user.id;
    

    // Prepare the request body with default values
    const requestBody = {
      condition: condition,
      authenticity: authenticity,
      brand_name: brand_name,
      model: model,
      description: description,
      price: price,
      negotiable: negotiable,
      contact: contact,
      location: location,
      picture: picture, // Include picture in the request body
      author: author
    };

    // Send a POST request
    try {
      const response = await axios.post(
        "https://bikroy-server.onrender.com/adds/product/",
        requestBody
      );
      if (response.status === 201) {
        // Clear the form
        form.reset();
        // toast.success("Ad created successfully!");
      } else {
        // console.log("Failed to submit form");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  if(!user.user){
    navigate("/login");
  }

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-5">Create New Ad</h1>
      <form onSubmit={handleAd} className="create-ad-form">
        {/* Existing fields */}
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Write a short description"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <select name="condition" className="form-control">
            {CONDITION_CHOICES.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="authenticity">Authenticity</label>
          <select name="authenticity" className="form-control">
            {AUTHENTICITY_CHOICES.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select name="location" className="form-control">
            {LOCATIONS_CHOICES.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
        </div>
        {/* Additional fields */}
        <div className="form-group">
          <input
            type="text"
            name="brand_name"
            placeholder="Brand Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="model"
            placeholder="Model"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>
            Negotiable
            <input
              type="checkbox"
              name="negotiable"
              className="form-control"
              style={{
                width: "auto",
                display: "inline-block",
                marginLeft: "10px",
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <input
            type="url"
            name="picture"
            placeholder="Picture URL"
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            className="form-control"
          />
        </div>
        {/* End of additional fields */}
        {/* Existing fields */}
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Create Ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdPost;
