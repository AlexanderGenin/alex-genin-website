import Heading from "./common/Heading";
import type { FC } from "react";
import type { TReview } from "types/types";
import Carousel from "./common/Carousel";
import Review from "./Review";

type Props = {
  reviews: TReview[];
};

const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <section className="reviews">
      <div className="container">
        <Heading content={"What colleagues say"} />
        <Carousel>
          {reviews.map((review, index) => (
            <Review {...review} key={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
