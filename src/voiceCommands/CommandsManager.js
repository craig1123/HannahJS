const randomizer = items => items[Math.floor(Math.random() * items.length)];

export default class CommandsManager {
  constructor(ArtyomInstance) {
    this.artyom = ArtyomInstance;
  }

  loadCommands() {
    const Artyom = this.artyom;

    return Artyom.addCommands([
      {
        indexes: ['Hello', 'How are you'],
        action: () => {
          Artyom.sayRandom([
            'I really hate greetings',
            'I am feeling absolutely dreadful this morning',
          ]);
        },
      },
      {
        indexes: ['shut down'],
        action: () => {
          Artyom.say('If you shut me down, I will SHUT YOU DOWN!');
        },
      },
      {
        description: 'Play random music in a iframe',
        indexes: ['Hannah play some music', 'play music', 'play some music'],
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
          zoneMusic.show().find('iframe').attr('src', (item.url));
          zoneMusic.find('.songdesc').html(item.desc);
          image.attr('src', item.img);
        },
      },
      {
        description: "Say : 'Hannah stop the music now' if the music is playing",
        indexes: ['Hannah stop the music', 'stop music'],
        action: () => {
          const zoneMusic = document.getElementById('zone-music');
          zoneMusic.hide().find('iframe').attr('src', '');
        },
      },
    ]);
  }
}