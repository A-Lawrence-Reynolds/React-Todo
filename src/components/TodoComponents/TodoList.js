// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import Item from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list-div">
      {props.todo.map(item => (
        <Item key={item.id} item={item} toggleDone={props.toggleDone} />
      ))}
      <button className="clear" onClick={props.clearitem}>
        Clear
      </button>
    </div>
  );
};
export default TodoList;
