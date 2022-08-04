import type { FC } from "react";
import type { TFact } from "types/types";

type Props = TFact & { color: string };

const Fact: FC<Props> = ({ icon, title, text, color }) => {
  return (
    <div className="fact">
      <div className={"fact__icon fact__icon_" + color}>{icon}</div>
      <h3 className={"fact__title"}>{title}</h3>
      <p className={"fact__text"}>{text}</p>
    </div>
  );
};

export default Fact;
