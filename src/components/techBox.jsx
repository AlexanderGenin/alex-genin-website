import React from "react";
import "../sass/techBox.scss";

export default function TechBox({ icon, title, exp = "", type = "big" }) {
  return (
    <div className={"tech-box floating " + type}>
      {icon}
      <div className="tech-desc">
        <p className="tech-title">{title}</p>
        {!(type === "small") && <p className="tech-exp">{exp}</p>}
      </div>
    </div>
  );
}
