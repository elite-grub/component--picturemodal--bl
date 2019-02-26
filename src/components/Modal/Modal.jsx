import React from 'react';
import ModalPic from './ModalPic';
import ModalInfo from './ModalInfo';
import '../../../public/dist/style.css';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="modal">
        <ModalPic />
        <ModalInfo />
      </div>
    );
  }
}

export default Modal;
