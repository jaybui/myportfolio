import React, { useState } from "react";
import "./ProfilePicture.css";
import profileImage from "./profile-svg.svg";

const ProfilePicture = () => {
	const [hoverShowActive, setHoverShowActive] = useState("hover-show");

	const hoverShow = () => {
		hoverShowActive === "hover-show"
			? setHoverShowActive("hover-show active")
			: setHoverShowActive("hover-show");
	};

	return (
		<div className="profile-img-container">
			{/* <img src={profileImage} alt="" className="profile-image" /> */}
			<div className="logo">
				<img src={profileImage} alt="" className="profile-image" />
				<div onClick={hoverShow} className={hoverShowActive}>
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
