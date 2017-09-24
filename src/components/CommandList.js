import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal';

const styles = {
  placemenet: {
    position: 'absolute',
    bottom: '30px',
    right: '30px',
  },
  commands: {
    textAlign: 'left',
  },
  zero: {
    marginTop: 0,
  },
  command: {
    marginBottom: '5px',
  },
  underline: {
    textDecoration: 'underline',
  },
};

class CommandList extends PureComponent {
    static propTypes = {
      commands: PropTypes.any,
    }
    state = { open: false }

    toggleModal = bool => () => {
      this.setState({ open: bool });
    }

    mapCommands = command => (
      <li key={command.description} style={styles.command}>
        <div>
            Say: <span style={styles.underline}>{command.indexes[0]}</span>&nbsp;
          {command.indexes[1] &&
            <span>
              or <span style={styles.underline}>{command.indexes[1]}</span>
            </span>
          }
        </div>
        Expected: {command.description}
      </li>
    )

    render() {
      const { commands } = this.props;
      return (
        <div style={styles.placemenet}>
          <a role="button" tabIndex={0} onClick={this.toggleModal(true)}>See list of commands</a>
          <Modal onClose={this.toggleModal(false)} show={this.state.open}>
            <h2 style={styles.zero}>Commands</h2>
            <ul style={styles.commands}>
              {commands && commands.map(this.mapCommands)}
            </ul>
            <div>
              Want to add a command? Post an issue <a href="https://github.com/craig1123/hannahjs/issues">Here</a>

            </div>
          </Modal>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  commands: state.get('commands'),
});

export default (connect(mapStateToProps)(CommandList));
