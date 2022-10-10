import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/16/2c/ab/fairmont-baku.jpg?w=2000&h=-1&s=1',
  },
  {
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/76369574.jpg?k=c1ad9db6f1e113092fd80ac0008454039f3cdea6ff31f3f099e5100befd874a0&o=&hp=1',
  },
  {
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/309510019.jpg?k=9641a96125b0e9c70e800c6bd12c6fa17a7cdda1ae01320cf828674ebfe6e5a3&o=&hp=1',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'} key={index}>
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
