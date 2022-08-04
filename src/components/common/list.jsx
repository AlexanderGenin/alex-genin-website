import React from "react";

export default function List({ items }) {
  return (
    <ul className="list-with-ticks">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
