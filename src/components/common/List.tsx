import type { FC } from "react";
import type { ListItem } from "types/types";

type Props = {
  items: ListItem[];
};

const List: FC<Props> = ({ items }) => {
  return (
    <ul className="list-with-ticks">
      {items.map((item, index) => (
        <li key={index} className="list-with-ticks_el">
          {item.text}
          {item.subList && (
            <ul className="list-with-ticks__sublist">
              {item.subList.map((subItem, i) => (
                <li key={i}>{subItem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
