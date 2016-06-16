import expect from 'expect';
import users from '../users';

describe('users', () => {

  it('users/showLoading', () => {
    expect(users({}, { type: 'users/showLoading' })).toEqual({ loading: true });
  });

  it('users/query/success', () => {
    const newState = users({ list: 1, loading: true }, { type: 'users/query/success', payload:{ list: 2 } });
    expect(newState).toEqual({
      loading: false,
      list: 2,
    });
  });

});
