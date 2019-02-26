import React from 'react';
import Modal from './Modal';
import Pictures from './Pictures';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <button className="back-button" type="submit">back</button>
        <Pictures />
        <button className="forward-button" type="submit">forward</button>
        <Modal />
      </div>
    );
  }
}

export default Container;
