import React from 'react';
import Container from './Container';
import styles from '../../public/dist/style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="showcase-container">
          <div className="inner-container">
            <Container />
            <div className={styles.footer}>This is for the basic footer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
