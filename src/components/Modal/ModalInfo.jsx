import React from 'react';
import '../../../public/dist/style.css';

const ModalInfo = ({ user }) => {
  const dateFormat = (time) => {
    const date = time.slice(8, time.length);
    let month = time.slice(5, 7);
    const year = time.slice(0, 4);
    if (month === '01') month = 'January';
    if (month === '02') month = 'February';
    if (month === '03') month = 'March';
    if (month === '04') month = 'April';
    if (month === '05') month = 'May';
    if (month === '06') month = 'June';
    if (month === '07') month = 'July';
    if (month === '08') month = 'August';
    if (month === '09') month = 'September';
    if (month === '10') month = 'October';
    if (month === '11') month = 'November';
    if (month === '12') month = 'December';
    return `${month} ${date}, ${year}`;
  };
  return (
    <div className="model-info">
      <span className="closex">Close</span>
      <span className="close">&times;</span>
      <div className="user">
        <div className="user-avatar">
          <img className="user-pic" src={user.user_pic} alt="pic" />
        </div>
        <div className="user-info">
          <div className="user-name">{user.username}</div>
          <div className="user-status">
            <span className="friends-count">
              <i className="fas fa-male" />
              <i className="fas fa-female" />
              <b>{user.friends_count}</b>
            </span>
            <span className="review-count">
              <i className="fas fa-star" />
              <i className="fas fa-square" />
              <b>{user.review_count}</b>
            </span>
            <span className="user-status">
              <b>{(user.elite_status) ? "Elite '19" : ''}</b>
            </span>
          </div>
        </div>
      </div>
      <div className="user-review">
        <div className="review">{user.review}</div>
        <div className="date">{ (user.review_date) ? dateFormat(user.review_date) : '' }</div>
        <div className="voting">
          <p className="voting-info">Was this photo.....?</p>
          <div className="helpful-buttons">
            <button className="helpful" type="submit">
              <span className="icon">
                <i className="fas fa-arrow-up" />
              </span>
              <span>
                Helpful
              </span>
            </button>
            <button className="not-helpful" type="submit">
              <span className="icon">
                <i className="fas fa-arrow-down" />
              </span>
              <span>
                Not Helpful
              </span>
            </button>
          </div>
        </div>
        <div className="reservation">
          <div className="icon">
            <i className="material-icons">date_range</i>
          </div>
          <div className="makeres">
            Make a Reservation
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
