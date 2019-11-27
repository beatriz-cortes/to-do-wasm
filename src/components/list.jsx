import React, { Component } from "react";
import Task from "./task";

class List extends Component {
  render() {
    const { onOpen, tasks } = this.props;
    return (
      <div>
        {console.log()}
        {tasks.map(task => (
          <Task
            key={task.id}
            onOpen={onOpen}
            task={task}
            showDescription={task.showDescription}
          ></Task>
        ))}
      </div>
    );
  }
}

export default List;
