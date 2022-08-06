import { Children, useState } from "react";
import type { FC, ReactNode } from "react";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

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
  };

  const handleRightClick = () => {
    if (slideIndex !== length - 1) setSlideIndex((i) => i + 1);
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
