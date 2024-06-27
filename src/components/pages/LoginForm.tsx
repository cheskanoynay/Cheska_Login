import React from 'react';
import InputField from "../fields/InputField";
import MainButton from "../buttons/MainButton";
import './LoginForm.scss';

function LoginForm() {
    return (
        <div className="login-form-container">
            <div className="left-container"></div>
            <div className="right-container">
                <img src="/assets/logo.png" alt="Logo" className="logo" />
                <InputField placeholder="Username: " type="text" />
                <InputField placeholder="Password: " type="password" />
                <br />
                <MainButton buttonText="LOGIN" />
            </div>
        </div>
    );
}

export default LoginForm;
