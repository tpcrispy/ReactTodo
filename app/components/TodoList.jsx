var React = require('react');
var Todo = require('Todo');
var {connect} = require('react-redux');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to Do!</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
