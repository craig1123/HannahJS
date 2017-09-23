import React, { Component } from 'react';
import Artyom from 'artyom.js';
import Hannah from './components/Hannah';
import RepeatWords from './components/RepeatWords';
import Modal from './components/Modal';

const hannah = new Artyom();

export default class App extends Component {
  state = { open: false }

  componentWillMount() {
    this.isSupported();
  }

  isSupported = () => {
    if (!hannah.recognizingSupported()) {
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <div className="hannah-app">
        <Modal show={this.state.open} showX={false} preview="https://www.google.com/chrome/browser/desktop/index.html">
          The browser you are using cannot support using Hannah.
        </Modal>
        <RepeatWords />
        <Hannah />
      </div>
    );
  }
}
