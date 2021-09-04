import React from "react";
import List from "./list";

export default function ExperienceBlock({ icon, title, descList }) {
  return (
    <div>
      <div className="experience-block">
        <div className="experience-block__title">
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
