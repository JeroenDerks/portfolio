import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { makeStyles } from '@material-ui/core';
import FreaksRegisterSketch from './FreaksRegisterSketch';
import { OthersContext } from 'Others';
import { videoStyle } from 'styles/global';

const linkStyle = makeStyles({
  link: {
    fontFamily: 'Helvetica Neue , Arial , sans-serif',
    padding: '1px 4px',
    backgroundColor: '#000',
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function FreaksRegister() {
  const {
    state: { mobile, padding, width },
  } = React.useContext(OthersContext);

  const classes = linkStyle();

  const desktopStyle = {
    position: 'fixed',
    bottom: padding.y + 20,
    left: 20 + padding.x,
    width: '25%',
    zIndex: 1000,
  };

  const style = videoStyle();

  return (
    <div style={{ display: 'block', height: '100vh' }}>
      <div style={{ display: 'block' }}>
        <P5Wrapper
          sketch={FreaksRegisterSketch}
          padding={padding.x}
          width={width.main}
        />
      </div>

      <div className={style.videoWrapper} style={mobile ? null : desktopStyle}>
        <iframe
          src="https://player.vimeo.com/video/121553579?color=ffffff&title=0&byline=0&portrait=0"
          title={'cover'}
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
          className={style.video}
        />
      </div>
    </div>
  );
}

export default FreaksRegister;
