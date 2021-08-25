import React from "react";

export default function Subheading({ content }) {
  return (
    <h4 className="sections-h4">
      <span class="brackets">&#123; </span>
      {content}
      <span class="brackets"> &#125;</span>
    </h4>
  );
}
