import React, { PureComponent } from 'react';
import Modal from './Modal';

const styles = {
  placemenet: {
    position: 'absolute',
    bottom: '30px',
    left: '30px',
  },
  zero: {
    marginTop: 0,
  },
};

export default class About extends PureComponent {
    state = { open: false }

    toggleModal = bool => () => {
      this.setState({ open: bool });
    }

    render() {
      return (
        <div style={styles.placemenet}>
          <a role="button" tabIndex={0} onClick={this.toggleModal(true)}>About Hannah</a>
          <Modal onClose={this.toggleModal(false)} show={this.state.open}>
            <h2 style={styles.zero}>About Hannahjs</h2>
            <p>
              My wife Hannah was gone for a month to New York to train for her
              new finance job. I missed her a lot so I made a recreation of her
              through voice automation and response.
            </p>
            <p>
              I am using React and Redux for building the website and
              <a href="https://sdkcarlos.github.io/sites/artyom.html"> Artyom.js </a>
              for speech recognition and feedback.
            </p>
            <br />
            <br />
            <p>
              See more fun websites at <a href="https://craig1123.github.io/">https://craig1123.github.io/</a>
            </p>

          </Modal>
        </div>
      );
    }
}
