import React from "react";
import List from "./list";
import "../sass/experience.scss";

export default function Experience({ icon, title, descList }) {
  return (
    <div>
      <div className="experience-block">
        <div className="experience-title">
          <h3>
            {icon}
            {title}
          </h3>
        </div>
        <div className="experience-desc">
          <List items={descList} />
        </div>
      </div>
    </div>
  );
}
