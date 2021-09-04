import React from "react";

export default function Stack({ list, stack }) {
  return (
    <section className="stack">
      <div className="dark-wrapper">
        <h3 className="stack__heading">
          Working with <span className="stack__heading_highlight">{stack}</span>
        </h3>
        <div className="stack-techs">
          {list.map(({ name, description, icon }, index) => {
            return (
              <div className="stack-tech floating" key={index}>
                {icon}
                <p className="stack-tech__name">{name}</p>
                <p className="stack-tech__description">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
