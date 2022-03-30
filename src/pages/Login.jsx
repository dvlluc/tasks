import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
  return (
    <div className="Login">
      <h1>Log in</h1>
      <MyInput type="text" placeholder="Type login" />
      <MyInput type="password" placeholder="Type password" />
      <MyButton>Log in</MyButton>
    </div>
  );
};

export default Login;
