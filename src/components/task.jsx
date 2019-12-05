import React, { Component } from "react";
import Description from "./description";

class Task extends Component {
  render() {
    const { onOpen, task, showDescription, onDelete } = this.props;
    return (
      <div>
        <div class="col-sm-4">
          <button
            onClick={() => onOpen(task.id)}
            className="btn btn-outline-primary btn-lg m-2 btn-block"
          >
            {task.title}
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="btn btn-outline-success btn-sm m-2"
          >
            Done!
          </button>
        </div>
        {showDescription ? <Description task={task} /> : null}
      </div>
    );
  }
}

export default Task;
