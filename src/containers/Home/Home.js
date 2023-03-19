import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import JobType from "../../components/JobType/JobType";
import Button from "../../components/Button/Button";
import homeMainImage from "./home-main-greeting-svg.svg";

const Home = () => {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section id="home" className="home">
      <div
        className={
          inView ? "greeting-intro-all slide-in-left" : "greeting-intro-all"
        }
        ref={imgRef}
      >
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
          <Button text="About me" href="#about" />
          <Button text="See my resume" newTab={true} href="#contact" />
        </div>
      </div>
      <div
        className={inView ? "greeting-img slide-in-right" : "greeting-img"}
        ref={imgRef}
      >
        <img src={homeMainImage} alt="" />
      </div>
    </section>
  );
};

export default Home;
