import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import List from "./list";
import "../sass/project.scss";

export default function Project({
  name,
  description,
  techs,
  images,
  showLink,
  portfolioMarker,
}) {
  if (portfolioMarker) {
    return (
      <div className="project-container">
        <div className={"images-container " + portfolioMarker}>
          {images.map((image) => image)}
        </div>
        <div className="description-container">
          <h4>{name}</h4>
          <p className="description-text">{description}</p>
          <List items={techs} />
          {showLink && (
            <div className="link-container">
              <a href="#">
                Take a look
                <HiArrowNarrowRight size={22} />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="project-container">
      <div className="description-container">
        <h4>{name}</h4>
        <p className="description-text">{description}</p>
        <List items={techs} />
        {showLink && (
          <div className="link-container">
            <a href="#">
              Take a look
              <HiArrowNarrowRight size={22} />
            </a>
          </div>
        )}
      </div>
      <div className={"images-container"}>{images.map((image) => image)}</div>
    </div>
  );
}
