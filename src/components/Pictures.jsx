import React from 'react';
import Pic from './Pic';
import '../../public/dist/style.css';

class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="pictures">
        <Pic />
        <Pic />
        <Pic />
      </div>
    );
  }
}

export default Pictures;
