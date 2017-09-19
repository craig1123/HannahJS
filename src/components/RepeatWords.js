import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RepeatWords extends PureComponent {
  static propTypes = {
    spokenWords: PropTypes.string,
    thinking: PropTypes.bool,
  }

  render() {
    const { spokenWords, thinking } = this.props;
    return (
      <div className="display-box-container">
        {thinking ?
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
          :
          spokenWords
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spokenWords: state.get('spokenWords'),
  thinking: state.get('thinking'),
});
export default connect(mapStateToProps)(RepeatWords);
