import React from 'react';
import ModalPic from './ModalPic';
import ModalInfo from './ModalInfo';
import '../../../public/dist/style.css';

const Modal = ({ user, pictures, pic_count }) => (
  <div className="modal">
    <ModalPic pictures={pictures} pic_count={pic_count} />
    <ModalInfo user={user} />
  </div>
);

export default Modal;
