import React from "react";
import InputField from "../../components/fields/InputField";
import MainButton from "../../components/buttons/PrimaryButton";
import "./LoginForm.scss";
import Logo from "../../assets/logo.png";

function LoginForm() {
  return (
    <div className="login-form-container">
      <div className="left-container"></div>
      <div className="right-container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="input-container">
          <InputField placeholder="Username" type="text" />
          <InputField placeholder="Password" type="password" />
        </div>
        <MainButton buttonText="LOGIN" />
      </div>
    </div>
  );
}

export default LoginForm;
