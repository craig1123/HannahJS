import React, { PureComponent } from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';

export default class RepeatWords extends PureComponent {
  static propTypes = {
    spokenWords: PropTypes.string,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.spokenWords !== this.state.content) {
      this.setState({ content: nextProps.spokenWords });
    }
  }

  render() {
    return (
      <div className="display-box-container">
        <Typist
          className="TypistExample-message"
          cursor={{ hideWhenDone: true }}
        >
          * Easy to style
          <br />
          * Easy to customize
        </Typist>
      </div>
    );
  }
}