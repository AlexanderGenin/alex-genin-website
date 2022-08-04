import type { FC, ReactNode } from "react";

type Props = {
  items: ReactNode[];
};

const List: FC<Props> = ({ items }) => {
  return (
    <ul className="list-with-ticks">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
