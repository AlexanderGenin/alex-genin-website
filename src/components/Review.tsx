import type { FC } from "react";
import { ImQuotesLeft } from "@react-icons/all-files/im/ImQuotesLeft";
import { TReview } from "types/types";

const Review: FC<TReview> = ({ author, text, avatar }) => {
  return (
    <div className="review">
      <div className="review__avatar">{avatar}</div>
      <div className="review__content">
        <ImQuotesLeft size={74} />
        <figure>
          <blockquote cite="https://www.upwork.com/freelancers/~0132ab416b37ee78a5">
            <p>{text}</p>
          </blockquote>
          <figcaption>
            <p>— {author}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Review;
