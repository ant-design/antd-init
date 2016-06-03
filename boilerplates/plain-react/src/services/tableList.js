// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
import xFetch from './xFetch';
import qs from 'qs';

export async function getData(params) {
  // You can replace xFetch to other ajax libraries
  return xFetch(`/api/tablelist?${qs.stringify(params)}`);
}

export async function addItem(params) {
  return xFetch('/api/tablelist', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function deleteItem(params) {
  return xFetch('/api/tablelist', {
    method: 'delete',
    body: qs.stringify(params),
  });
}

export async function editItem(params) {
  return xFetch('/api/tablelist', {
    method: 'put',
    body: qs.stringify(params),
  });
}
