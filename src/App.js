import React, { useState } from 'react';
import './App.css'

const WeatherApp = () => {
  const apiKey = 'aba0a808e6a065a62f51d3144c16e538';
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }
  };

  return (
    <div className="container">
      <input 
        className="input"
        placeholder="Enter city..."
        value={city}
        onChange={event => setCity(event.target.value)}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main ==='undefined'? (
        <div>
          <p>Welocome to weather app!   Enter the city to get the weather of. </p>
        </div>
      ):(
        <div className='weather-data'>
          <h3 className='city'>City: {weatherData.name}</h3>
          <p className='temp'> Temperature: {Math.round(weatherData.main.temp)} °F</p>
          <p className='weather'>Weather: {weatherData.weather[0].description}</p>
          <p className='Humidity'>Humidity: {weatherData.main.humidity} %</p>
          
        </div>
      )}
      {weatherData.cod ==="404"?(
        <p>City Not Found</p>
      ):
      <>
      </>
      }
    
    
    </div>
  );
};

  


export default WeatherApp;
