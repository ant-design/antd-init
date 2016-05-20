import expect from 'expect';
import todos from '../todos';

describe('todos', () => {

  it('todos/get', () => {
    expect(todos({}, { type: 'todos/get' })).toEqual({ loading: true });
  });

  it('todos/get/success', () => {
    const newState = todos({ list: 1, loading: true }, { type: 'todos/get/success', payload:2 });
    expect(newState).toEqual({
      loading: false,
      list: 2,
    });
  });

});
