// BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <button className="lg:hidden" onClick={handleGoBack}>
      <img
        src="icon\back-arrow.svg"
        alt="icon"
        className="w-auto h-auto cursor-pointer"
      />
    </button>
  );
};

export default BackButton;
