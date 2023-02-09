import axios from 'axios'
import AppLoading from 'expo-app-loading'

export const api = axios.create({
  baseURL: "http://172.29.1.1:5000"
})

export default api;