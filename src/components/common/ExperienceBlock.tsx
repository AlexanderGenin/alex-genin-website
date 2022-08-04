import List from "./List";
import type { FC } from "react";
import type { TExperience } from "types/types";

const ExperienceBlock: FC<TExperience> = ({ icon, title, descList, years }) => {
  return (
    <div>
      <div className="experience-block">
        <div className="experience-block__title">
          <span className="experience-block__years">{years}</span>
          <h3 className="experience-block__heading">
            {icon}
            {title}
          </h3>
        </div>
        <div className="experience-block__description">
          <List items={descList} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlock;
