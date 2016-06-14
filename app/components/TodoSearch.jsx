import React, {Component} from 'react';


var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.showCompleted.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});
export default TodoSearch;
