import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./RegisterPage.scss";

function RegisterPage() {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="form">
        <div className="title">WELCOME TO REGISTER 3THL</div>
      <div className="form-body">
        <div className="username" style={{ margin: "20px auto" }}>
          <label className="form__label" for="firstName">
            First Name:{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname" style={{ margin: "20px auto" }}>
          <label className="form__label" for="lastName">
            Last Name:{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email" style={{ margin: "20px auto" }}>
          <label className="form__label" for="email">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password" style={{ margin: "20px auto" }}>
          <label className="form__label" for="password">
            Password:{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password" style={{ margin: "20px auto" }}>
          <label className="form__label" for="confirmPassword">
            Confirm Password:{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="bt-register">
        <button type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default RegisterPage;
