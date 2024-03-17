import { useState } from 'react'
import { customSort } from '../utils/helperFunctions'

const SearchField = ({setSearchResults, countryList}) => { 
  const [searchTerm, setSearchTerm] = useState('')
  const [settings, setSettings] = useState({includeOfficialNames: false})

  const handleSearch = (e) => {
    const includeOfficialNames = settings.includeOfficialNames
    const lowerCaseValue = e.target.value.toLowerCase()
    setSearchTerm(e.target.value)
      const unsortedSearchResults = countryList.filter(country => { 
        const lowerCaseCountry = country.name.common.toLowerCase()
        const lowerCaseOfficial = country.name.official.toLowerCase()
        return lowerCaseCountry.includes(lowerCaseValue) ||
        lowerCaseOfficial.includes(lowerCaseValue) && includeOfficialNames 
      })  
      //Just playing around with sorting 
      const sortedSearchResults = customSort(unsortedSearchResults, lowerCaseValue)
      setSearchResults(sortedSearchResults)
  }

  const handleSetting = () => {
    setSettings({includeOfficialNames: !settings.includeOfficialNames})
  }
  
  return (
    <div className='search-field-container'>
      <label htmlFor="search-field">Find countries</label> 
      <input 
      type="text"
      id="search-field"
      name="search-field"
      value={searchTerm}
      onChange={handleSearch} />
      <div className='settings-container'>
        <label htmlFor="setting">
          Include official names:
        </label>
        <input 
        type="checkbox"
        value={settings.includeOfficialNames}
        onChange={handleSetting} 
        id="setting"
        name="setting"/>
      </div>
    </div>
  )
}

export default SearchField
