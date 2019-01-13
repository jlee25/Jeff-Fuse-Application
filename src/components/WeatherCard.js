import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchWeather } from "../action";


class WeatherCard extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }
  
  renderWeather() {
    if (this.props.weather.data === undefined) {
      return (
        <div style={container}>
          <div style={load}>
            Loading...
          </div>
        </div>
      )
    } else {
      const { name, main, weather } = this.props.weather.data
      return (
        <div style={container}>
          <div className="mdc-card" style={myCard}>
            <div className="mdc-card__media mdc-card__media--square" style={flex}>
              <div className="mdc-card__media-content">
                <div className="mdc-card__media" style={cardTitle}>
                  {name}
                </div>
                <div className="mdc-card__media" style={cardTemp}>
                  {(main.temp - 273.15).toFixed(0)} &#8451;
                </div>
                <div className="mdc-card__media" style={cardDesc}>
                  {weather[0].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };
  
  render() {
    return (
      <div>
        <div>
          {this.renderWeather()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  }
}

// Styles (Was about to reach the time limit you mentioned! So I rushed this part a little bit.)

const container = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginLeft: "-150px",
  marginTop: "-100px"
}

const load = {
  textAlign: "center",
  fontSize: "50px"
}

const myCard = {
  height: "250px",
  width: "250px",
  textAlign: "center",
  padding: "20px"
};

const flex = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}

const cardDesc = {
  fontSize: "30px",
  marginTop: "45px"
}

const cardTemp = {
  fontSize: "30px",
  marginTop: "45px"
}

const cardTitle = {
  fontSize: "30px"
}

export default connect(mapStateToProps, { fetchWeather })(WeatherCard);
