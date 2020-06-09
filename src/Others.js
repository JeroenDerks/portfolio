import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';

export const OthersContext = React.createContext();

const categoryHeader = {
  fontWeight: 700,
  padding: '0px 2px',
};

const projectHeader = {
  padding: '0px 2px',
};

const linkStyle = makeStyles({
  link: {
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
    },
  },
  title: {
    padding: '0px 2px',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
});

const categories = [
  {
    group: 'DHI GRAS',
    projects: [
      { link: 'dhi-portals', name: 'portals', comp: <></> },
      { link: 'dhi-website', name: 'website', comp: <></> },
      { link: 'dhi-videos', name: 'videos', comp: <></> },
    ],
  },
  {
    group: 'INSTALLATIONS',
    projects: [
      { link: 'urbanplanen', name: 'urbanplanen', comp: <></> },
      { link: 'stopmotion', name: 'stop motion machine', comp: <></> },
      { link: 'cover', name: 'cover', comp: <></> },
      { link: 'tingbjergceiling', name: 'tingbjerg ceiling', comp: <></> },
      { link: 'tingbjergtrees', name: 'tingbjerg trees', comp: <></> },
      { link: 'thefreaksregister', name: 'the freaks register', comp: <></> },
      { link: 'theshydie', name: 'the shy die', comp: <></> },
      { link: 'sphero', name: 'sphero', comp: <></> },
    ],
  },
  {
    group: 'WEB',
    projects: [
      { link: 'rebekkaborum', name: 'rebekka borum', comp: <></> },
      { link: 'aalborgsurreal', name: 'aalborg surreal', comp: <></> },
      { link: 'freespeech', name: 'platform for free speech', comp: <></> },
      { link: 'informationage', name: 'information age', comp: <></> },
    ],
  },
  {
    group: 'PERSONAL VIDEOS',
    projects: [
      { link: 'justwater', name: 'just water', comp: <></> },
      { link: 'aman', name: 'a man and his mind', comp: <></> },
      { link: 'fittingin', name: 'fitting in', comp: <></> },
      { link: 'au2pilot', name: 'au2pilot', comp: <></> },
    ],
  },
  {
    group: 'COMMERCIAL VIDEOS',
    projects: [
      { link: 'pilebyg', name: 'pilebyg', comp: <></> },
      { link: 'sofar', name: 'sofar', comp: <></> },
      { link: 'oersterk', name: 'oersterk', comp: <></> },
      { link: 'densorteskole', name: 'den sorte skole', comp: <></> },
    ],
  },
  {
    group: 'DEROOTED INTERNSHIP',
    projects: [
      { link: 'lps', name: 'laylor performance systems', comp: <></> },
      { link: 'aboveground', name: 'aboveground art supply', comp: <></> },
    ],
  },
];

function Others({ match }) {
  const calcPadding = () => {
    if (window.innerWidth < 600) return { y: 5, x: 5, text: 2 };
    else if (window.innerWidth < 1400) return { y: 10, x: 10, text: 4 };
    else return { y: 10, x: 17, text: 8 };
  };

  const [padding, setPadding] = React.useState(calcPadding);
  const [mobile, setMobile] = React.useState(window.innerWidth < 960);
  const classes = linkStyle();
  const { path } = match;

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPadding(calcPadding);
      setMobile(window.innerWidth < 960);
    });
  });

  return (
    <OthersContext.Provider
      value={{
        state: { mobile, padding },
        actions: {},
      }}
    >
      <Switch>
        {categories &&
          categories.map(({ projects }) =>
            projects.map(({ comp, name, link, i }) => (
              <Route path={`${path}/${link}`} key={i}>
                <div>{name}</div>
              </Route>
            ))
          )}
      </Switch>

      <Box
        width={'20%'}
        position="fixed"
        right={padding.y * 8}
        bottom={padding.y * 8}
        style={{ border: '1px solid red' }}
      >
        {categories &&
          categories.map(({ group, projects }, i) => (
            <Box pt={2} key={i}>
              <Typography variant="body2" style={categoryHeader}>
                {group}
              </Typography>
              {projects &&
                projects.map(({ link, name }) => (
                  <Typography variant="body2" className={classes.title}>
                    <Link to={`${path}/${link}`} className={classes.link}>
                      {name}
                    </Link>
                  </Typography>
                ))}
            </Box>
          ))}
      </Box>
    </OthersContext.Provider>
  );
}

export default Others;
