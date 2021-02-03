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
        <h3>В городе {placeName}:</h3>
        <p>{weather.description}</p>
        <img src={iconUrl} alt={weather.description}/>
        <p>Температура:<br/>
          <span style={(weatherData.main.temp>0)? {color:'red'} : {color:'blue'}}>
            {weatherData.main.temp}°C
          </span>
        </p>
        <p>Скорость ветра:<br/>
          <span>{weatherData.wind.speed} м/с</span>
        </p>
      </div>
    )
  }
}


export default Content