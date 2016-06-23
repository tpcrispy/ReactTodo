var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer('', df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompleteReducer', () =>{
    it('should toggle showCompleted', () =>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      } ;
      var res = reducers.showCompleteReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
});
