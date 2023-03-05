import React from "react";
import "./Button.css";

const Button = ({ text, className, href, newTab }) => {
  return (
    <a className="main-button" href={href} target={newTab && "_blank"}>
      {text}
    </a>
  );
};

export default Button;
