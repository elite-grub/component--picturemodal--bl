import React from 'react';
import '../../../public/dist/style.css';

const ModalPic = ({ pictures, pic_count }) => (
  <div className="modal-pic-container">
    <div className="modal-controller">
      <button className="back-button" type="submit">
        <i className="material-icons">&#xe314;</i>
      </button>
      <img className="modal-pic" src={pictures[0]} alt="" />
      <button className="forward-button" type="submit">
        <i className="material-icons">&#xe315;</i>
      </button>
    </div>
    <div className="modal-footer">
      <ul className="footer-inner">
        <li>
          <span className="browse">
            <i className="material-icons">dashboard</i>
            Browse All
          </span>
        </li>
        <li>
          <span className="photo-counter">
            1 of
            {pic_count}
          </span>
        </li>
        <li>
          <span className="share">
            <i className="fas fa-share-square" />
          </span>
          <span className="compliment">
            <i className="fas fa-award" />
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
