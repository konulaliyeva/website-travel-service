import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { sliderData } from "../../data/data.js";

const View = () => {

  const [slide, setSlide] = useState(0);
  const length =sliderData.length

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div
      className="max-w-[1040px] mx-auto px-4 py-16 relative flex justify-center items-center"
      id="view"
    >
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8 "
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8 "
      />
      {sliderData.map((item, index) => (
        <div
          className={index === slide ? "opacity-100" : "opacity-0"}
          key={index}
        >
          {index === slide && (
            <img className="rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default View;
