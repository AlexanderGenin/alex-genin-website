import React from "react";

export default function Subheading({ content }) {
  return (
    <h3 className="h3">
      <span className="brackets">&#123; </span>
      {content}
      <span className="brackets"> &#125;</span>
    </h3>
  );
}
