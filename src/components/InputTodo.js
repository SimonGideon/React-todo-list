/* eslint-disable */ 
import React from "react";
class InputTodo extends React.Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}className="form-container">
        <input className="input-text"
          type="text"
          placeholder="Add Todo...."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
