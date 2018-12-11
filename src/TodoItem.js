import React, { Component } from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDeleteTodo(this.props.id)
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        <li>{this.props.text.toString()}</li>
      </div>
    )
  };
}

  export default TodoItem