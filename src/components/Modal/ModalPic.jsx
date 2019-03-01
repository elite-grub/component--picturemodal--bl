import React from 'react';
import '../../../public/dist/style.css';

const ModalPic = ({ pictures, pic_count }) => (
  <div className="modal-pic-container">
    <div className="modal-controller">
      <img className="modal-pic" src={pictures[0]} alt="" />
    </div>
    <div className="modal-footer">
      <ul className="footer-inner">
        <li className="left">
          <span className="browse">
            <i className="material-icons">dashboard</i>
            Browse All
          </span>
        </li>
        <li className="middle">
          <span className="photo-counter">
            1 of
            {' '}
            {pic_count}
          </span>
        </li>
        <li className="right">
          <span className="share">
            <i className="fas fa-share-square" />
            Share
          </span>
          <span className="compliment">
            <i className="fas fa-award" />
            Compliment
          </span>
          <span className="report">
            <i className="fa fa-flag" />
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default ModalPic;
