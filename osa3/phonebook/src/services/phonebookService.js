import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

function getPersons() {
  const url = `${BASE_URL}/persons`
  return axios.get(url).then(response => response.data)
}

function newPerson(person) {
  const url = `${BASE_URL}/persons`
  return axios.post(url, person)
  .then(response => response.data)
}

function deletePerson(id) {
  const url = `${BASE_URL}/persons/${id}` 
  return axios.delete(url)
  .then(response => {
    return response
  })
}

function updatePerson(id, updatedPerson) {
  const url = `${BASE_URL}/persons/${id}` 
  return axios.put(url, updatedPerson) 
  .then(response => {
    return response.data
  })
}

export default {
  getPersons,
  newPerson,
  deletePerson,
  updatePerson
}
