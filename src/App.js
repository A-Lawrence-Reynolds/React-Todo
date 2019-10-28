import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ``,
      id: "",
      done: "",
      todo: []
    };
  }

  addItem = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      done: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };
  toggleDone = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("rendering..?", this.state);
    return (
      <div className="App">
        <div className="header">
          <TodoForm addItem={this.addItem} />
        </div>
        <div className="body">
          <TodoList todo={this.state.todo} toggleDone={this.toggleDone} />
        </div>
      </div>
    );
  }
}

export default App;
