import React from "react";

const CustomButton = ({ handle, labelButton }) => {
  return (
    <div>
      <button type="button" className="btn btn-dark" onClick={handle}>
        {labelButton}
      </button>
    </div>
  );
};

export default CustomButton;
