import axios from 'axios'

// json-server --watch --host 192.168.1.190 db.json


const api = axios.create({
  baseURL: 'http://192.168.1.190:3000',
})

export default api	