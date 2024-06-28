import React, { useState } from "react";
import InputField from "../../components/fields/InputField";
import "./LoginInterface.scss";
import Logo from "../../assets/logo.png";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import axios from "axios";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonClick = async () => {
    let validationErrors = { username: "", password: "" };
    if (!loginData.username) {
      validationErrors.username = "Username is required.";
    }
    if (!loginData.password) {
      validationErrors.password = "Password is required.";
    }

    setErrors(validationErrors);

    if (validationErrors.username || validationErrors.password) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/user/auth-login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      //icode na iredirect ang user sa unsay role nila.
      //if admin siya, adto sa admin dashboard, cashier, cashier dashboard,if user, user dashboard
      //if role == admin goto
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <div className="left-container">
        <div className="business-name-overlay">
          <h1 className="main-title">Le' Posh</h1>
          <h2 className="sub-title">Nail House</h2>
        </div>
      </div>
      <div className="right-container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="input-container">
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <InputField
              type="text"
              placeholder=""
              value={loginData.username}
              name="username"
              onChange={handleChange}
              icon={faUser}
              error={errors.username}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder=""
              value={loginData.password}
              name="password"
              onChange={handleChange}
              icon={faLock}
              toggleIcon={showPassword ? faEyeSlash : faEye}
              onTogglePassword={togglePasswordVisibility}
              error={errors.password}
            />
          </div>
        </div>
        <PrimaryButton
          buttonText="LOGIN"
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default LoginForm;
