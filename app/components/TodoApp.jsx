import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodos from 'AddTodos';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';

class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state ={
      showCompleted: false,
      searchText: "",
      todos: TodoAPI.getTodos()
    };
  }
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  handleAddTodo = (text)=>{
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed: false
        }
      ]
    });
  }
  handleToggle = (id) => {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updatedTodos})
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodos onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

}

export default TodoApp;
