import React from 'react';
// import P5Wrapper from 'react-p5-wrapper';
import { makeStyles } from '@material-ui/core';
// import AalborgSurrealSketch from './AalborgSurrealSketch';
import { OthersContext } from 'Others';

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

function Cursors() {
  const {
    state: { mobile, padding, width },
  } = React.useContext(OthersContext);

  const classes = linkStyle();

  const desktopStyle = {
    position: 'fixed',
    bottom: padding.y + 20,
    left: 20 + padding.x,
  };

  return (
    <div style={{ display: 'block' }}>
      <div style={{ display: 'block' }}>
        {/* <P5Wrapper
          sketch={AalborgSurrealSketch}
          padding={padding.x}
          width={width.main}
        /> */}
      </div>
      <div style={!mobile ? desktopStyle : null}>
        <a href="https://derks.dk/aalborgsurreal/" className={classes.link}>
          aalborgsurreal.dk
        </a>
      </div>
    </div>
  );
}

export default Cursors;
