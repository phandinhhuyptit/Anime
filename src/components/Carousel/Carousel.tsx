import React, { PropsWithChildren, useCallback, useState } from "react";
import Slider, { Settings } from "react-slick";
import NextArrow from "./Next";
import PrevArrow from "./Prev";

interface CarouselProps {
  settings?: Settings;
}

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Carousel = (props: PropsWithChildren<CarouselProps>) => {
  const [swiped, setSwiped] = useState(false);

  const handleSwiped = useCallback(() => {
    setSwiped(true);
  }, [setSwiped]);

  const handleOnItemClick = useCallback(
    (e) => {
      if (swiped) {
        e.stopPropagation();
        e.preventDefault();
        setSwiped(false);
      }
    },
    [swiped]
  );

  const settings = { ...defaultSettings, ...props.settings };

  return (
    <Slider onSwipe={handleSwiped} {...settings}>
      {React.Children.map(props.children, (child) => (
        <div onClickCapture={handleOnItemClick}>{child}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
