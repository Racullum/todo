import React, { Component } from 'react';
import './css/TodoTable.css'
import TodoItem from './TodoItem';

class TodoTable extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleDeleteTodo(key) {
    this.props.deleteTodo(key);
  }

  render() {
      const items = this.props.todoitems
      console.log(items);
      const listItems = items.map((item, index) =>
          <TodoItem key={item.key} text={item.text} onDeleteTodo={this.handleDeleteTodo} id={item.key}/>
      );
    return <div className="TodoTable-container-with-shadow"><ul className="TodoTable-container-ul">{listItems}</ul></div>;
  };
}

export default TodoTable