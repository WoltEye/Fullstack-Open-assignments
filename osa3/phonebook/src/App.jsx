import { useEffect, useState } from 'react'
import NewPersonForm from './Components/NewPersonForm'
import Notification from './Components/Notification'
import Search from './Components/Search'
import PhoneBook from './Components/Phonebook'
import phonebookService from './services/phonebookService'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState(null) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() => {
    phonebookService.getPersons()
    .then(response => { 
    setPersons(response)
    })
    .catch(() => {
      setNotificationType('error') 
      setNotification('Could not fetch the phonebook from the server')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    })
  }, [])

  const filteredPhonebook = persons?.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())) 

  const handleSubmit = e => {
    e.preventDefault()
    const duplicate = persons.find(person => person.name === newName)
    if(duplicate) {
      const updatedPerson = { ...duplicate, number: newPhoneNumber }
      updatePerson(duplicate.id, newName, updatedPerson) 
      setNotificationType('notification')
      setNotification(`Updated ${newName}`)
      setNewName('')
      setNewPhoneNumber('')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
    else if(!newPhoneNumber || !newName) {
      alert('Missing a name or a phone number.')
    }
    else {
      const newPerson = { name: newName, number: newPhoneNumber }
      phonebookService.newPerson(newPerson)
      .then(response => {
        setPersons([...persons, response])
        setNotificationType('notification')
        setNotification(`${newName} added.`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      }).catch(() => {
        setNotificationType('error') 
        setNotification('Could not add a person to the phonebook')
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      setNewPhoneNumber('')
      setNewName('')
    }
 }

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleNameChange = e => {
    setNewName(e.target.value)  
  }

  const ḥandlePNumberChange = e => { 
    setNewPhoneNumber(e.target.value)
  }

  const updatePerson = (id, name, updatedPerson) => {
    if(window.confirm(`${name} is already added to the phone book, replace the old number with a new one?`)) {
      phonebookService.updatePerson(id, updatedPerson)
      .then(response => {
      setPersons(persons.map(person => person.id === id ? response : person))
      })
      .catch(() => {
        setNotificationType('error')
        setNotification('Could not update the person')
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }
  }

  const removePerson = (id, name) => {
    if(window.confirm(`Are you sure you want to remove ${name}`)) {
      phonebookService.deletePerson(id)
      .then(response => {
        console.info(response)
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(() => {
        setNotificationType('error')
        setNotification(`Information of ${name} has already been removed from server`)
        setTimeout(() => {
          setNotification(null)
        } ,5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
      notification={notification}
      notificationType={notificationType}/>
      <Search
      handleSearchTermChange={handleSearchTermChange}
      searchTerm={searchTerm}/>
      <NewPersonForm 
      newName={newName}
      newPhoneNumber={newPhoneNumber}
      handleSubmit={handleSubmit}
      handleNameChange={handleNameChange}
      ḥandlePNumberChange={ḥandlePNumberChange}
      persons={persons}/>
      <h2>Numbers</h2>
      <PhoneBook 
      filteredPhonebook={filteredPhonebook}
      persons={persons}
      searchTerm={searchTerm}
      removePerson={removePerson}/>
    </div>
  )
}

export default App
