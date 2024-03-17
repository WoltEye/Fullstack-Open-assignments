//Uses https://www.weatherapi.com/
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = 'http://api.weatherapi.com/v1'

function getCurrentWeather(capital) {
  const queryStrings = `?key=${API_KEY}&q=${capital}`
  const url = `${BASE_URL}/current.json${queryStrings}`
  return axios.get(url)
    .then(response => {
      return response.data
    })
}

export default {
  getCurrentWeather
}
