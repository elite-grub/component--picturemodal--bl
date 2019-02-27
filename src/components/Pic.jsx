import React from 'react';
import '../../public/dist/style.css';

const Pic = ({ picture }) => (
  <div className="Pic">
    <img className="outer_pic" src={picture} alt="pic" />
  </div>
);

export default Pic;
