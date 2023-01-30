import React from "react";

const Photo = (props) => {
  return (
    <>
      <article className="pictures">
        <img src={props.source} alt={props.alt} style={{ width: "100%" }} />
      </article>
    </>
  );
};

export default Photo;
