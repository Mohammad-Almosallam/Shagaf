import React, { useState } from "react";
import { IoPersonOutline, IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  function handleChange(e) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
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
