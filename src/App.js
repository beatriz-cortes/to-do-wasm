import React, { Component } from "react";
import "./App.css";
import List from "./components/list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wasm: {},
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
      ],
      name: ""
    };
  }

  componentDidMount() {
    this.loadWasm();
  }

  loadWasm = async () => {
    try {
      const wasm = await import("pkg");
      this.setState({ wasm });
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  handleOpenDescription = taskId => {
    let newTasks = Object.assign([], this.state.tasks);
    newTasks[taskId - 1].showDescription = !newTasks[taskId - 1]
      .showDescription;
    this.setState({ tasks: newTasks });
  };

  render() {
    const { wasm, tasks } = this.state;

    return (
      <React.Fragment>
        <h2>{wasm.hello && wasm.hello(this.state.name)}</h2>
        <List tasks={tasks} onOpen={this.handleOpenDescription} />
        <p>Change list owner</p>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
      </React.Fragment>
    );
  }
}

export default App;
