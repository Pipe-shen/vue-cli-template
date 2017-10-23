import fetch from 'utils/fetch'

export default {
  getHello () {
    return fetch.get('/api/Web/getHomeData')
  },
}
