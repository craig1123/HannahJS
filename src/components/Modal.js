import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  backdropStyle: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
    transition: '1s',
  },
  header: {
    height: '50px',
  },
  x: {
    float: 'right',
    fontSize: '30px',
  },
  body: {
    textAlign: 'center',
  },
  preview: {
    marginTop: '50px',
  },
};

const Modal = ({ children, show, onClose, showX, preview }) => {
  if (!show) {
    return null;
  }
  return (
    <section>
      <div className="modal-style">
        <div style={styles.header}>
          {showX && <a style={styles.x} role="button" tabIndex={0} onClick={onClose}>&#x2716;</a>}
        </div>
        <div style={styles.body}>
          {children}
          {preview &&
            <div style={styles.preview}>
              <a href={preview} className="preview-tag" target="_blank" rel="noopener noreferrer">
                Download Google Chrome
              </a>
              <div className="preview">
                <iframe
                  title="preview"
                  src={preview}
                  width="400px"
                  height="250px"
                />
              </div>
            </div>
          }
        </div>
      </div>
      <div style={styles.backdropStyle} role="presentation" onClick={onClose} />
    </section>
  );
};

Modal.defaultProps = {
  showX: true,
  preview: '',
};

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  showX: PropTypes.bool,
  children: PropTypes.node,
  preview: PropTypes.string,
};

export default Modal;