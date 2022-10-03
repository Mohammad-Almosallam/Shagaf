import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../auth/authService";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      const message = await register(userData);

      if (message.status === 400) {
        toast.error(message.data.message);
      } else if (message.status === 201) {
        toast.success("Registered!");
        navigate("/");
      } else {
        toast.error(message.statusText);
      }
    }
  }

  return (
    <div className="registerFormContainer">
      <div className="formHeading">
        <h1>
          <IoPersonOutline /> Register
        </h1>
        <h4>Please create an account</h4>
      </div>
      <div className="formContainer">
        <form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type={"text"}
              className="input"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
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
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type={"password"}
              className="input"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
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
              have an account?
              <Link to={"/login"}>login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
