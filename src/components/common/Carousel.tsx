import { Children, useState } from "react";
import type { FC, ReactNode } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  children: ReactNode;
};

const SLIDE_WIDTH = 900 - 40 * 2;

const Carousel: FC<Props> = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const length = Children.count(children);
  let offset = -slideIndex * SLIDE_WIDTH;

  const handleLeftClick = () => {
    if (slideIndex !== 0) setSlideIndex((i) => i - 1);

    // const newOffset = offset + slideIndex * SLIDE_WIDTH;

    // offset = Math.min(newOffset, 0);
  };

  const handleRightClick = () => {
    if (slideIndex !== length - 1) setSlideIndex((i) => i + 1);
    // setOffset((currOffset) => {
    //   const newOffset = currOffset - SLIDE_WIDTH;
    //   const maxOffset = -SLIDE_WIDTH * (length - 1);

    //   return Math.max(newOffset, maxOffset);
    // });
  };

  return (
    <div className="carousel__container">
      <div className="carousel__arrow carousel__arrow_left">
        {slideIndex !== 0 && (
          <BsChevronLeft
            className="carousel__arrow_svg"
            size={44}
            onClick={handleLeftClick}
          />
        )}
      </div>

      <div className="carousel__window">
        <div
          className="carousel__elements"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </div>
      </div>
      <div className="carousel__arrow carousel__arrow_left">
        {slideIndex !== length - 1 && (
          <BsChevronRight
            className="carousel__arrow_svg"
            size={44}
            onClick={handleRightClick}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
