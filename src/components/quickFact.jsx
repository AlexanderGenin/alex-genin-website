import React from "react";
import "../sass/quickFact.scss";

export default function QuickFact({ icon, heading, text, color }) {
  return (
    <div className="quick-fact">
      <div className={"icon-wrapper " + color}>{icon}</div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}
