import React, { Component } from "react";
import Description from "./description";

class Task extends Component {
  render() {
    const { onOpen, task, showDescription } = this.props;
    return (
      <div>
        <button onClick={() => onOpen(task.id)}>{task.title}</button>
        {showDescription ? <Description task={task} /> : null}
      </div>
    );
  }
}

export default Task;
