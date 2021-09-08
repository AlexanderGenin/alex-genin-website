import React, { useState, useEffect } from "react";
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
  const tabletSizeQuery = "(min-width: 481px)";
  const [largerThanMobile, setLargerThanMobile] = useState(
    window.matchMedia(tabletSizeQuery).matches
  );

  useEffect(() => {
    const handler = (e) => setLargerThanMobile(e.matches);
    window.matchMedia(tabletSizeQuery).addEventListener("change", handler);
  });

  return (
    <div className={"project" + (reflect ? " reflect" : "")}>
      <div className="description">
        <h4 className="description__title">{name}</h4>
        {!largerThanMobile && (
          <div className={"images" + (reflect ? " images_adjust" : "")}>
            {images.map(({ url, alt }, index) => (
              <img src={url} alt={alt} key={index} />
            ))}
          </div>
        )}
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
      {largerThanMobile && (
        <div className={"images" + (reflect ? " images_adjust" : "")}>
          {images.map(({ url, alt }, index) => (
            <img src={url} alt={alt} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
