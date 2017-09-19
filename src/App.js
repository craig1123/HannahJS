import React, { Component } from 'react';
import Artyom from 'artyom.js';
import Hannah from './components/Hannah';
import RepeatWords from './components/RepeatWords';

const hannah = new Artyom();

export default class App extends Component {
  state = { isSupported: true }

  componentWillMount() {
    this.isSupported();
  }

  isSupported = () => {
    if (!hannah.recognizingSupported()) {
      this.setState({ isSupported: false });
    }
  }

  render() {
    return (
      <div className="hannah-app">
        <RepeatWords />
        <Hannah />
      </div>
    );
  }
}
