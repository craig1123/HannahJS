import React from 'react';
import AbstractSettings from './AbstractSettings';

export default class Glowy extends AbstractSettings {
  handleClick = () => {
    this.props.startMusic();
    // this.updateRedux('helpGlowy', !this.props.helpGlowy)
  }

  render() {
    return (
      <section onClick={this.handleClick} role="presentation" className="hannah">
        <div className="glowy-container">
          <div className={`glowy ${this.props.thinking ? 'glow-talk' : ''}`} />
        </div>
      </section>
    );
  }
}