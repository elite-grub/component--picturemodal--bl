import React from 'react';
import '../../../public/dist/style.css';

class ModalInfo extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="model-info">
        <div className="user">
          <div className="user-avatar">
            <img className="user-pic" src="https://s3-us-west-1.amazonaws.com/elite-grub/food18.jpg" alt="pic" />
          </div>
          <div className="user-info">
            <div className="user-name">Brian</div>
            <div className="user-status">
              <span className="friends-count">Friends:27</span>
              <span className="review-count">Reviews:47</span>
              <span className="user-status">Status</span>
            </div>
          </div>
        </div>
        <div className="user-review">
          <div className="review">This food sucks im never comming </div>
          <div className="date"> August 17, 2014</div>
          <div className="voting">
            <p className="voting-info">Was this photo.....?</p>
            <div className="helpful-buttons">
              <button className="helpful" type="submit">
                <span className="icon">Up</span>
                <span>Helpful</span>
              </button>
              <button className="not-helpful" type="submit">
                <span className="icon">Dwn</span>
                <span>Not Helpful</span>
              </button>
            </div>
          </div>
          <div className="reservation">
            <span className="icon">calender</span>
            <span>Make a Reservation</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalInfo;
