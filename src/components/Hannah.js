/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import Artyom from 'artyom.js';
import AbstractSettings from './AbstractSettings';
import Glowy from './Glowy';
import Music from './Music';
import CommandList from './CommandList';
import Modal from './Modal';
import About from './About';
import ArtyomCommandsManager from './../voiceCommands/CommandsManager.js';
import allowMic from './../assets/allow-mic.png';

const hannahOptions = {
  lang: 'en-GB',
  debug: 'false',
  continuous: true,
  soundex: true,
  listen: true,
  speed: 0.7,
};

class HannahJS extends AbstractSettings {
  constructor() {
    super();
    this.Hannah = new Artyom();
    this.Hannah.ArtyomVoicesIdentifiers['en-GB'] = ['Google UK English Female', 'en_GB', 'en-GB'];
    // Load some commands to Artyom using the commands manager
    const CommandsManager = new ArtyomCommandsManager(this.Hannah);
    CommandsManager.loadCommands();
    this.state = { error: '', open: false };
  }

  componentDidMount() {
    this.startAssistant();
    this.recognizeText();
    this.getCommands();
  }

  startAssistant = () => {
    this.Hannah.initialize(hannahOptions).catch((err) => {
      this.setState({ error: err, open: true });
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

  randomCommand = () => {
    const { commands } = this.props;
    const random = commands[Math.floor(Math.random() * commands.length)];
    console.log(random.indexes[0]);
    this.Hannah.simulateInstruction(random.indexes[0]);
  }

  settleError = () => this.setState({ open: false });
  stopMusic = () => this.Hannah.simulateInstruction('stop the music');

  render() {
    const { open, error } = this.state;
    return (
      <div>
        <Glowy randomCommand={this.randomCommand} {...this.props} />
        <Music stopMusic={this.stopMusic} />
        <About />
        <CommandList />
        <Modal show={open} onClose={this.settleError}>
          Could not start Hannah because: {error}.
          {error === 'not-allowed' &&
            <div>
              Give this website microphone capabilities
              <img src={allowMic} alt="allow microphone screenshot" height="440px" width="375px" />
            </div>
          }
          {error === 'audio-capture' && 'Hannah needs a microphone to work'}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ // eslint-disable-line
  thinking: state.get('thinking'),
  commands: state.get('commands'),
});
export default (connect(mapStateToProps)(HannahJS));
