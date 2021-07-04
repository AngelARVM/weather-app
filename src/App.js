import React, {Fragment, useState} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import './App.css';
import './css/global.css'
import Nav from './components/Nav'
import City from './components/City'
import Cards from './components/Cards'
import About from './components/About'
const {REACT_APP_API_KEY} = process.env


function App() {
  const [cities, setCities] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const history = useHistory()
  
  const apiKey = REACT_APP_API_KEY
  function onSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
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
          history.push("/")
        }
      } else {
        alert("City not found")
      }
    })
  }
  
  function onClose (id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id))
  }

  function onSwitch (){
    setDarkMode(!darkMode)
  }

  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }

  return (
    <Fragment>
      <div className={darkMode ? "darkMode" : ""}>
      <div className="App">
        <Nav onSearch={onSearch} onSwitch={onSwitch} darkMode={darkMode}/>
            <Switch>
              <Route exact path="/">
                <Cards cities={cities} onClose={onClose}/>
              </Route>
              <Route exact path='/city/:id' render={({match}) => <City city={onFilter(match.params.id)} darkMode={darkMode}/>}/>
              <Route>
                <About exact path="/about" darkMode={darkMode} />
              </Route>
            </Switch>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
