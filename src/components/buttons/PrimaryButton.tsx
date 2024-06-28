import React from "react";
import "./PrimaryButton.scss";

interface PrimaryButtonProps {
  buttonText: string;
  handleButtonClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  handleButtonClick,
}) => {
  return (
    <div>
      <button className="primary-button" onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
