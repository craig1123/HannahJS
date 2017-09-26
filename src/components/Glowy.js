import React from 'react';
import PropTypes from 'prop-types';

const Glowy = ({ randomCommand, thinking }) => (
  <section onClick={randomCommand} role="presentation" className="hannah">
    <div className="glowy-container">
      <div className={`glowy ${thinking ? 'glow-talk' : ''}`} />
    </div>
  </section>
);

Glowy.propTypes = {
  randomCommand: PropTypes.func,
  thinking: PropTypes.bool,
};

export default Glowy;