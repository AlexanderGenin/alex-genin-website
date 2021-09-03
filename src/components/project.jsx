import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import List from "./list";

export default function Project({
  name,
  description,
  techs,
  images,
  showLink,
  reflect,
}) {
  return (
    <div className={"project " + (reflect && "reflect")}>
      <div className="description">
        <h4 className="description__title">{name}</h4>
        <p className="description__text">{description}</p>
        <List items={techs} />
        {showLink && (
          <div className="link">
            <a className="link__anchor" href="#">
              Take a look
              <HiArrowNarrowRight size={22} />
            </a>
          </div>
        )}
      </div>
      <div className={"images " + (reflect && "images_adjust")}>
        {images.map((image) => image)}
      </div>
    </div>
  );
}
