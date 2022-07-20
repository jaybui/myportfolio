import React from "react";
import "./Cards.css";
import Button from "../../components/Button/Button";

const Cards = ({ imgsrc, name, description, viewcodelink, demolink }) => {
	return (
		<div className="card-box">
			<img alt={`${name}`} src={`${imgsrc}`} className="project-image" />
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
