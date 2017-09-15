import React, { Component } from 'react';
import Hannah from './components/Hannah';
import RepeatWords from './components/RepeatWords';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <RepeatWords />
        <Hannah />
      </div>
    );
  }
}
