import React from "react";
import "./Home.css";
import JobType from "../../components/JobType/JobType";
import Button from "../../components/Button/Button";
import homeMainImage from "./home-main-greeting-svg.svg";

const Home = () => {
  return (
    <section className="home">
      <div className="greeting-intro-all">
        <h1 className="greeting-header">
          Hello, this is
          <strong className="greeting-name"> Jay. </strong>
          <span className="wave-emoji">👋🏻</span>
        </h1>
        <h3 className="greeting-job-intro">
          <span className="greeting-job-item-1">I'm a</span>
          <span style={{ display: "inline-block" }}>
            <JobType />
          </span>
        </h3>
        <div className="button-greeting">
          <Button text="Contact me" href="#contact" />
          <Button text="See my resume" newTab={true} href="#contact" />
        </div>
      </div>
      <div className="greeting-img">
        <img src={homeMainImage} alt="" />
      </div>
    </section>
  );
};

export default Home;
