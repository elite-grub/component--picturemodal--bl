/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Container from './Container';
import Modal from './Modal/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: 'none',
      user: [],
      pictures: [],
      pic_count: [],
      num: () => Math.floor(Math.random() * 100 + 1),
    };
    this.clickModal = this.clickModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`http://localhost:3050/user/${this.props.id}`)
      .then((res) => {
        this.setState({ user: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`http://localhost:3050/restaurant/${this.props.id}`)
      .then((res) => {
        this.setState({ pictures: res.data[0].url });
        this.setState({ pic_count: res.data[0].url.length });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clickModal() {
   if(this.state.openModal === 'none') {
     this.setState({ openModal: 'inline-flex' });
   } else {
    this.setState({ openModal: 'none' });
   }
  }

  clickOutsideModal(event) {
    console.log(this.refs('close'));
  }

  render() {
    return (
      <div className="showcase-container">
        <Container pictures={this.state.pictures} pic_count={this.state.pic_count} clickModal={this.clickModal} />
        <Modal user={this.state.user} pictures={this.state.pictures} pic_count={this.state.pic_count} openModal={this.state.openModal} clickModal={this.clickModal} />
      </div>
    );
  }
}

export default App;
