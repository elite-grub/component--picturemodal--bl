import React from 'react';
import '../../public/dist/style.css';

const Container = ({ pictures }) => (
  <div className="container">
    <div className="controller">
      <button className="back-button" type="submit">
        <i className="material-icons">&#xe314;</i>
      </button>
      <div className="pictures">
        <div className="Pic">
          <img className="outer_pic" src={pictures[3]} alt="pic" />
        </div>
        <div className="Pic">
          <img className="outer_pic" src={pictures[1]} alt="pic" />
        </div>
        <div className="Pic">
          <img className="outer_pic" src={pictures[2]} alt="pic" />
        </div>
      </div>
      <button className="forward-button" type="submit">
        <i className="material-icons">&#xe315;</i>
      </button>
    </div>
  </div>
);

export default Container;
