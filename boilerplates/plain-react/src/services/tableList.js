// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
import xFetch from './xFetch';
import qs from 'qs';

export async function getData(params) {
  // You can replace xFetch to other ajax library
  return xFetch(`/api/tablelist?${qs.stringify(params)}`);
}

export async function addItem(params) {
  return xFetch('/api/tablelist_addItem', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function deleteItem(params) {
  return xFetch('/api/tablelist_deleteItem', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function editItem(params) {
  return xFetch('/api/tablelist_editItem', {
    method: 'post',
    body: qs.stringify(params),
  });
}
