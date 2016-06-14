import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodos from 'AddTodos';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state ={
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: uuid(),
          text: 'WALK the dog!',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard!',
          completed: true
        }, {
          id: uuid(),
          text: 'display this on the screeen!',
          completed: false
        }, {
          id: uuid(),
          text: '<<This should now have id',
          completed: true
        }
      ]
    };
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
