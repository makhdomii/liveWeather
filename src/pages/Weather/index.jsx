import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { WeatherIcon } from '../../common/weatherIcon';
import { Api } from '../../common/api';
import centigrade from '../../Assets/img/centigrade.svg';
import max from '../../Assets/img/max.svg';
import min from '../../Assets/img/min.svg';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      todayDate: {},
      weather: [],
      toDayTemp: 0
    };
  }
  componentWillMount() {
    Api('GET', `?command=location&woeid=${this.props.match.params.weoid}`)
      .then(res => {
        this.setState({
          data: res.data,
          weather: res.data.consolidated_weather,
          loading: false,
          todayDate: this.todayOfWeekConverter(
            res.data.consolidated_weather[0].applicable_date
          )
        });
      })
      .catch(err => console.log(err));
  }
  todayOfWeekConverter = time => {
    let toTimeStamp = Date.parse(time);
    let generateDate = new Date(toTimeStamp);
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    return {
      todayFromWeek: generateDate.toLocaleString(window.navigator.language, {
        weekday: 'long'
      }),
      todayFromDate: generateDate.toLocaleString(
        window.navigator.language,
        option
      )
    };
  };
  render() {
    const borderColor = ['Maroon', 'Teal', 'Olive', 'Orange', 'Navy'];
    if (this.state.loading) {
      return <div className="loading" />;
    } else {
      return (
        <div className="weather">
          <Container>
            <Row className="justify-content-center">
              <div className="text-center">
                <p className="h1">
                  {this.state.data.title} / {this.state.data.parent.title}
                </p>
                <p className="h3">
                  {this.state.todayDate.todayFromWeek} -{' '}
                  {this.state.todayDate.todayFromDate}
                </p>
              </div>
            </Row>
            <Row className="align-items-center justify-content-center mt-3 mb-3">
              <Col md={5}>
                <p className="h1 text-right">
                  {Math.round(this.state.weather[0].the_temp)}{' '}
                  <img className="temp-icon" src={centigrade} alt="" />
                </p>
              </Col>
              <Col md={1}>
                {WeatherIcon(this.state.weather[0].weather_state_abbr)}
              </Col>
              <Col md={5}>
                <div>
                  <span className="h4">
                    <img className="temp-icon" src={max} alt="" />
                    {Math.round(this.state.weather[0].max_temp)}
                  </span>
                  <span className="h4">
                    <img className="temp-icon" src={min} alt="" />
                    {Math.round(this.state.weather[0].min_temp)}
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={2}>
                <div
                  className="text-white text-center weather--box"
                  style={{
                    borderTop: `3px solid ${
                      borderColor[
                        Math.floor(Math.random() * borderColor.length)
                      ]
                    }`
                  }}
                >
                  {WeatherIcon(this.state.weather[1].weather_state_abbr, 40)}
                  <p className="h2">
                    {Math.round(this.state.weather[1].the_temp)}{' '}
                    <img className="temp-icon" src={centigrade} alt="" />
                  </p>
                  {/* <p className="h4">{item}</p> */}
                  <div>
                    <span className="h4">
                      <img className="temp-icon" src={max} alt="" />
                      {Math.round(this.state.weather[1].max_temp)}
                    </span>
                    <span className="h4">
                      <img className="temp-icon" src={min} alt="" />
                      {Math.round(this.state.weather[1].min_temp)}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div
                  className="text-white text-center weather--box"
                  style={{
                    borderTop: `3px solid ${
                      borderColor[
                        Math.floor(Math.random() * borderColor.length)
                      ]
                    }`
                  }}
                >
                  {WeatherIcon(this.state.weather[2].weather_state_abbr, 40)}
                  <p className="h2">
                    {Math.round(this.state.weather[2].the_temp)}{' '}
                    <img className="temp-icon" src={centigrade} alt="" />
                  </p>
                  {/* <p className="h4">{item}</p> */}
                  <div>
                    <span className="h4">
                      <img className="temp-icon" src={max} alt="" />
                      {Math.round(this.state.weather[2].max_temp)}
                    </span>
                    <span className="h4">
                      <img className="temp-icon" src={min} alt="" />
                      {Math.round(this.state.weather[2].min_temp)}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div
                  className="text-white text-center weather--box"
                  style={{
                    borderTop: `3px solid ${
                      borderColor[
                        Math.floor(Math.random() * borderColor.length)
                      ]
                    }`
                  }}
                >
                  {WeatherIcon(this.state.weather[3].weather_state_abbr, 40)}
                  <p className="h2">
                    {Math.round(this.state.weather[3].the_temp)}{' '}
                    <img className="temp-icon" src={centigrade} alt="" />
                  </p>
                  {/* <p className="h4">{item}</p> */}
                  <div>
                    <span className="h4">
                      <img className="temp-icon" src={max} alt="" />
                      {Math.round(this.state.weather[3].max_temp)}
                    </span>
                    <span className="h4">
                      <img className="temp-icon" src={min} alt="" />
                      {Math.round(this.state.weather[3].min_temp)}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div
                  className="text-white text-center weather--box"
                  style={{
                    borderTop: `3px solid ${
                      borderColor[
                        Math.floor(Math.random() * borderColor.length)
                      ]
                    }`
                  }}
                >
                  {WeatherIcon(this.state.weather[4].weather_state_abbr, 40)}
                  <p className="h2">
                    {Math.round(this.state.weather[4].the_temp)}{' '}
                    <img className="temp-icon" src={centigrade} alt="" />
                  </p>
                  {/* <p className="h4">{item}</p> */}
                  <div>
                    <span className="h4">
                      <img className="temp-icon" src={max} alt="" />
                      {Math.round(this.state.weather[4].max_temp)}
                    </span>
                    <span className="h4">
                      <img className="temp-icon" src={min} alt="" />
                      {Math.round(this.state.weather[4].min_temp)}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div
                  className="text-white text-center weather--box"
                  style={{
                    borderTop: `3px solid ${
                      borderColor[
                        Math.floor(Math.random() * borderColor.length)
                      ]
                    }`
                  }}
                >
                  {WeatherIcon(this.state.weather[5].weather_state_abbr, 40)}
                  <p className="h2">
                    {Math.round(this.state.weather[5].the_temp)}{' '}
                    <img className="temp-icon" src={centigrade} alt="" />
                  </p>
                  {/* <p className="h4">{item}</p> */}
                  <div>
                    <span className="h4">
                      <img className="temp-icon" src={max} alt="" />
                      {Math.round(this.state.weather[5].max_temp)}
                    </span>
                    <span className="h4">
                      <img className="temp-icon" src={min} alt="" />
                      {Math.round(this.state.weather[5].min_temp)}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
