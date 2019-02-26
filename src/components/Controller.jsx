import React from 'react';
import Pictures from './Pictures';
import '../../public/dist/style.css';

class Controller extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="controller">
        <button className="back-button" type="submit">back</button>
        <Pictures />
        <button className="forward-button" type="submit">forward</button>
      </div>
    );
  }
}
export default Controller;
