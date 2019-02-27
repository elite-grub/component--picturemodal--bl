import React from 'react';
import Pic from './Pic';
import '../../public/dist/style.css';

const Container = ({ pictures }) => (
  <div className="container">
    <div className="controller">
      <button className="back-button" type="submit">back</button>
      <div className="pictures">
        <Pic picture={pictures[0]} />
        <Pic picture={pictures[1]} />
        <Pic picture={pictures[2]} />
      </div>
      <button className="forward-button" type="submit">forward</button>
    </div>
  </div>
);

export default Container;
