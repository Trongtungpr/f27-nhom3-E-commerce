import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Value } from "sass";
import "./RegisterPage.scss";

function RegisterPage() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (password === confirmPassword) {
    }
  };
  return (
    <div>
      <div className="login-page">
        <div className="header-login-page">
          <div className="logo-header-login-page">
            <a href="logo">
              <img
                className="logo-login"
                src={require("../../../assets/images/Plantiful Garden Logo.gif")}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="form">
          <div className="title">WELCOME TO REGISTER 3THL</div>
          <div className="form-body">
            <div className="username" style={{ margin: "20px auto" }}>
              <label className="form__label" for="firstName">
                User Name:{" "}
              </label>
              <input
              {...register("Name")}
                className="form__input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="email" style={{ margin: "20px auto" }}>
              <label className="form__label" for="email">
                Email:{" "}
              </label>
              <input
                type="email"
                className="form__input"
                value=""
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
                value={password}
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
                value={confirmPassword}
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
      </div>
    </div>
  );
}
export default RegisterPage;
