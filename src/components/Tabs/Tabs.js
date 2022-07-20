import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	const handleClick = (event, newActiveTab) => {
		event.preventDefault();
		setActiveTab(newActiveTab);
	};

	return (
		<div className="tabs-list">
			<ul className="tabs">
				{children.map((tab) => {
					return (
						<li
							className={tab.props.label === activeTab ? "current" : ""}
							key={tab.props.label}
							onClick={(event) => handleClick(event, tab.props.label)}
						>
							{tab.props.label}
						</li>
					);
				})}
			</ul>
			{children.map((one) => {
				return one.props.label === activeTab ? (
					<div key={one.props.label} className="content">
						{" "}
						{one.props.children}{" "}
					</div>
				) : (
					<div key={one.props.label}></div>
				);
			})}
		</div>
	);
};

export { Tabs };
