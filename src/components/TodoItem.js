import React from "react";
class TodoItem extends React.Component {
  render() {
    return (
      // <div>Hello Todoitems</div>
      <li>
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
        <button onClick={()=> this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        {this.props.todo.tittle}
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
