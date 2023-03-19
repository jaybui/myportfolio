import React, { useState } from "react";
import "./ScrollToTopButton.css";
import arrowUp from "./Arrow_Up.svg";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setShowButton(scrollTop > 0);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {showButton && (
        <button className="scroll-to-top-button" onClick={handleClick}>
          <img className="arrow-up" src={arrowUp} alt="ArrowUp Icon" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
