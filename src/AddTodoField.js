import React from 'react';
import './css/AddTodoField.css';

class AddTodoField extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleAddTodoFieldChange(event.target.value)
  }

  handleSubmit(event) {
    this.props.handleTodosChange(this.props.addTodoText)
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Todo..." value={this.props.addTodoText} onChange={this.handleChange} className="AddTodoField-input-text"/>
        <input type="submit" value="+" className="AddTodoField-input-submit-button"/>
      </form>
    );
  }
}

  export default AddTodoField