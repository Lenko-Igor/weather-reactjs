import React, {useState, useEffect} from 'react'
import './Content.css'
import Loader from './Loader.js'

function Content({city, cityID}){
  const [placeName, setPlaceName] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(()=> {
    const apiURL = 'https://api.openweathermap.org/data/2.5/';
    const cityId = cityID;
    const apiKey = '012244e216d87e61ae79056438d73ff3';
    const apiQuery = apiURL + 'weather?id=' + cityId + '&units=metric&lang=ru&appid=' + apiKey;
  
    fetch(apiQuery)
      .then(response => response.json())
      .then(data => { 
        setPlaceName(city)
        setWeatherData(data)
      })
    .catch(error => console.log('Ошибка при передаче данных. Причина:' + error))
  }, [city, cityID])

  if(!weatherData){
    return (
      <div className='content'>
        <Loader/>
      </div>
    )
  } else {
    const weather = weatherData.weather[0]
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png"

    return(
      <div className='content'>
        <h3>В городе {placeName} сейчас {weather.description}</h3>
        <img src={iconUrl} alt={weather.description}/>
        <p>Температура: <strong>{weatherData.main.temp}°C</strong></p>
        <p>Скорость ветра: <strong>{weatherData.wind.speed} м/с</strong></p>
      </div>
    )
  }
}


export default Content