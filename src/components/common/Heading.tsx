import type { FC, ReactNode } from "react";

type Props = {
  content: ReactNode;
};

const Heading: FC<Props> = ({ content }) => {
  return <h2 className="h2">{content}</h2>;
};

export default Heading;
