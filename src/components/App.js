import React from 'react';
import WeatherCard from '../components/WeatherCard';

const title = {
  marginTop: "50px",
  textAlign: "center",
  fontSize: "50px"
}

const App = () => {
  return (
    <div>
      <h1 style={title}>THE BEST WEATHER APP!</h1>
      <WeatherCard />
    </div>
  )
}

export default App;