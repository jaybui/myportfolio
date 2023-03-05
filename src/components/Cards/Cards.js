import React from "react";
import "./Cards.css";
import Button from "../../components/Button/Button";

const Cards = ({ imgsrc, name, description, viewcodelink, demolink }) => {
  return (
    <div className="card">
      <img src={`${imgsrc}`} className="project-img" alt="" />
      <div className="project-name">{name}</div>
      <p className="project-description">{description}</p>
      <div className="project-buttons">
        <Button text="Code" newTab={true} href={`${viewcodelink}`} />
        <Button text="Demo" newTab={true} href={`${demolink}`} />
      </div>
    </div>
  );
};

export default Cards;
