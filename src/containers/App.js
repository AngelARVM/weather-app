import React, {Fragment, useState} from 'react'
import '../css/App.css';

import Cards from '../components/Cards'

function App() {
  const newCity = {
    min: "10",
    max: "20",
    img: "01d",
    id: 800,
    wind: "1.5",
    temp: "16",
    name: "Oslo",
    weather: "clear",
    clouds: "1",
    latitud: "37.39",
    longitud: "-122.08"
  }

  const [cities, setCities] = useState([newCity])

  

  const apiKey = "c56858acc8d7a3be4849d5896038f853"

  function onSearch(city) {
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then((data) => {
      if (data.main !== undefined){
        const newCity = {
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          img: data.weather[0].icon,
          id: data.id,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          weather: data.weather[0].main,
          clouds: data.clouds.all,
          latitud: data.coord.lat,
          longitud: data.coord.lon
        }

        if ( cities.some(e => e.name === newCity.name)){
          alert('City is already on the panel')
        } else {
          setCities(oldCities => [...oldCities, newCity])
        }
      } else {
        alert("City not found")
      }
    })
  }
  
  function onClose (id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id))
  }

  
  

  return (
    <Fragment>
      <div className="App">
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </Fragment>
  );
}

export default App;
