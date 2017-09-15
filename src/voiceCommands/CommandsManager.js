export default class CommandsManager {
  // The ArtyomCommandsManager class expects as argument in the constructor
  // an already declared instance of Artyom.js
  constructor(ArtyomInstance) {
    this.artyom = ArtyomInstance;
  }

  // Execute the loadCommands method to inject the methods to the instance of Artyom
  loadCommands() {
    const Artyom = this.artyom;

    // Here you can load all the commands that you want to Artyom
    return Artyom.addCommands([
      {
        indexes: ['Hello', 'Hi'],
        action: () => {
          Artyom.say('Hello, how are you?');
        },
      },
      {
        indexes: [/How are you/, /Regular expressions supported/],
        smart: true,
        action: () => {
          Artyom.say("I'm fine, thanks for asking !");
        },
      },
      {
        indexes: ['Generate reports of * of this year'],
        smart: true,
        action: (i, month) => {
          const year = new Date().getFullYear();

          Artyom.say(`Generating reports of ${month} ${year} `);

          Artyom.say('Ready ! What were you expecting? write some code you lazy bear !');
        },
      },
    ]);
  }
}