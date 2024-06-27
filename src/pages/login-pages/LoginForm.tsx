import React from "react";
import InputField from "../../components/fields/InputField";
import MainButton from "../../components/buttons/PrimaryButton";
import "./LoginForm.scss";
import Logo from "../../assets/logo.png";

const LoginForm: React.FC = () => {
  return (
    <div className="login-form-container">
      <div className="left-container"></div>
      <div className="right-container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="input-container">
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <InputField placeholder="" type="text" />
          </div>
          <br></br>
          <br></br>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <InputField placeholder="" type="password" />
          </div>
        </div>
        <MainButton buttonText="LOGIN" />
      </div>
    </div>
  );
};

export default LoginForm;
