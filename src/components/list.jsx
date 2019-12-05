import React, { Component } from "react";
import Task from "./task";

class List extends Component {
  render() {
    const { onOpen, tasks, onDelete } = this.props;
    return (
      <div>
        {console.log()}
        {tasks.map(task => (
          <Task
            key={task.id}
            onOpen={onOpen}
            onDelete={onDelete}
            task={task}
            showDescription={task.showDescription}
          ></Task>
        ))}
      </div>
    );
  }
}

export default List;
