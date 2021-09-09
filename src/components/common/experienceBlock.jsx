import React from "react";
import List from "./list";

export default function ExperienceBlock({ icon, title, descList, years }) {
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
}
