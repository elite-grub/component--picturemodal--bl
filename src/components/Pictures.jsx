import React from 'react';
import '../../public/dist/style.css';

class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <img className="outer_pic" src="https://s3-us-west-1.amazonaws.com/elite-grub/food1.jpg" alt="pic" />
        <img className="main_pic" src="https://s3-us-west-1.amazonaws.com/elite-grub/food2.jpg" alt="pic" />
        <img className="outer_pic" src="https://s3-us-west-1.amazonaws.com/elite-grub/food3.jpg" alt="pic" />

      </div>
    );
  }
}

export default Pictures;
