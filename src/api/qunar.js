import axios from 'axios'

axios.defaults.baseURL = '/qunar'

export function getIndex() {
  return axios.get('/api/index.json')
}

export function getCity() {
  return axios.get('/api/city.json')
}

export function getDetail(id) {
  return axios.get('/api/detail.json', {
    params: {
      id
    }
  })
}