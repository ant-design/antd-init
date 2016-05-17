const expect = require('expect');
const todos = require('../todos').default;

describe('todos', function() {
  it('todos/get', function() {
    expect(todos({}, { type: 'todos/get' })).toEqual({ loading: true });
  });
  it('todos/get/success', function() {
    expect(todos({
      list: 1,
      loading: true,
    }, { type: 'todos/get/success', payload:2 })).toEqual({
      loading: false,
      list: 2,
    });
  });
});
