import React from "react";

const Description = props => {
  return (
    <div class="card">
      <div class="card-body">{props.task.description}</div>
    </div>
  );
};

export default Description;
