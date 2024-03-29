import React from "react";
import "./Button.css";

const Button = ({ text, href, newTab, onClick, type = "button" }) => {
  return (
    <a
      className="main-button"
      href={href}
      target={newTab && "_blank"}
      onClick={onClick}
      type={type}
    >
      {text}
    </a>
  );
};

export default Button;
