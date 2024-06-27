import React from 'react';

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
