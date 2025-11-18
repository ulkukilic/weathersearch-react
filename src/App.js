import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import WeatherSearch from './components/weather/WeatherSearch';
import Weather from './components/weather/Weather';

import { useState } from 'react';

function App() {
  const [searchQuery,setSearchQuery]=useState('Istanbul'); // arama icin 
  const [weatherData,setWeatherData]=useState('');// API den gelenler icin

  return (
    <div className="App">
      <Header/>
      <WeatherSearch searchQuery={searchQuery} setWeatherData={setWeatherData} />
      <Weather weatherData={weatherData} />
     <Footer/>
    </div>
  );
}

export default App;
