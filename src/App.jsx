import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
WeatherCard 

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }

  useEffect(() => {
    if (coords) {

      const API_key = '6253cd5a26bbeb85390670de0c9e7164'
      const { lat, lon } = coords

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`

      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [coords])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log(weather)

  return (

      <WeatherCard weather={weather} />

  )
}

export default App