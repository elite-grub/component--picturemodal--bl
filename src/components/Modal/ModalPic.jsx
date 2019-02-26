import React from 'react';
import ModelController from './ModalController';
import '../../../public/dist/style.css';

class ModalPic extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="modal-pic-container">
        <ModelController />
        <div className="modal-footer">
          <ul className="footer-inner">
            <li>
              <span className="browse">Browse All</span>
            </li>
            <li>
              <span className="photo-counter">47 of 356</span>
            </li>
            <li>
              <span className="share">Share</span>
              <span className="report">Report</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ModalPic;
