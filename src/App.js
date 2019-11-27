import React, { Component } from "react";
import "./App.css";
import List from "./components/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "To-do 1",
          description: "What task 1 is  about",
          showDescription: false
        },
        {
          id: 2,
          title: "To-do 2",
          description: "What task 2 is  about",
          showDescription: false
        },
        {
          id: 3,
          title: "To-do 3",
          description: "What task 3 is  about",
          showDescription: false
        },
        {
          id: 4,
          title: "To-do 4",
          description: "What task 4 is  about",
          showDescription: false
        },
        {
          id: 5,
          title: "To-do 5",
          description: "What task 5 is  about",
          showDescription: false
        }
      ]
    };
  }

  bigComputation = () => {
    alert("Big computation in JavaScript");
  };

  handleOpenDescription = taskId => {
    let newTasks = Object.assign([], this.state.tasks);
    newTasks[taskId - 1].showDescription = !newTasks[taskId - 1]
      .showDescription;
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <React.Fragment>
        <h1>To Do</h1>
        <button onClick={this.bigComputation}>Run Computation</button>
        <List
          tasks={this.state.tasks}
          onOpen={this.handleOpenDescription}
          showDescription={this.state.showDescription}
        />
      </React.Fragment>
    );
  }
}
export default App;
