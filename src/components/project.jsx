import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import List from "./common/list";

export default function Project({
  name,
  description,
  techs,
  images,
  showLink,
  reflect,
}) {
  const laptopSizeQuery = "(min-width: 768px)";
  const [largerThanTablet, setLargerThanTablet] = useState(
    window.matchMedia(laptopSizeQuery).matches
  );

  useEffect(() => {
    const handler = (e) => setLargerThanTablet(e.matches);
    window.matchMedia(laptopSizeQuery).addEventListener("change", handler);
  });

  return (
    <div className={"project" + (reflect ? " reflect" : "")}>
      <div className="description">
        <h4 className="description__title">{name}</h4>
        {!largerThanTablet && (
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
      {largerThanTablet && (
        <div className={"images" + (reflect ? " images_adjust" : "")}>
          {images.map(({ url, alt }, index) => (
            <img src={url} alt={alt} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
