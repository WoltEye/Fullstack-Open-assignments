import React from 'react'

const NewPersonForm = ({handleSubmit,
                        handleNameChange,
                        newName,
                        ḥandlePNumberChange,
                        newPhoneNumber,
                        persons}) => (
  <form onSubmit={handleSubmit}>
    <h2>Add a new</h2>
    <div>
      <label htmlFor='name'>Name:</label> 
      <input
      type='text'
      onChange={handleNameChange} 
      id='name'
      name='name'
      value={newName}/>
    </div>
    <div>
      <label htmlFor='phone'>Number:</label>
      <input
      type='tel'
      onChange={ḥandlePNumberChange}
      id='phone'
      name='phone'
      value={newPhoneNumber}/>
    </div>
    <button type='submit' disabled={!persons}>add</button>
  </form>
)
export default NewPersonForm
