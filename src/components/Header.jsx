import React from "react";

const Header = ({ handleDarkToggleMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => {
          handleDarkToggleMode((prevMode) => !prevMode);
        }}
        className="save-btn"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
