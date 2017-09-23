/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import Artyom from 'artyom.js';
import AbstractSettings from './AbstractSettings';
import Glowy from './Glowy';
import Music from './Music';
import ArtyomCommandsManager from './../voiceCommands/CommandsManager.js';

const hannahOptions = {
  lang: 'en-GB',
  debug: 'false',
  continuous: true,
  soundex: true,
  listen: true,
  speed: 0.7,
  executionKeyword: 'Hannah',
  obeyKeywod: 'Hannah',
  name: 'Hannah',
};

class HannahJS extends AbstractSettings {
  constructor(props, context) {
    super(props, context);
    this.Hannah = new Artyom();
    // Load some commands to Artyom using the commands manager
    const CommandsManager = new ArtyomCommandsManager(this.Hannah);
    CommandsManager.loadCommands();
  }

  componentDidMount() {
    this.startAssistant();
    this.recognizeText();
    this.getCommands();
  }

  startAssistant = () => {
    this.Hannah.initialize(hannahOptions).then(() => {
      this.Hannah.getAvailableCommands();
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });
  }

  recognizeText = () => {
    this.Hannah.redirectRecognizedTextOutput((recognized, isFinal) => {
      if (!this.Hannah.isSpeaking()) {
        if (isFinal) {
          this.updateRedux('spokenWords', recognized.toUpperCase());
          this.updateRedux('thinking', false);
        } else {
          this.updateRedux('thinking', true);
        }
      }
    });
  }

  getCommands = () => {
    const commands = this.Hannah.getAvailableCommands();
    this.updateRedux('commands', commands);
  }

  stopMusic = () => this.Hannah.simulateInstruction('hannah stop the music');
  startMusic = () => this.Hannah.simulateInstruction('play some music');

  render() {
    return (
      <div>
        <Glowy startMusic={this.startMusic} {...this.props} />
        <Music stopMusic={this.stopMusic} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ // eslint-disable-line

});
export default (connect(mapStateToProps)(HannahJS));
