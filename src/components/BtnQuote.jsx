import React from "react";

const BtnQuote = ({objStyleBtn,handleClick}) => {
  return (
    <button className="card__btn" style={objStyleBtn} onClick={handleClick}>
      {">"}
    </button>
  );
};

export default BtnQuote;
