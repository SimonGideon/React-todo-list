import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    return (
      // <div>Hello Todoitems</div>
      <li className={styles.item}>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
        <span style={this.props.todo.completed ? completedStyle : null}>
          {this.props.todo.tittle}
        </span>
      </li>
    );
  }
}
// function TodoItem(props) {
//     return (
//         <li>{props.todo.title}</li>
//     )
// }

export default TodoItem;
