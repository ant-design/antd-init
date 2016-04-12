import fetch from 'isomorphic-fetch';

export async function getAsyncCountResult() {
  return fetch(`/api/async_count`).then(res => res.json());
}
