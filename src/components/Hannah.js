import React from 'react';
import { connect } from 'react-redux';
import AbstractSettings from './AbstractSettings';
import Glowy from './Glowy';

class Hannah extends AbstractSettings {
  render() {
    return (
      <div className="hannah">
        <Glowy {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => ({ // eslint-disable-line

});
export default (connect(mapStateToProps)(Hannah));