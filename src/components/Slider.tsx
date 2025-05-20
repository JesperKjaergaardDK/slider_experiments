import React, { useEffect, useState } from "react";
import "../slider.css";
import sliderdata from "../data/slider.json";
import BtnSlider from "./BtnSlider";

function Slider() {
  const [slide, setSlide] = useState<number>(0);

  const next = () => {
    setSlide(slide === sliderdata.slider.length - 1 ? 0 : slide + 1)
  }

  const prev = () => {
    setSlide(slide === 0 ? sliderdata.slider.length - 1: slide - 1);
  }

  return (
    <div className="slider">
      <BtnSlider onClick={prev}>Back</BtnSlider>
      {sliderdata.slider.map((data, index) => (
        <div key={index}>
          <img
            className={slide == index ? "slide" : "slide slide-hidden"}
            src={data.src}
            alt={data.alt}
          />
        </div>
      ))}
      <BtnSlider onClick={next}>Next</BtnSlider>

      <span className="indicators">
        {sliderdata.slider.map((_, index) => (
          <button
            className={
              slide === index ? "indicator" : "indicator indicator-inactive"
            }
            key={index}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Slider;
