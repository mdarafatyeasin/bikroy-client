import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();

  const usenavigete = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    // Prepare the request body
    const requestBody = {
      username: username,
      password: password,
    };

    // Request options for the fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    // Make the fetch request
    fetch("https://bikroy-server.onrender.com/account/login/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Data received:", data);
        setError(data.error);
        localStorage.setItem("token", data.token, "id", data.user.id);
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("username", data.user.username);
        usenavigete("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(error);
  return (
    <div className="login-section">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>User Login</h1>
        <div>
          <input type="text" name="username" placeholder="Username" required />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="register-link">
          <p>
            Dont have an account? <Link to="/registration">Register</Link>
          </p>
        </div>
        <input className="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
