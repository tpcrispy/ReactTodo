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
          text: 'WALK the dog!'
        }, {
          id: uuid(),
          text: 'Clean the yard!'
        }, {
          id: uuid(),
          text: 'display this on the screeen!'
        }, {
          id: uuid(),
          text: '<<This should now have id'
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
          text:text
        }
      ]
    });
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
        <TodoList todos={todos} />
        <AddTodos onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

}

export default TodoApp;
