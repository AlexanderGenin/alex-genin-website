import React from "react";

export default function TechBox({ icon, title, exp = "", type = "big" }) {
  return (
    <div className={"floating tech tech_" + type}>
      {icon}
      <div className={`tech_${type}__desc`}>
        <p className={`tech_${type}__title`}>{title}</p>
        {!(type === "small") && <p className={`tech_${type}__exp`}>{exp}</p>}
      </div>
    </div>
  );
}
