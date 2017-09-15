import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Actions } from './../reducer';

export default class AbstractSettings extends PureComponent {
    static propTypes = {
      dispatch: PropTypes.any,
    }
    getActions = () => bindActionCreators(Actions, this.props.dispatch)

    updateRedux = (key, value) => {
      if (typeof key === 'string') key = [key]; // eslint-disable-line
      this.getActions().updateState({ key: [...key], value });
    }
}