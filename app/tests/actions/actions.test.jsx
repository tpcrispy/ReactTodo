var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing todo'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });
  it('should generate toggleShowCompleted', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });
  it('should generate search toggle todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
