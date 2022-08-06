import Heading from "./common/Heading";
import { ImQuotesLeft } from "react-icons/im";
import { HiOutlineExternalLink } from "react-icons/hi";
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
        {/* <div className="review">
          <div className="review__avatar">{avatar}</div>
          <div className="review__content">
            <ImQuotesLeft size={74} />
            <figure>
              <blockquote cite="https://www.upwork.com/freelancers/~0132ab416b37ee78a5">
                <p>{text}</p>
              </blockquote>
              <figcaption>
                <p>— {author}</p>
                <div className="cite">
                  <a
                    href="https://www.upwork.com/freelancers/~0132ab416b37ee78a5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <cite>See it on UpWork &nbsp;</cite>
                    <HiOutlineExternalLink size={18} />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div> */}
        <Carousel>
          {reviews.map((review) => (
            <Review {...review} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
