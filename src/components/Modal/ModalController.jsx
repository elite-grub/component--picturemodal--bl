import React from 'react';
import '../../../public/dist/style.css';

class ModalController extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="modal-controller">
        <button className="back-button" type="submit">back</button>
        <img className="modal-pic" src="https://s3-us-west-1.amazonaws.com/elite-grub/food20.jpg" alt="" />
        <button className="forward-button" type="submit">forward</button>
      </div>
    );
  }
}

export default ModalController;
