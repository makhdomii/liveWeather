import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
// import { Rainy } from '../../common/weatherIcon'
import { WeatherIcon } from '../../common/weatherIcon';
import centigrade from '../../Assets/img/centigrade.svg';
import max from '../../Assets/img/max.svg';
import min from '../../Assets/img/min.svg';
import { Link } from 'react-router-dom';
import { Api } from '../../common/api';

const borderColor = ['Maroon', 'Teal', 'Olive', 'Orange', 'Navy'];
const weatherLocation = weather =>
  Object.keys(weather).map((item, index) => {
    let borderStyle = {
      borderTop: `3px solid ${
        borderColor[Math.floor(Math.random() * borderColor.length)]
      }`
    };
    let todayWeather = weather[item].consolidated_weather[0];
    return (
      <Col key={index} md={2}>
        <Link
          className="none-decoration"
          to={`/weather/${weather[item].woeid}`}
        >
          <div className="text-white text-center home--box" style={borderStyle}>
            {WeatherIcon(todayWeather.weather_state_abbr, 40)}
            <p className="h2">
              {Math.round(todayWeather.the_temp)}{' '}
              <img className="temp-icon" src={centigrade} alt="" />
            </p>
            <p className="h4">{item}</p>
            <div>
              <span className="h4">
                <img className="temp-icon" src={max} alt="" />
                {Math.round(todayWeather.max_temp)}
              </span>
              <span className="h4">
                <img className="temp-icon" src={min} alt="" />
                {Math.round(todayWeather.min_temp)}
              </span>
            </div>
          </div>
        </Link>
      </Col>
    );
  });
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
    this.dataFromServer = {};
    this.apiProps = this.apiProps.bind(this);
  }
  apiProps = (res, location) => {
    this.dataFromServer[location] = res.data;
    console.log('data from server =>', Object.keys(this.dataFromServer).length);
    if (Object.keys(this.dataFromServer).length > 5)
      this.setState({ loading: false });
  };
  componentWillMount() {
    // London 44418
    // Istanbul 2344116
    // Berlin 638242
    // Helsinki 565346
    // Dublin 560743
    // Vancouver 9807
    Api('GET', '?command=location&woeid=44418')
      .then(res => this.apiProps(res, 'London'))
      .catch(err => console.log(err));
    Api('GET', '?command=location&woeid=2344116')
      .then(res => this.apiProps(res, 'Istanbul'))
      .catch(err => console.log(err));
    Api('GET', '?command=location&woeid=638242')
      .then(res => this.apiProps(res, 'Berlin'))
      .catch(err => console.log(err));
    Api('GET', '?command=location&woeid=565346')
      .then(res => this.apiProps(res, 'Helsinki'))
      .catch(err => console.log(err));
    Api('GET', '?command=location&woeid=560743')
      .then(res => this.apiProps(res, 'Dublin'))
      .catch(err => console.log(err));
    Api('GET', '?command=location&woeid=9807')
      .then(res => this.apiProps(res, 'Vancouver'))
      .catch(err => console.log(err));
  }
  search = () => {
    let inputValue = document.getElementById('searchField').value.split(' ').join('+')
    // console.log(this.props.histy)
    if(inputValue.length > 2){
      this.props.history.push(`/search/${inputValue.toLowerCase()}`);
    }
  }
  render() {
    if (this.state.loading) {
      return <div className="loading" />;
    } else {
      return (
        <div className="home">
          <Container className="home--container">
            <Row className="justify-content-center mt-3 mb-3">
              <Col md={6}>
              <h1 className="text-center mb-2 text-blue">Search your City</h1>
                <InputGroup>
                  <Input type="text" id="searchField" placeholder="For example: Dublin, berlin" />
                  <InputGroupAddon addonType="prepend">
                    <Button color="success" onClick={this.search}>Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            <Row>{weatherLocation(this.dataFromServer)}</Row>
          </Container>
        </div>
      );
    }
  }
}
