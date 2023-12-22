
const WeatherCard = ({ weather }) => {
  return (
    <article>
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <section>
            <header>
               <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </header>
            <article>
                <h3>"{weather?.weather[0].description}"</h3>
                <ul>
                    <li><span>Win Speed</span><span> {weather?.wind.speed} m/s</span></li>
                    <li><span>Clouds</span><span> {weather?.clouds.all} %</span></li>
                    <li><span>Pressure</span><span> {weather?.main.pressure} hPa</span></li>
                </ul>
            </article>

        </section>
        <footer>
            <h2>Temperture</h2>
            <li><span>Temperature</span><span> {weather?.main.temp} kelvin</span></li>
            <button>Change Temperture</button>
        </footer>

    </article>
  )
}

export default WeatherCard