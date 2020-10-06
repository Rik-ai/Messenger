import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-dot-messanger-291613.ew.r.appspot.com'
  })


export default instance