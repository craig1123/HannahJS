import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  image: {
    height: '130px',
    width: '130px',
  },
  zoneMusic: {
    display: 'none',
    textAlign: 'center',
    marginTop: '10px',
  },
  imageBox: {
    marginleft: '25px',
  },
};

const Music = ({ stopMusic }) => (
  <section id="zone-music" style={styles.zoneMusic}>
    <iframe title="music" />
    <div style={styles.imageBox}>
      <div>
        <h4>Music source - Spotify</h4>
        <span className="songdesc" />
        <br />
        <img id="zone-music-image" alt="music" style={styles.image} />
      </div>
      <a role="button" tabIndex={0} onClick={stopMusic}>Close music</a>
    </div>
  </section>
);

Music.propTypes = {
  stopMusic: PropTypes.func,

};

export default Music;