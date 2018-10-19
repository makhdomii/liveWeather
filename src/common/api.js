import axios from 'axios'

export const Api = (type, target) => {
  axios.defaults.baseURL = 'http://localhost'
  const baseUrl = 'weather.php'
  axios.defaults.timeout = 360000
  axios.interceptors.request.use(request => {
    // console.log('Starting Request', request)
    return request
  })

  axios.interceptors.response.use(response => {
    // console.log('Response:', response)
    return response
  })

  if (type === 'GET') {
    return axios.get(baseUrl + target)
  }

  if (type === 'POST') {
    return axios.post(baseUrl + target)
  }
}
