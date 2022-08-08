import { Children, useState } from "react";
import type { FC, ReactNode } from "react";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

type Props = {
  children: ReactNode;
};

const getSlideWidth = () => {
  if (window.screen.width >= 1024) {
    return 820;
  }
  if (window.screen.width >= 768) {
    return 620;
  }
  if (window.screen.width >= 480) {
    return window.screen.width - 64 - 80;
  }
  return window.screen.width - 64 - 40;
};

const Carousel: FC<Props> = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(getSlideWidth());

  window.addEventListener("resize", () => {
    setSlideWidth(getSlideWidth());
  });

  const length = Children.count(children);
  let offset = -slideIndex * slideWidth;

  const handleLeftClick = () => {
    if (slideIndex !== 0) setSlideIndex((i) => i - 1);
  };

  const handleRightClick = () => {
    if (slideIndex !== length - 1) setSlideIndex((i) => i + 1);
  };

  return (
    <div className="carousel__container">
      <BsChevronLeft
        className={
          "carousel__arrow carousel__arrow_left " +
          (slideIndex === 0 ? "carousel__arrow_hidden" : "")
        }
        onClick={slideIndex === 0 ? undefined : handleLeftClick}
      />
      <div className="carousel__window">
        <div
          className="carousel__elements"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </div>
      </div>
      {
        <BsChevronRight
          className={
            "carousel__arrow carousel__arrow_right " +
            (slideIndex === length - 1 ? "carousel__arrow_hidden" : "")
          }
          onClick={slideIndex === length - 1 ? undefined : handleRightClick}
        />
      }
    </div>
  );
};

export default Carousel;
