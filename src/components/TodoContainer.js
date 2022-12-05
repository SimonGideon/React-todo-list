import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: "Setup developmement environment",
        completed: true,
      },
      {
        id: 2,
        tittle: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
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
            ...this.state.todos.filter(todo => {
                return todo.id !== id;
            })
        ]
    })
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
