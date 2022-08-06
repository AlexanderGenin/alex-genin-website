import { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "@react-icons/all-files/hi/HiArrowNarrowRight";
import List from "./common/List";
import type { FC } from "react";
import type { TProject } from "types/types";

const Project: FC<TProject> = ({
  name,
  description,
  techs,
  images,
  showLink,
  reflect,
  href,
}) => {
  const laptopSizeQuery = "(min-width: 768px)";
  const [largerThanTablet, setLargerThanTablet] = useState(
    window.matchMedia(laptopSizeQuery).matches
  );

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setLargerThanTablet(e.matches);
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
            <a
              className="link__anchor"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
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
};

export default Project;
