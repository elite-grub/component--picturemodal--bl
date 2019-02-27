/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Container from './Container';
import Modal from './Modal/Modal';
import faker from 'faker';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      restaurant: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const num = faker.random.number({ min: 1, max: 99 });
    axios.get(`/user/${num}`)
      .then((res) => {
        console.log(res.data[0]);
        this.setState({ user: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`/restaurant/${num}`)
      .then((res) => {
        console.log(res.data[0]);
        this.setState({ restaurant: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="showcase-container">
        <Container pictures={this.state.user} />
        <div className="footer">This is for the basic footer</div>
        <Modal />
      </div>
    );
  }
}

export default App;
