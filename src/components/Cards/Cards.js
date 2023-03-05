import React from "react";
import "./Cards.css";
import Button from "../../components/Button/Button";

const Cards = ({ imgsrc, name, description, viewcodelink, demolink }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={`${imgsrc}`} className="project-img" alt="" />
        <div className="project-name">{name}</div>
      </div>
      <div className="card-bottom">
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <Button text="Code" newTab={true} href={`${viewcodelink}`} />
          <Button text="Demo" newTab={true} href={`${demolink}`} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
