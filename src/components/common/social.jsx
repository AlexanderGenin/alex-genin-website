import React from "react";

export default function Social({ index, url, icon, style }) {
  return (
    <a
      key={index}
      className="social-networks__link"
      href={url}
      target="_blank"
      rel="noreferrer"
      style={style}
    >
      {icon}
    </a>
  );
}
