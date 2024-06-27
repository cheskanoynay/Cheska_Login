import React from "react";
import "./PrimaryButton.scss";

interface MainButtonProps {
  buttonText: string;
}

function MainButton({ buttonText }: MainButtonProps) {
  const handleButtonClick = () => {
    console.log("CLICKED!");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
}

export default MainButton;
