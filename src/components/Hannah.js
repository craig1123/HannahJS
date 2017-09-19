/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import Artyom from 'artyom.js';
import AbstractSettings from './AbstractSettings';
import Glowy from './Glowy';
import ArtyomCommandsManager from './../voiceCommands/CommandsManager.js';

const hannahOptions = {
  lang: 'en-GB',
  debug: true,
  continuous: true,
  soundex: true,
  listen: true,
  speed: 0.7,
  executionKeyword: 'hannah',
};

class HannahJS extends AbstractSettings {
  constructor(props, context) {
    super(props, context);
    this.state = { artyomActive: true };

    this.Hannah = new Artyom();
    // Load some commands to Artyom using the commands manager
    const CommandsManager = new ArtyomCommandsManager(this.Hannah);
    CommandsManager.loadCommands();
  }

  componentDidMount() {
    this.startAssistant();
    this.recognizeText();
  }

  startAssistant = () => {
    this.Hannah.initialize(hannahOptions).then(() => {
      this.Hannah.getVoices();
      this.setState({ artyomActive: true });
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });
  }

  stopAssistant = () => {
    this.Hannah.fatality().then(() => {
      console.log('Hannah has been succesfully stopped');
      this.setState({ artyomActive: false });
    });
  }

  recognizeText = () => {
    this.Hannah.redirectRecognizedTextOutput((recognized, isFinal) => {
      if (isFinal) {
        this.updateRedux('spokenWords', recognized.toUpperCase());
        this.updateRedux('thinking', false);
      } else {
        this.updateRedux('thinking', true);
      }
    });
  }

  stopMusic = () => this.Hannah.simulateInstruction('hannah stop the music');
  startMusic = () => this.Hannah.simulateInstruction('play some music');

  render() {
    return (
      <div>
        <Glowy startMusic={this.startMusic} {...this.props} />

        <section id="zone-music" style={{ display: 'none' }}>
          <header>
            <iframe title="music" />
          </header>
          <div>
            <div>
              <h4>Music source - Spotify</h4>
              <span className="songdesc" />
              <br />
              <img id="zone-music-image" alt="music" style={{ height: '130px', width: '130px' }} />
            </div>
            <a role="button" tabIndex={0} onClick={this.stopMusic}>Close music</a>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ // eslint-disable-line

});
export default (connect(mapStateToProps)(HannahJS));
