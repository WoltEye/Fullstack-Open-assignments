import React from 'react'

const PhoneBook = ({persons, filteredPhonebook, searchTerm, removePerson}) => { 
  const noSearchTerm = !searchTerm && persons
  const phoneBookEmpty = !persons
  const noSearchResults = filteredPhonebook?.length === 0
  return (
  <>
  {
    noSearchTerm ?
    persons?.map(person => 
    <div key={person.name} className={person.name}>
      <p>{person.name} {person.number}</p>
      <button onClick={() => { removePerson(person.id, person.name) }}>Remove</button>
    </div>
    ) :
    phoneBookEmpty ?
    <p>Loading...</p> :
    noSearchResults ?
    <p>No search results</p> :
    filteredPhonebook?.map(person => <p key={person.name}>{person.name} {person.number}</p>)
  } 
  </>
  )
}

export default PhoneBook
