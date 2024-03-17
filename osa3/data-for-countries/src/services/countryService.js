import axios from 'axios'

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api'

function getAllCountries() {
  const url = `${BASE_URL}/all`
  return axios.get(url)
  .then(response => {
    return response.data
  })
}

function search(searchTerm) {
  const url = `${BASE_URL}/name/${searchTerm}`
  return axios.get(url)
  .then(response => {
    return response.data
  })
}

export default {
  search,
  getAllCountries
}
