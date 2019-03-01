import React from 'react';
import ModalPic from './ModalPic';
import ModalInfo from './ModalInfo';
import '../../../public/dist/style.css';

const Modal = ({ user, pictures, pic_count, openModal }) => (
  <div className="modal" style={{ display: openModal }}>
    <div className="modal-container">
      <button className="back-button" type="submit">
        <i className="fas fa-angle-left" />
      </button>
      <ModalPic pictures={pictures} pic_count={pic_count} />
      <button className="forward-button" type="submit">
        <i className="fas fa-angle-right" />
      </button>
      <ModalInfo user={user} />
    </div>
  </div>
);

export default Modal;
