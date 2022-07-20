import React from "react";
import TypeIt from "typeit-react";
import "../../index.css";

const JobType = () => {
	return (
		<TypeIt
			style={{ color: "#eebbc3", fontSize: "var(--subheading-fontsize)" }}
			getBeforeInit={(instance) => {
				instance
					.type("Software Developre")
					.pause(750)
					.delete(2)
					.pause(500)
					.type("er")
					.pause(750)
					.delete()
					.pause(500)
					.type("Control Engineer")
					.pause(750)
					.options({ loop: true });

				// Remember to return it!
				return instance;
			}}
		/>
	);
};

export default JobType;
