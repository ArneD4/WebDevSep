import './index.css';
import React, { Component } from 'react'
import fetch from 'node-fetch'
import { Button, Input, Label, Container, Row, Col, Media } from 'reactstrap'



export default class App extends Component {
  state = { "coord": { "lon": -0.1257, "lat": 51.5085 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 277.4, "feels_like": 273.25, "temp_min": 277.04, "temp_max": 277.59, "pressure": 998, "humidity": 87 }, "visibility": 7000, "wind": { "speed": 3.6, "deg": 300 }, "clouds": { "all": 90 }, "dt": 1612183991, "sys": { "type": 1, "id": 1414, "country": "GB", "sunrise": 1612165123, "sunset": 1612198163 }, "timezone": 0, "id": 2643743, "name": "London", "cod": 200 }

  getWeather = (cityname) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=886705b4c1182eb1c69f28eb8c520e20`)
        .then(data => data.json())
        .then(res => this.setState(res));

    })


  }

  render() {


    console.log(this.state)
    let imgSource = `http://openweathermap.org/img/wn/${this.state.weather[0].icon}@2x.png`;
    console.log(imgSource)
    return (

      <div>
        <Container>
          <Row>
            <Col id="search">
              <div className="search">
                <Label for="cityname">City Name: </Label>
                <Input type="text" id="cityname"></Input>
                <Button onClick={() => this.getWeather(document.getElementById('cityname').value)}>Get Current Weather</Button>
              </div>
            </Col>
          </Row>
          <Row>
          <h1>Current Weather Situation in {this.state.name}</h1>
            <Col>
            <div className="data">
              <h3>Temprature: {this.state.main.temp} F </h3>
              <h3>Weather Condition: {this.state.weather[0].main} </h3>
              <h3>Wind Speed: {this.state.wind.speed} MPH</h3>
              <img id="img" src={imgSource}></img>
              </div>              
            </Col>              
          </Row>
        </Container>
      </div>
    )
  }
}
