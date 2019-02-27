import React from 'react';
import '../../public/dist/style.css';

class Pic extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="Pic">
        <img className="outer_pic" src="https://s3-us-west-1.amazonaws.com/elite-grub/food1.jpg" alt="pic" />
      </div>
    );
  }
}

export default Pic;
