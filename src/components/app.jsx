/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import faker from 'faker';
import axios from 'axios';
import Container from './Container';
import Modal from './Modal/Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: 'none',
      user: [],
      pictures: [],
      pic_count: [],
    };
    this.clickModal = this.clickModal.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const num = faker.random.number({ min: 1, max: 99 });
    axios.get(`/user/${num}`)
      .then((res) => {
        this.setState({ user: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`/restaurant/${num}`)
      .then((res) => {
        this.setState({ pictures: res.data[0].url });
        this.setState({ pic_count: res.data[0].url.length });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  clickModal() {
    this.setState({ openModal: 'inline-flex' });
  }

  render() {
    return (
      <div className="showcase-container">
        <Container pictures={this.state.pictures} clickModal={this.clickModal} />
        <div className="footer">
          <i className="material-icons">dashboard</i>
          See all
          {this.state.pic_count}
        </div>
        <Modal user={this.state.user} pictures={this.state.pictures} pic_count={this.state.pic_count} openModal={this.state.openModal}/>
      </div>
    );
  }
}

export default App;
