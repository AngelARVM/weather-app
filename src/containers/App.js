import React, {Fragment, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import '../css/App.css';
import Nav from '../components/Nav'
import Cards from '../components/Cards'
import City from '../components/City'
import About from '../components/About'


function App() {
  const [cities, setCities] = useState([])
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

  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    console.log('onFilter:', city)
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }

  return (
    <Fragment>
      <div className="App">
        <Nav onSearch={onSearch}/>
        
        <Switch>
          <Route exact path="/">
            <Cards cities={cities} onClose={onClose}/>
          </Route>
          <Route exact path='/city/:id' render={({match}) => <City city={onFilter(match.params.id)}/>}/>
          <Route>
            <About exact path="/about" />
          </Route>
          
        </Switch>

      </div>
    </Fragment>
  );
}

export default App;
