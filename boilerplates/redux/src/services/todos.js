import fetch from 'isomorphic-fetch';

export async function getAll() {
  return fetch(`/api/todos`).then(res => res.json());
}
