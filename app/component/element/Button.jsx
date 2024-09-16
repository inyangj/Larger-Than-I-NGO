
import React from "react";

const Button = ({ children, onClick, className, id }) => {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`${className} text-xl text-black px-[35px] py-5 hover:bg-opacity-70`}
    >
      {children}
    </button>
  );
};

export default Button;
