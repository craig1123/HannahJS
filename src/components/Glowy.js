import React from 'react';
import AbstractSettings from './AbstractSettings';

export default class Glowy extends AbstractSettings {
  handleHover = bool => this.updateRedux('hovering', bool)

  render() {
    const styles = this.getStyles();
    const { helpGlowy, hovering } = this.props;
    return (
      <div style={styles.glowy} onClick={() => this.updateRedux('helpGlowy', !helpGlowy)}>
        <div
          className={!helpGlowy || !helpGlowy ? 'glowy' : helpGlowy ? '' : 'noGlow'}
          onMouseEnter={this.handleHover.bind(this, true)}
          onMouseLeave={this.handleHover.bind(this, false)}
        >
          <div style={styles.bolt}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 272.8" height="45" width="45">
              <style>{'\
                  .a{fill:#3fd290;}\
                  .b{fill:#35a8e9;}\
                  .c{fill:none;}\
                  .d{fill:#3ed18f;}\
                  .e{fill:#656565;}\
                '}
              </style>
              <metadata id="metadata3649" />
              <defs id="defs3647" />
              <path
                id="path1"
                d="m21.6-325.8c0-0.6-19.3 28.1-42.8 63.8-23.5 35.7-42.8 65.3-42.8 65.9 0 0.6 9 14.7 20 31.4 16.5 25.1 20.1 30 20.8 28.5 0.9-2.2 44.9-187.9 44.9-189.5z"
                className={!helpGlowy ? 'a' : helpGlowy || hovering ? 'a' : 'e'}
              />
              <path
                id="path2"
                d="m-23.5-82.6c0.3-0.8 10.5-43.5 22.9-94.9 12.3-51.4 22.6-93.5 22.9-93.5 0.5 0 39.6 58.5 40.2 60.1 0.3 0.8-83.1 126.4-85.4 128.8-0.6 0.6-0.8 0.5-0.5-0.5z"
                className={!helpGlowy ? 'b' : helpGlowy || hovering ? 'b' : 'e'}
              />
              <g id="g3704">
                <path
                  id="path3"
                  d="m-244.8-237.8c-0.3 0-10.6 42.6-22.9 94.7-12.3 52.1-22.6 95.4-22.9 96.2-0.3 1-0.1 1.1 0.5 0.5 1.5-1.5 84.6-127.6 85.3-129.3 0.4-1-6.2-11.8-19.5-31.8-11-16.7-20.3-30.3-20.5-30.3z"
                  className={!helpGlowy ? 'a' : helpGlowy || hovering ? 'a' : 'e'}
                />
                <path
                  id="path4"
                  d="m-308.8-145c-11-16.5-20-30.4-20-31 0-0.6 19.3-29.8 42.8-65 23.5-35.2 42.8-63.5 42.8-62.9 0 1.6-44 184.9-44.9 187-0.6 1.5-4.2-3.3-20.8-28.1z"
                  className={!helpGlowy ? 'b' : helpGlowy || hovering ? 'lit' : 'e'}
                />
              </g>
              <path
                id="path3672"
                d="m73.4 192.3c-2.6-2.9-18.5-26.6-30.3-45.2-6.1-9.7-7-11.6-5.9-13.7 5-9.4 81.3-124 81.7-122.8 0.4 1.1-11.7 52.9-33.2 143.1-5.2 21.6-9.5 39.7-9.6 40.2-0.1 0.5-1.3-0.3-2.7-1.7z"
                className="c"
              />
              <path
                id="path3674"
                d="m73.4 192.3c-2.6-2.9-18.5-26.6-30.3-45.2-6.1-9.7-7-11.6-5.9-13.7 5-9.4 81.3-124 81.7-122.8 0.4 1.1-11.7 52.9-33.2 143.1-5.2 21.6-9.5 39.7-9.6 40.2-0.1 0.5-1.3-0.3-2.7-1.7z"
                className="c"
              />
              <path
                id="path3676"
                d="m73.4 192.3c-2.6-2.9-18.5-26.6-30.3-45.2-6.1-9.7-7-11.6-5.9-13.7 5-9.4 81.3-124 81.7-122.8 0.4 1.1-11.7 52.9-33.2 143.1-5.2 21.6-9.5 39.7-9.6 40.2-0.1 0.5-1.3-0.3-2.7-1.7z"
                className="c"
              />
              <g id="g3708">
                <path
                  id="path5"
                  d="m73.6 263c0.3-0.8 10.5-43.5 22.9-94.9 12.3-51.4 22.6-93.5 22.9-93.5 0.5 0 39.6 58.5 40.2 60.1 0.3 0.8-83.1 126.4-85.4 128.8-0.6 0.6-0.8 0.5-0.5-0.5z"
                  className={!helpGlowy ? 'd' : helpGlowy || hovering ? 'd' : 'e'}
                />
                <path
                  id="path6"
                  d="m73.4 193.5c-2.6-2.9-18.5-26.6-30.3-45.2-6.1-9.7-7-11.6-5.9-13.7 5-9.4 81.3-124 81.7-122.8 0.4 1.1-11.7 52.9-33.2 143.1-5.2 21.6-9.5 39.7-9.6 40.2-0.1 0.5-1.3-0.3-2.7-1.7z"
                  className={!helpGlowy ? 'b' : helpGlowy || hovering ? 'b' : 'e'}
                />
              </g>
              <path
                id="path7"
                d="m136.6-31.3c0-2.5 43.5-184.2 44.3-185 0.6-0.6 34.8 51.4 37.2 56.4l2 4.2-23.4 35.7c-29 44.2-57.7 87.4-59 88.8-0.6 0.7-1 0.6-1-0.1z"
                className={!helpGlowy ? 'b' : helpGlowy || hovering ? 'b' : 'e'}
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  getStyles() {
    return {
      glowy: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        boxShadow: '0 0 10px #000',
        zIndex: 10000,
        position: 'absolute',
        backgroundColor: '#fff',
        cursor: 'pointer',
      },
      bolt: {
        height: 45,
        width: 45,
      },
    };
  }
}