// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
import xFetch from './xFetch';
import qs from 'qs';

export async function getData(params) {
  // You can replace xFetch to other ajax library
  return xFetch('/api/tablelist', {
    method: 'post',
    body: qs.stringify(params),
  });
}
