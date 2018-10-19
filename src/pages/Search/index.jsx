import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import { Api } from '../../common/api';
import { Link } from 'react-router-dom';
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
			result: [],
			loadApi:false
    };
    this.keywords = '';
  }
  componentWillMount = () => {
    // console.log(this.props);
    this.keywords = this.props.match.params.keyword.split('+').join(' ');
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000);
    Api('GET', `?command=search&keyword=${this.keywords}`)
      .then(res => {
        console.log(res);
        this.setState({ result: res.data,loading:false });
      })
      .catch(error => console.log(error));
  };
  search = () => {
    let inputValue = document.getElementById('searchField').value;
    if (inputValue.length > 2) {
			this.setState({loadApi:true})
			console.log('search clicked !')
			this.props.history.push(`/search/${inputValue.toLowerCase()}`);
			Api('GET', `?command=search&keyword=${inputValue}`)
      .then(res => {
				console.log(res)
				this.setState({ result: res.data,loadApi:false });
      })
      .catch(error => console.log(error));
    }
  };
  result = () => {};
  render() {
    if (this.state.loading) {
      return <div className="loading" />;
    } else {
      return (
        <div className="search">
          <Container>
            <Row className="justify-content-center mt-3 mb-3">
              <Col md={6}>
                <h1 className="text-center mb-2 text-blue">Search your City</h1>
                <InputGroup>
                  <Input
                    type="text"
                    id="searchField"
                    placeholder="For example: Dublin, berlin"
                    defaultValue={this.keywords}
                  />
                  <InputGroupAddon addonType="prepend">
                    <Button color="success" onClick={this.search}>
                      Search
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            {this.state.result.length == 0 && (
              <Row className="justify-content-center flex-column text-center mt-3 mb-3">
                <h1 className="text-info">No results were found.</h1>
                <h2 className="text-info">Try changing the keyword!</h2>
              </Row>
            )}
						{this.state.loadApi && <div className="loadingModal"><div className="loading"/></div>}
            {this.state.result.length != 0 && (
              <div className="search--result">
                {this.state.result.map((item, index) => {
                  return (
                    <Link
                      className="none-decoration"
                      to={`/weather/${item.woeid}`}
                      key={index}
                    >
                      <p className="h4">{item.title}</p>
                    </Link>
                  );
                })}
              </div>
            )}
          </Container>
        </div>
      );
    }
  }
}
