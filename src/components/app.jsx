/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Container from './Container';
import Modal from './Modal/Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [
        'https://s3-us-west-1.amazonaws.com/elite-grub/food4.jpg', 'https://s3-us-west-1.amazonaws.com/elite-grub/food5.jpg', 'https://s3-us-west-1.amazonaws.com/elite-grub/food6.jpg',
      ],
    };
  }

  render() {
    return (
      <div className="showcase-container">
        <Container pictures={this.state.pictures} />
        <div className="footer">This is for the basic footer</div>
        <Modal />
      </div>
    );
  }
}

export default App;
