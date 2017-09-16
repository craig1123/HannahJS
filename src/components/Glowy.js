import React from 'react';
import AbstractSettings from './AbstractSettings';

export default class Glowy extends AbstractSettings {
  handleClick = () => this.updateRedux('helpGlowy', !this.props.helpGlowy)

  render() {
    return (
      <div onClick={this.handleClick} role="presentation" className="glowy-container">
        <div className="glowy" />
      </div>
    );
  }
}