import React from "react";
import "../sass/list.scss";

export default function List({ items }) {
  return (
    <ul className="list-with-ticks">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
