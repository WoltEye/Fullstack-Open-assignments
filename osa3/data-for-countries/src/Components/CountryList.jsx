import React from 'react'
import Country from './Country'

const CountryList = ({searchResults}) => ( 
  <>
      { searchResults.length > 10 ?
        <p>Too many matches, specify another filter</p> :
        searchResults.length === 1 ?
        <Country 
        data={searchResults[0]}
        type="expanded" /> :
        searchResults.map(country => 
        <Country 
        key={country.name.official}
        data={country}
        type="basic"/>)
      }   
  </>
)

export default CountryList
