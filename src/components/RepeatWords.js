import React, { PureComponent } from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';

const cursorOptions = {
  hideWhenDone: true,
  hideWhenDoneDelay: 3000,
};

export default class RepeatWords extends PureComponent {
  static propTypes = {
    spokenWords: PropTypes.string,
  }
  state = { content: 'container', done: false }

  componentWillReceiveProps(nextProps) {
    if (nextProps.spokenWords !== this.state.content) {
      this.setState({ content: nextProps.spokenWords });
    }
  }

  stopTyping = () => {
    this.setState({ done: true });
  }

  render() {
    const { content } = this.state;
    return (
      <div className="display-box-container">
        <Typist
          className="Typist-message"
          startDelay={100}
          cursor={cursorOptions}
          onTypingDone={this.stopTyping}
        >
          {content}
        </Typist>
      </div>
    );
  }
}