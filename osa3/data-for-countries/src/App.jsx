import { useState, useEffect } from 'react'
import countryService from './services/countryService'
import CountryList from './Components/CountryList'
import './index.css'
import SearchField from './Components/SearchField'

function App() {
  const [countryList, setCountryList] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    countryService.getAllCountries()
    .then(response => {
      setCountryList(response)
    })
  }, [])


  return (
    <>
      <SearchField 
      setSearchResults={setSearchResults}
      countryList={countryList}/>
      <CountryList
      searchResults={searchResults}/>
    </>
  )
}

export default App
