import React from "react";
import Cards from "../Cards/Cards";
import "./CardSlider.css";
import Slider from "react-slick";
import experienceImage from "../../containers/Experience/experience-svg.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ robots }) => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <Cards
          imgsrc={experienceImage}
          name="Project 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book"
          viewcodelink="#home"
          demolink="#home"
        />
        <Cards
          imgsrc={experienceImage}
          name="Project 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book"
          viewcodelink="#home"
          demolink="#home"
        />
        <Cards
          imgsrc={experienceImage}
          name="Project 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book"
          viewcodelink="#home"
          demolink="#home"
        />
        <Cards
          imgsrc={experienceImage}
          name="Project 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book"
          viewcodelink="#home"
          demolink="#home"
        />
      </Slider>
    </div>
  );
};

export default CardSlider;
