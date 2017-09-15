import React, { Component } from 'react';
import Hannah from './components/Hannah';
import RepeatWords from './components/RepeatWords';

export default class App extends Component {
  state = { isChrome: false }

  componentWillMount() {
    const isChrome = this.isChrome();
    this.setState({ isChrome });
  }

  isChrome = () => {
    const isChromium = window.chrome;
    const winNav = window.navigator;
    const vendorName = winNav.vendor;
    const isOpera = winNav.userAgent.indexOf('OPR') > -1;
    const isIEedge = winNav.userAgent.indexOf('Edge') > -1;
    const isIOSChrome = winNav.userAgent.match('CriOS');

    if (isIOSChrome) return true;
    else if (
      isChromium !== null &&
      typeof isChromium !== 'undefined' &&
      vendorName === 'Google Inc.' &&
      isOpera === false &&
      isIEedge === false
    ) return true;
    return false;
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
