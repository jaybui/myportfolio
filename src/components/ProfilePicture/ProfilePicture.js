import React, { useState, useEffect, useCallback } from "react";
import "./ProfilePicture.css";
import profileImage from "./profile-svg.svg";

const ProfilePicture = () => {
  const [hoverShowActive, setHoverShowActive] = useState("hover-show");

  const hoverShow = useCallback(() => {
    setHoverShowActive((prevState) =>
      prevState === "hover-show" ? "hover-show active" : "hover-show"
    );
  }, []);

  // useEffect(() => {
  //   const hoverShowElem = document.querySelector(".hover-show");

  //   hoverShowElem.addEventListener("click", hoverShow);

  //   return () => {
  //     hoverShowElem.removeEventListener("click", hoverShow);
  //   };
  // }, [hoverShow]);

  //Disable hoverShow when window is less that 480px
  useEffect(() => {
    const handleClick = () => {
      if (window.innerWidth <= 480) {
        return;
      }

      hoverShow();
    };

    const hoverShowElem = document.querySelector(".hover-show");

    hoverShowElem.addEventListener("click", handleClick);

    return () => {
      hoverShowElem.removeEventListener("click", handleClick);
    };
  }, [hoverShow]);

  return (
    <div className="profile-img-container">
      {/* <img src={profileImage} alt="" className="profile-image" /> */}
      <div className="logo">
        <img src={profileImage} alt="" className="profile-image" />
        <div className={hoverShowActive}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
