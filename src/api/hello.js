import fetch from 'utils/fetch';

function getHello() {
  return fetch.get('/api/Web/getHomeData');
}

function getHello2() {
  return fetch.get('/api/Web/getDictionary?typeCode=NewsCategory');
}

export default { getHello, getHello2 };
