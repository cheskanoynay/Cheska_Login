import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./InputField.scss";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconDefinition;
  toggleIcon?: IconDefinition;
  onTogglePassword?: () => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  icon,
  toggleIcon,
  onTogglePassword,
  error,
}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={error ? "input-error" : ""}
      />
      {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
      {toggleIcon && onTogglePassword && (
        <FontAwesomeIcon
          icon={toggleIcon}
          className="toggle-icon"
          onClick={onTogglePassword}
        />
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default InputField;
