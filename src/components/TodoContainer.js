/* eslint-disable */ 
import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        tittle: "Setup developmement environment",
        completed: true,
      },
      {
        id: uuidv4(),
        tittle: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        tittle: "Deploy live server",
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        // eslint-disable-next-line array-callback-return
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  addTodoItem = (tittle) => {
    const newTodo = {
      id: uuidv4(),
      tittle: tittle,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.tittle = updatedTitle;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <div children="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
