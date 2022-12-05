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
    this.setState({
        // eslint-disable-next-line array-callback-return
        todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })

    })
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    );
  }
}

export default TodoContainer;
