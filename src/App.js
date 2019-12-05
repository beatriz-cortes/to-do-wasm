import React, { Component } from "react";
import "./App.css";
import List from "./components/list";
import NavBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wasm: {},
      tasks: [
        {
          id: 1,
          title: "Research Docker",
          description: "Read docker docs",
          showDescription: false
        },
        {
          id: 2,
          title: "Read Rust book",
          description: "Read chapter 15",
          showDescription: false
        },
        {
          id: 3,
          title: "Work on exercise 20",
          description: "Finish exercise and create PR",
          showDescription: false
        },
        {
          id: 4,
          title: "Weekly Hang Time",
          description: "Attend meeting",
          showDescription: false
        },
        {
          id: 5,
          title: "React training",
          description: "Finish chapter 30",
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

  handleDelete = taskId => {
    const tasks = this.state.tasks.filter(c => c.id !== taskId);
    this.setState({ tasks });
  };

  render() {
    const { wasm, tasks } = this.state;

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.tasks.length} />
        <h4>What's your name?</h4>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <h2>{wasm.hello && wasm.hello(this.state.name)}</h2>
        <List
          tasks={tasks}
          onOpen={this.handleOpenDescription}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
