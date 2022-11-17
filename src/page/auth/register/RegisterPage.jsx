import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
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
    <div className="form">
      <div className="title">WELCOME TO REGISTER 3THL</div>
      <div className="form-body">
        <div className="username" style={{ margin: "20px auto" }}>
          <label className="form__label" for="firstName">
            User Name:{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value=""
            id="firstName"
            placeholder="Name"
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
            id="password"
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
            id="confirmPassword"
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
  );
}
export default RegisterPage;
