/* eslint-disable */ 
import React from "react";
import styles from "./TodoItem.module.css";
const { id } = this.props.todo;
class TodoItem extends React.Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone=event => {
    if (event.key === "Enter") {
        this.setState({
            editing: false
        })
    }
  }
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      // <div>Hello Todoitems</div>
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            value={this.props.todo.title}
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          <button
            onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
          >
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {this.props.todo.tittle}
          </span>
        </div>
        <input style={editMode} type="text"
        className={styles.textInput}
        onChange={e=>{
            this.props.setUpdate(e.target.value, id)
        }}
        onKeyDown={this.handleUpdatedDone} />
      </li>
    );
  }
}

export default TodoItem;
