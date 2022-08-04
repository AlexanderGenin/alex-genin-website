import type { FC } from "react";

type Props = {
  content: string;
};

const Subheading: FC<Props> = ({ content }) => {
  return (
    <h3 className="h3">
      <span className="brackets">&#123; </span>
      {content}
      <span className="brackets"> &#125;</span>
    </h3>
  );
};

export default Subheading;
