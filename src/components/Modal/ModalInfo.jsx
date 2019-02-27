import React from 'react';
import '../../../public/dist/style.css';

class ModalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="model-info">
        <div className="user">
          <div className="user-avatar">
            <img className="user-pic" src={this.props.user.user_pic} alt="pic" />
          </div>
          <div className="user-info">
            <div className="user-name">{this.props.user.username}</div>
            <div className="user-status">
              <span className="friends-count">{this.props.user.friends_count}</span>
              <span className="review-count">{this.props.user.review_count}</span>
              <span className="user-status">{this.props.user.elite_status}</span>
            </div>
          </div>
        </div>
        <div className="user-review">
          <div className="review">{this.props.user.review}</div>
          <div className="date">{this.props.user.review_date}</div>
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
