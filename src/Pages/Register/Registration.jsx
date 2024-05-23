// import { useState } from "react";
import { Link } from "react-router-dom";
import './Registration.css'

const Registration = () => {
//   const [registrationSuccess, setRegistrationSuccess] = useState(true);

  const handelRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const email = form.email.value;
    const phone_number = form.number.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    // Prepare the request body
    const requestBody = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      password: password,
      confirm_password: confirm_password,
    };

    // Request options for the fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    // Make the fetch request
    fetch(
      "https://bikroy-server.onrender.com/account/register/",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        // setRegistrationSuccess(false);
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div className="registration-congener">
      <div className="registration-content">
          <h1 className="registration-title">Registration</h1>

          <form className="registration-form" onSubmit={handelRegistration}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="name-section">
              <div className="input-box">
                <input
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="number"
                placeholder="Number"
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Accept trams and condition.
              </label>
            </div>
            <input
              className="registration-button"
              type="submit"
              value="Register"
            />
            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Registration;
