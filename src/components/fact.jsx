import React from "react";

export default function Fact({ icon, title, text, color }) {
  return (
    <div className="fact">
      <div className={"fact__icon fact__icon_" + color}>{icon}</div>
      <h3 className={"fact__title"}>{title}</h3>
      <p className={"fact__text"}>{text}</p>
    </div>
  );
}
