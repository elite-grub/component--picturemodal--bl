import React from 'react';
import '../../../public/dist/style.css';

const ModalInfo = ({ user }) => (
  <div className="model-info">
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
            {user.friends_count}
          </span>
          <span className="review-count">
            <i className="fas fa-star" />
            <i className="fas fa-square" />
            {user.review_count}
          </span>
          <span className="user-status">
            {(user.elite_status) ? "elite '19" : 'not elite'}
          </span>
        </div>
      </div>
    </div>
    <div className="user-review">
      <div className="review">{user.review}</div>
      <div className="date">{user.review_date}</div>
      <div className="voting">
        <p className="voting-info">Was this photo.....?</p>
        <div className="helpful-buttons">
          <button className="helpful" type="submit">
            <span className="icon">
              <i className="fas fa-arrow-alt-circle-up" />
            </span>
            <span>
              Helpful
            </span>
          </button>
          <button className="not-helpful" type="submit">
            <span className="icon">
              <i className="fas fa-arrow-alt-circle-down" />
            </span>
            <span>
              Not Helpful
            </span>
          </button>
        </div>
      </div>
      <div className="reservation">
        <span className="icon">
          <i className="material-icons">date_range</i>
        </span>
        <span>
          Make a Reservation
        </span>
      </div>
    </div>
  </div>
);

export default ModalInfo;
