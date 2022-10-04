import React, { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../auth/authService";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const message = await login(userData);

    if (message.status === 400) {
      toast.error(message.data.message);
    } else if (message.status === 200) {
      toast.success("Registered!");
      navigate("/");
    } else {
      toast.error(message.statusText);
    }
  }

  return (
    <div className="registerFormContainer">
      <div className="formHeading">
        <h1>
          <IoLogInOutline /> Login
        </h1>
        <h4>Please Log in to set goals 🎯 </h4>
      </div>
      <div className="formContainer">
        <form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <div className="form-group">
            <label>Email</label>
            <input
              type={"email"}
              className="input"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type={"password"}
              className="input"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div>
            <button type="submit" className="input submitBtn">
              Submit
            </button>
          </div>
          <div>
            <p>
              Don't have an account?
              <Link to={"/register"}>register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
