import React, { Component } from 'react';
import './css/App.css';
import TodoTable from './TodoTable.js';
import AddTodoField from './AddTodoField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTodoText: '',
      todos: [{text: "Create todos", key: Date.now()}]
    };

    this.handleAddTodoFieldChange = this.handleAddTodoFieldChange.bind(this);
    this.handleTodosChange = this.handleTodosChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleAddTodoFieldChange(text) {
    this.setState({addTodoText: text}); 
  }

  handleTodosChange(todo){
    this.setState({todos: [...this.state.todos, {text: todo, key: Date.now()}]});
    this.setState({addTodoText: ''});
  
  }

  deleteTodo(key) {
    const filteredItems = this.state.todos.filter(todo => {
      console.log(todo.key)
      return todo.key !== key
    })

    this.setState({todos: filteredItems})
    console.log(filteredItems)
  }

  render() {
    return (
      <div>
        <TodoTable todoitems={this.state.todos} deleteTodo={this.deleteTodo} /> 
        <AddTodoField 
          addTodoText={this.state.addTodoText} 
          handleTodosChange={this.handleTodosChange}
          handleAddTodoFieldChange={this.handleAddTodoFieldChange} 
        />
      </div>
    );
  }
}

export default App;
