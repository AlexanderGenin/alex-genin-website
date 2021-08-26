import React from "react";

export default function Subheading({ content }) {
  return (
    <h3 className="sections-h3">
      <span class="brackets">&#123; </span>
      {content}
      <span class="brackets"> &#125;</span>
    </h3>
  );
}
