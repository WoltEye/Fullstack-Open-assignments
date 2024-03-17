import { useState, useEffect } from 'react'
import weatherService from '../services/weatherService'

const Country = ({data, type}) => {
  const [ displayType, setDisplayType ] = useState(type)
  const [ weatherData, setWeatherData ] = useState([])
  const [ loadingWeather, setLoadingWeather ] = useState(false)

  const handleClick = () => {
    switch(displayType) {
      case 'expanded':
        setDisplayType('basic')
        break;
      case 'basic':
        setDisplayType('expanded')
        break;
      default:
        alert('Unexpected error in Country component handleClick function')
    }
  }
  
  const getCurrentWeather = capital => {
    setLoadingWeather(true)
    weatherService.getCurrentWeather(capital)    
    .then(response => {
      setLoadingWeather(false)
      setWeatherData(response)
    })
    .catch(e => {
      alert(e)
      setLoadingWeather(false)
    })
  }

  useEffect(() => {
    if(displayType === 'expanded') {
      getCurrentWeather(data.name.common)
    }
  }, [displayType])
  
  if(displayType === 'expanded') {
    return (
      <div className='country expanded'>
        <h1>{data.name.common}</h1>
        <h2>{data.name.official}</h2> 
        <ul>
          <li>Capital {data.capital}</li>
          <li>Area {data.area}</li>
        </ul>
        <ul>
          <h3>Languages</h3>
          { Object.values(data.languages).map(language => <li key={language}>{language}</li>)  }
        </ul>
        <img 
        src={data.flags.png}
        alt={data.flags.alt}/>
        <h3>Weather</h3>
        { loadingWeather ?
          <p>Loading...</p> :
        <ul>
          <li>
            Current temeperature:
            {weatherData.current?.temp_c}°C
          </li>
          <li>
            Feels like:
            {weatherData.current?.feelslike_c}°C
          </li>
          <li>
            Wind:
            {weatherData.current?.wind_kph}kph
          </li>
        </ul>
        }
        <button onClick={handleClick}>Less</button>
      </div>
      )
    } 
    else {
      return (
        <div className='country basic'>
          <p>{data.name.common}</p>
          <button onClick={handleClick}>More</button>
        </div>
      )
    }
}

export default Country
