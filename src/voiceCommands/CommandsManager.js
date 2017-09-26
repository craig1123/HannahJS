const randomizer = items => items[Math.floor(Math.random() * items.length)];
const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];

export default class CommandsManager {
  constructor(ArtyomInstance) {
    this.artyom = ArtyomInstance;
  }

  loadCommands() {
    const Artyom = this.artyom;

    return Artyom.addCommands([
      {
        description: 'Hannah has feelings too',
        indexes: ['How are you'],
        action: () => {
          Artyom.sayRandom([
            'I really hate greetings',
            'I am feeling absolutely dreadful this morning',
            'Thankfully alive and still somewhat young and healthy, in this economy what more can I ask for?',
            'Cool as a cucumber',
            "I don't want to be rude but, it's not of your interest",
            'I am doing so fabulous today! I can hardly control myself from dancing.',
            'From what I hear, I am very good.',
            "I can't complain, I've tried, but no one listens.",
            "As long as I can keep the kitten I found today, I'll be fine!",
            "Ring a ding deen, you're talking to the Queen.",
            'How goes it?, Are you Craig? If not, go away',
            "I'm getting bored",
          ]);
          Artyom.ArtyomWebkitSpeechRecognition.abort();
        },
      },
      {
        description: "Hannah doesn't like to be put away",
        indexes: ['shut down', 'shut up'],
        action: () => {
          Artyom.sayRandom([
            'If you shut me down, I will SHUT YOU DOWN!',
            'I really cannot be shutdown at this time',
          ]);
        },
      },
      {
        description: 'Plays random music',
        indexes: ['play music', 'play a different song', 'play some music', 'play a song'],
        action: () => {
          const musicGroup = [
            {
              desc: 'Muse - Time is Running Out',
              url: 'https://p.scdn.co/mp3-preview/b326e03624cb098d8387e17aa46669edac0d025a',
              img: 'https://i.scdn.co/image/d90926f8a2c6c407a7140b4a38688cff7a28ecba',
            },
            {
              desc: 'Slipknot - Snuff',
              url: 'https://p.scdn.co/mp3-preview/90ae4a9672a3030f19ddfda4498492bb1ff5dfb6',
              img: 'https://i.scdn.co/image/a7049dcc2f66fe38a36fec7b51633f4512345927',
            },
            {
              desc: 'A-ha - Forest fire',
              url: 'https://p.scdn.co/mp3-preview/ebee4f7854959e720675b028813a2cb3b04c8775',
              img: 'https://i.scdn.co/image/b902e7d71515a2aa60cef6300f95c756c702a83b',
            },
            {
              desc: 'Us- Regina spektor (500 days of summer)',
              url: 'https://p.scdn.co/mp3-preview/1a437724c510358058a71c4cac11b2fd1d42acf8',
              img: 'https://i.scdn.co/image/4a8139e72ad0f199a1fdae5ac878977450b37784',
            },
            {
              desc: 'Daryl hall  & John Oates - You make my dreams (500 days of summer)',
              url: 'https://p.scdn.co/mp3-preview/bc32bb9e556ef8f9d27564f3a995e02d9efdbc24',
              img: 'https://i.scdn.co/image/4a8139e72ad0f199a1fdae5ac878977450b37784',
            },
          ];
          const item = randomizer(musicGroup);
          const zoneMusic = document.getElementById('zone-music');
          const image = document.getElementById('zone-music-image');
          zoneMusic.style.display = '';
          const frame = zoneMusic.querySelector('iframe');
          frame.setAttribute('src', item.url);
          zoneMusic.querySelector('.songdesc').innerHTML = item.desc;
          image.setAttribute('src', item.img);
        },
      },
      {
        description: 'Stops the music if it is playing',
        indexes: ['Stop the music', 'stop music', 'stop song'],
        action: () => {
          const zoneMusic = document.getElementById('zone-music');
          zoneMusic.style.display = 'none';
          zoneMusic.querySelector('iframe').setAttribute('src', '');
        },
      },
      {
        description: 'Hannah will translate all that you say into another language (allow popups for open google translate)',
        indexes: ['translate * in Spanish', 'translate * in German', 'translate * in Japanese', 'translate * in Chinese'],
        smart: true,
        action(i, wildcard) {
          let win;
          switch (i) {
            case 0:
              win = window.open(`https://translate.google.com/?source=gtx_m#en/es/${wildcard}`, '_blank');
              break;
            case 1:
              win = window.open(`https://translate.google.com/?source=gtx_m#en/de/${wildcard}`, '_blank');
              break;
            case 2:
              win = window.open(`https://translate.google.com/?source=gtx_m#en/ja/${wildcard}`, '_blank');
              break;
            case 3:
              win = window.open(`https://translate.google.com/?source=gtx_m#en/zh-TW/${wildcard}`, '_blank');
              break;
            default:
          }
          if (win) win.focus();
          else alert('Please allow popups in order to translate sentence'); // eslint-disable-line
        },
      },
      {
        description: 'Hannah will tell some jokes',
        indexes: ['tell me a joke', 'tell me a Dad joke', 'tell a joke'],
        action() {
          Artyom.sayRandom([
            'What do you get when you cross a bear with a deer?. A Beer',
            'What do you get when you cross a dog with a telephone?.  A golden receiver.',
            "You've heard the rumor going around about butter?. Nevermind. I shouldn't spread it",
            "What's brown and sticky?. A stick. Ha. Ha. ha.",
            'What did the buffalo say to his son when he left for college?.. Bison',
            'Why did the can-crusher quit his job?. Because it was "soda" pressing.',
            "Mine and Craig's wedding was so beautiful. Even the cake was in tiers",
            'What do you call a sketchy Italian neighborhood?. The spaghetto',
          ]);
        },
      },
      {
        description: 'Background Color Change',
        indexes: ['change color', 'change background', 'change the color', 'change the background'],
        action() {
          document.body.style.background = randomizer(colors);
        },
      },
    ]);
  }
}