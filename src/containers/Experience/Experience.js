import React from "react";
import "./Experience.css";
import experienceImage from "./experience-svg.svg";
import { Tabs } from "../../components/Tabs/Tabs";
import downloadIcon from "./download-icon.svg";

const Experience = () => {
	return (
		<section className="experience">
			<div className="experience-text-all">
				<div className="experience-header">
					<span className="logo-signs">&lt;</span>
					<h1 className="experience-text-header">Experience.</h1>
					<span className="logo-signs">/&gt;</span>
					<a
						href="http://www.a-cc.com/"
						className="download-icon"
						rel="noreferrer"
						target={"_blank"}
					>
						<img src={downloadIcon} alt="" />
					</a>
				</div>
				<Tabs>
					<div label="A-CC">
						<h3>
							<span className="experience-job-tittle">Control Engineer</span>
							<span className="company">
								{" @ "}
								<a
									href="http://www.a-cc.com/"
									className="inline-link"
									rel="noreferrer"
									target={"_blank"}
								>
									Automation & Control Concepts
								</a>
							</span>
						</h3>
						<p className="range">January 2021 - Present</p>
						<div className="experience-detail-list">
							<ul>
								<li>Lorem 1</li>
								<li>Lorem 2</li>
								<li>Lorem 3</li>
							</ul>
						</div>
					</div>
					<div label="GPI">
						<h3>
							<span className="experience-job-tittle">
								Electrical Engineering Intern
							</span>
							<span className="company">
								{" @ "}
								<a
									href="https://www.graphicpkg.com/"
									className="inline-link"
									rel="noreferrer"
									target={"_blank"}
								>
									Graphic Packaging International
								</a>
							</span>
						</h3>
						<p className="range">May 2020 - August 2020</p>
						<div className="experience-detail-list">
							<ul>
								<li>
									Generated replacement plan for robotic system by finding
									hardware and software, inquiring different quotes, and doing
									cost benefit analysis
								</li>
								<li>
									Assisted in robotic safety upgrade project by performing quick
									and efficient wire tracing ability to verify electrical
									schematic of robot
								</li>
								<li>
									Modified system{"’"}s ladder logic code to perform better
									handshaking between two machines and maximize space
									utilization
								</li>
							</ul>
						</div>
					</div>
					<div label="SIUE">
						<h3>
							<span className="experience-job-tittle">
								Undergraduate Research Assistant
							</span>
							<span className="company">
								{" @ "}
								<a
									href="https://www.siue.edu/"
									className="inline-link"
									rel="noreferrer"
									target={"_blank"}
								>
									Southern Illinois University Edwardsville
								</a>
							</span>
						</h3>
						<p className="range">August 2019 - December 2020</p>
						<div className="experience-detail-list">
							<ul>
								<li>
									Research dealt with applying NASA Scientific remote sensing
									expertise to the problem of obtaining accurate and globally
									distributed measurements of the atmosphere
								</li>
								<li>
									Leverage Design of Experiment process and apply Artificial
									Intelligence method to retrieve raindrop size distribution
								</li>
								<li>
									Process the radar data by using MATLAB and Visual Basic to
									successfully simulate and verify more than 15 cases
								</li>
							</ul>
						</div>
					</div>
				</Tabs>
			</div>
			<div className="experience-img">
				<img src={experienceImage} alt="" />
			</div>
		</section>
	);
};

export default Experience;
