import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Route, useNavigate } from "react-router";
import { registerAction } from "../../../stores/slices/register.slice";
import "./RegisterPage.scss";

function RegisterPage() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (password === confirmPassword) {
        dispatch(registerAction(data))
    }
    navigate(-1);
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
               {...register("Email")}
                type="email"
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="password" style={{ margin: "20px auto" }}>
              <label className="form__label" for="password">
                Password:{" "}
              </label>
              <input
               {...register("Password")}
                className="form__input"
                type="password"
                placeholder="Password"
                onChange={(e)=> setPassword(e.target.value) }
              />
            </div>
            <div className="confirm-password" style={{ margin: "20px auto" }}>
              <label className="form__label" for="confirmPassword">
                Confirm Password:{" "}
              </label>
              <input
               {...register("Confirm Password")}
                className="form__input"
                type="password"
                placeholder="Confirm Password"
                onChange={(e)=> setConfirmPassword(e.target.value) }
              />
            </div>
          </div>
          <div class="bt-register">
            <button type="submit" class="btn" onClick={onSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
