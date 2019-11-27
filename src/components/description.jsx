import React from "react";

const Description = props => {
  return (
    <div>
      <ul>
        <h4>{props.task.title}</h4>
        <p>{props.task.description}</p>
      </ul>
    </div>
  );
};

export default Description;
