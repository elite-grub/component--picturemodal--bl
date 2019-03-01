import React from 'react';
import '../../public/dist/style.css';

const Container = ({ pictures, clickModal, pic_count }) => (
  <div className="container">
    <div className="controller">
      <img className="outer_pic" onClick={clickModal} src="https://s3-us-west-1.amazonaws.com/elite-grub/food-modal1.png" alt="pic" />
    </div>
  </div>
);

export default Container;

{/* <div className="pictures">
<div className="Pic">
  <img className="outer_pic" onClick={clickModal} src={pictures[0]} alt="pic" />
  <div className="overlay">
    <div className="text">blow up test</div>
  </div>
</div>
<div className="Pic">
  <img className="main_pic" onClick={clickModal} src={pictures[1]} alt="pic" />
  <div className="overlay">
    <div className="text">blow up test</div>
  </div>
</div>
<div className="Pic">
  <img className="outer_pic" onClick={clickModal} src={pictures[2]} alt="pic" />
  <div className="overlay">
    <div className="text">blow up test</div>
  </div>
</div>
<div className="footer">
  <i className="material-icons">dashboard</i>
  <div className="see-all">See all {pic_count}</div>
</div>
</div> */}
