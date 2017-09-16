/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Artyom from 'artyom.js';
import Glowy from './Glowy';
import ArtyomCommandsManager from './../voiceCommands/CommandsManager.js';

const Hannah = new Artyom();
const hannahOptions = {
  lang: 'en-GB',
  debug: true,
  continuous: true,
  soundex: true,
  listen: true,
  speed: 0.7,
};

class HannahJS extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      artyomActive: false,
      textareaValue: '',
      artyomIsReading: false,
    };

    // Load some commands to Artyom using the commands manager
    const CommandsManager = new ArtyomCommandsManager(Hannah);
    CommandsManager.loadCommands();
  }

  componentDidMount() {
    this.startAssistant();
  }

  startAssistant = () => {
    Hannah.initialize(hannahOptions).then(() => {
      this.setState({ artyomActive: true });
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });
  }

  stopAssistant = () => {
    Hannah.fatality().then(() => {
      console.log('Hannah has been succesfully stopped');
      this.setState({ artyomActive: false });
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);
      this.setState({ artyomActive: false });
    });
  }

  speakText = () => {
    const self = this;
    this.setState({ artyomIsReading: true });

    // Speak text with Artyom
    Hannah.say(this.state.textareaValue, {
      onEnd() {
        self.setState({ artyomIsReading: false });
      },
    });
  }

  handleTextareaChange = (e) => {
    this.setState({ textareaValue: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="hannah">
          <Glowy {...this.props} />
        </div>
        <h1>Welcome to Hannah Assistant</h1>

        <p>
          In this very basic assistant, you can say hello and ask for some reports
           e.g `Generate report of April of this year`
        </p>

        <input type="button" value="Start Artyom" disabled={this.state.artyomActive} onClick={this.startAssistant} />
        <input type="button" value="Stop Artyom" disabled={!this.state.artyomActive} onClick={this.stopAssistant} />

        <p>I can read some text for you if you want:</p>
        <textarea rows="5" onChange={this.handleTextareaChange} value={this.state.textareaValue} />
        <br />
        <input type="button" value="Read Text" disabled={this.state.artyomIsReading} onClick={this.speakText} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ // eslint-disable-line

});
export default (connect(mapStateToProps)(HannahJS));
