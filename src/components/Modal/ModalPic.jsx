import React from 'react';
import '../../../public/dist/style.css';

const ModalPic = ({ pictures, pic_count }) => (
  <div className="modal-pic-container">
    <div className="modal-controller">
      <button className="back-button" type="submit">back</button>
      <img className="modal-pic" src={pictures[0]}alt="" />
      <button className="forward-button" type="submit">forward</button>
    </div>
    <div className="modal-footer">
      <ul className="footer-inner">
        <li>
          <span className="browse">Browse All</span>
        </li>
        <li>
          <span className="photo-counter"> 1 of {pic_count}</span>
        </li>
        <li>
          <span className="share">Share</span>
          <span className="report">Report</span>
        </li>
      </ul>
    </div>
  </div>
);

export default ModalPic;
