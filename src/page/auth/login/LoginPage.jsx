import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAction } from "../../../stores/slices";
import "./LoginPage.scss";
// import { ReactComponent as ReactLogo } from "../../../../svg/Lias.svg";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const schema = yup
  .object({
    email: yup.string().required("Email is required").matches(emailRegex),
    password: yup
      .string()
      .min(8, "Password must be at least 8 character")
      .required("Password is required"),
  })
  .required();

export const LoginPage = () => {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  if (userInfo.data) {
    return <Navigate to={"/"} />;
  }

  const onLogin = (values) => {
    dispatch(loginAction(values));
  };

  return (
    <div  className="login-page">
      <div className="login-header">
        <div className="logo">
          <a href="logo">
            <img
              className="logos"
              src={require("../../../assets/images/Plantiful Garden Logo.gif")}
              alt=""
            />
          </a>
        </div>
        <div >
          <div>
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              onFinish={handleSubmit(onLogin, (err) => console.log(errors))}
              onFinishFailed={() => {}}
              autoComplete="off"
              className="basic"
            >
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, name, ref } }) => (
                  <Form.Item
                    validateStatus={errors.email && "error"}
                    help={errors?.email?.message}
                    name={name}
                    className="users-item"
                  >
                    <Input
                      onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Email"
                      ref={ref}
                      className="input-item"
                    />
                  </Form.Item>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, name, ref } }) => (
                  <Form.Item
                    validateStatus={errors.password && "error"}
                    // @ts-ignore
                    help={errors?.password?.message}
                    name={name}
                    className="password"
                  >
                    <Input.Password
                      onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Password"
                      ref={ref}
                      className="pass-item"
                    />
                  </Form.Item>
                )}
              />
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  // loading={userInfo.loading}
                  className="btton"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
