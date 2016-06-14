import React, {Component} from 'react';

var AddTodos = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="ener todo here" />
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodos;
